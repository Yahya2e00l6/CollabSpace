import { ConflictException, Injectable, NotFoundException, UnauthorizedException , BadRequestException  } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {CreateRequestDto} from "./dto/createrequest-auth.dto"
import { guestRequest } from './entities/guest-request.entity';
import { Team } from 'src/teams/entities/team.entity';
import { profile } from 'node:console';
import { UserData } from 'src/users/entities/user-data.entity';
import { Project } from 'src/projects/entities/project.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>,
    @InjectRepository(guestRequest)
    private requestRepository : Repository<guestRequest>,
    @InjectRepository(Team)
    private teamRepository : Repository<Team>,
    @InjectRepository(UserData)
    private userDataRepository : Repository<UserData>
  ){}

  async updateUserRole(userId: number, newRole: string) {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
          throw new NotFoundException(`User #${userId} not found!`);
      }
      user.role = newRole; 
      const updatedUser = await this.userRepository.save(user);
      return { 
          success: true, 
          message: `User role updated to ${newRole}!`, 
          user: updatedUser 
      };
  }

async getUserProjects(teamId: number, userId: number): Promise<any[]> {
      return await this.userRepository.createQueryBuilder('user')
          .innerJoin('PROJECT_MEMBERS', 'pm', 'pm.userID = user.ID')
          .innerJoin(Project, 'project', 'project.id = pm.projectID') 
          .leftJoin('project.team', 'team')     
          .select('project.id', 'id') 
          .addSelect('project.projectName', 'projectName')
          .addSelect('project.status', 'status')
          .where('user.ID = :userId', { userId })
          .andWhere('project.teamID = :teamId', { teamId }) 
          .getRawMany();
  }

  async gender(id : number) : Promise <any> {
    return await this.userRepository
    .createQueryBuilder('user')
    .leftJoin('user.profile' , 'profile')
    .select('profile.gender' , 'gender')
    .getRawOne()
  }
  async requests () : Promise <any> {
    return await this.requestRepository
    .createQueryBuilder('request')
    .select('request.id' , 'id')
    .addSelect('CONCAT(request.firstName , " " , request.lastName)' , 'fullName')
    .addSelect('request.cin' , 'cin')
    .addSelect('request.gender' , 'gender')
    .addSelect('request.email' , 'email')
    .addSelect('request.phoneNumber' , 'phone')
    .addSelect('TIMESTAMPDIFF(YEAR, request.birthDate, CURDATE())', 'age')
    .addSelect('request.status','status')
    .addSelect('request.createdAt' , 'createdAt')
    .addSelect('request.updatedAt' , 'updatedAt')
    .orderBy("FIELD(request.Status, 'pending', 'accepted', 'rejected')", "ASC")
    .addOrderBy("request.createdAt", "DESC")
    .getRawMany()
  }

  
  async rejectedRequest (id : number) : Promise <any> {
    return await this.requestRepository.update( id , {status : 'rejected'})
  }


  async RemoveUser( id : number ) : Promise <any> {
    await this.userDataRepository.delete({id : id})
    const result = await this.userRepository.delete(id)
    if( result.affected === 0 ){
      throw new NotFoundException (`User with ID ${id} not found`)
    }
    return { message: "User deleted successfully" };
  }

  async getTaskInfo( id : number ) : Promise <any[]> {
    return await this.userRepository
    .createQueryBuilder('user')
    .leftJoin('user.tasks' , 'tasks')
    .innerJoin('tasks.project','project')
    .select('tasks.id' , 'taskId')
    .addSelect('tasks.taskName' , 'taskName')
    .addSelect('tasks.createdAt' , 'createdAt')
    .addSelect('project.projectName' , 'project')
    .addSelect('tasks.status' , 'taskStatus')
    .where('user.id = :id',{id})
    .orderBy(`
      CASE tasks.status 
        WHEN 'pending' THEN 1 
        WHEN 'ongoing' THEN 2 
        WHEN 'completed' THEN 3 
        ELSE 4 
      END
    `, 'ASC')
    .getRawMany()
  }

  async getUserData() : Promise <any[]>{
    return await this.userRepository
    .createQueryBuilder('user')
    .innerJoin('user.profile' , 'profile')
    .leftJoin('user.team' , 'team')
    .select('user.id','id')
    .addSelect('CONCAT(profile.firstName , " " , profile.lastName )' , 'fullName')
    .addSelect('TIMESTAMPDIFF(YEAR, profile.birthDate, CURDATE())', 'age')
    .addSelect('user.role' , 'role')
    .addSelect('team.name','teamName')
    .addSelect('profile.gender','gender')
    .where('user.role != :role', { role: 'admin' })
    .getRawMany()
  }
  async getNoTeamMembers() : Promise <any[]>{
    return await this.userRepository
    .createQueryBuilder('user')
    .innerJoin('user.profile' , 'profile')
    .leftJoin('user.team','team')
    .select('user.id','id')
    .addSelect('CONCAT(profile.firstName , " " , profile.lastName)','fullName')
    .where('team.id IS NULL')
    .andWhere('user.role != :role', { role: 'manager' })
    .andWhere('user.role != :role', { role: 'admin' })
    .getRawMany()
  }
  async demoteToMember ( id : number ) : Promise <any> {
    await this.userRepository.update(id ,{role : 'member'})
    await this.teamRepository.update({manager : {id : id}} , {manager : null})
    return { message: 'User demoted and unassigned from team leadership successfully' };
  }

  async getTeamIdRaw(userid : number) : Promise <any>{
    const result = await this.userRepository
    .createQueryBuilder('user')
    .select('user.teamID' , 'teamId')
    .where('user.ID = :userid' , {userid})
    .getRawOne()
    return result
  }
  async validateUser(identifier : string ,  pass : string) : Promise <any>{
    const user = await this.userRepository.findOne({
      where : {identifier : identifier}
    })
    if(!user || user.password !== pass){
      throw new UnauthorizedException("Invalid credentials")
    }
      const {password, ...result} = user
      return result
  }

  async validateRequest(cin: string,email: string, phoneNumber: string,) : Promise <any> {
    const existingRequester = await this.requestRepository.findOne({
      where : [
        {cin : cin}, 
        {email : email}, 
        {phoneNumber : phoneNumber}
      ]
  });
  if(existingRequester){
    throw new ConflictException("This CIN, Email, or Phone Number is already registered.")
  }
  }
  async Requeststatus(cin: string,email: string, phoneNumber: string,) : Promise <any> {
    const existingRequest = await this.requestRepository.findOne({
      where :{ 
        cin : cin, 
        email : email, 
        phoneNumber : phoneNumber
      }
      
  });
  if(!existingRequest){
    throw new ConflictException("Request not found. Please check your information.")
  }
  return existingRequest;
  }
  async createRequest(dto :CreateRequestDto) : Promise <guestRequest> {
    await this.validateRequest(dto.cin , dto.email , dto.phoneNumber);
    const newRequest = this.requestRepository.create({
    firstName : dto.firstName,
    lastName : dto.lastName,
    cin : dto.cin,
    gender : dto.gender,
    email : dto.email,
    phoneNumber : dto.phoneNumber,
    birthDate : dto.birthDate,
    identifier: dto.identifier, 
    password: dto.password,
    status : "pending"
    })
    return await this.requestRepository.save(newRequest);
  }

async acceptRequest(requestId: number) {
      const request = await this.requestRepository.findOne({ where: { id: requestId } });
      
      if (!request) {
          throw new NotFoundException(`Request #${requestId} not found`);
      }
      if (request.status !== 'pending') {
          throw new BadRequestException('This request has already been processed!');
      }

      const newUser = this.userRepository.create({
          identifier: request.identifier,
          password: request.password, 
          role: 'member',
          request: request 
      });
      const savedUser = await this.userRepository.save(newUser);
      const newUserData = this.userDataRepository.create({
          user: savedUser, 
          firstName: request.firstName,
          lastName: request.lastName,
          birthDate: request.birthDate,
          cin: request.cin,
          email: request.email,
          phoneNumber: request.phoneNumber,
          gender: request.gender
      });
      await this.userDataRepository.save(newUserData);
      request.status = 'accepted';
      await this.requestRepository.save(request);

      return { success: true, message: 'User accepted and account created!' };
  }




  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
