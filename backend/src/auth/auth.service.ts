import { ConflictException, Injectable, UnauthorizedException  } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {CreateRequestDto} from "./dto/createrequest-auth.dto"
import { guestRequest } from './entities/guest-request.entity';
import { Team } from 'src/teams/entities/team.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>,
    @InjectRepository(guestRequest)
    private requestRepository : Repository<guestRequest>,
    @InjectRepository(Team)
    private teamRepository : Repository<Team>
  ){}



  async getNoTeamMembers() : Promise <any[]>{
    return this.userRepository
    .createQueryBuilder('user')
    .innerJoin('user.profile' , 'profile')
    .leftJoin('user.team','team')
    .select('user.id','id')
    .addSelect('CONCAT(profile.firstName , " " , profile.lastName)','fullName')
    .where('team.id IS NULL')
    .andWhere('user.role != :role', { role: 'manager' })
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
    status : "pending"
    })
    return await this.requestRepository.save(newRequest);
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
