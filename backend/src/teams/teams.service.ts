import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository , In } from 'typeorm';
import { Team } from './entities/team.entity';
import { groupBy } from 'rxjs';

@Injectable()
export class TeamsService {

  constructor(
    @InjectRepository(User)
    private UserRepo : Repository <User>,
    @InjectRepository(Team)
    private TeamRepo : Repository <Team>,
  ){}
  async removeTeamMate( userId : number , teamId : number ) :Promise <any>{
    const result = await this.UserRepo.update(
      {
        id : userId,
        team : {id : teamId}
      },
      {team : null}
  )
    if (result.affected === 0) {
        throw new Error("User not found in this team.");
    }
    return { message: "Member removed successfully" };
  }
  async assignMultipleToTeam(userIds: number[] , teamId :number ){
    return await this.UserRepo
      .createQueryBuilder()
      .update('USER') 
      .set({ teamId: teamId })
      .where("ID IN (:...ids)", { ids: userIds })
      .execute();

  }
  async getTeamMembers( id : number ) :Promise <any[]> {
    return await this.TeamRepo
    .createQueryBuilder('team')
    .leftJoin('team.members' , 'members')
    .leftJoin('members.profile' , 'profile')
    .select('members.id' , 'id')
    .addSelect('team.name' , 'teamName')
    .addSelect('CONCAT(profile.firstName , " " , profile.lastName)' ,'fullName')
    .where('team.id = :id' , {id})
    .getRawMany()
  }
  async projectsInsights( id : number ) : Promise <any> {
    return await this.TeamRepo
    .createQueryBuilder('team')
    .leftJoin('team.projects' , 'projects')
    .leftJoin('team.members' , 'members')
    .select(' COUNT(DISTINCT members.id)' , 'totalMembers')
    .addSelect('COUNT(DISTINCT projects.id)' , 'totalProjects')
    .addSelect('COUNT(DISTINCT CASE WHEN projects.status = "completed" THEN projects.id END)' , 'completedProjects')
    .addSelect('COUNT(DISTINCT CASE WHEN projects.status = "ongoing" THEN projects.id END)' , 'ongoingProjects')
    .addSelect('COUNT(DISTINCT CASE WHEN projects.status = "pending" THEN projects.id END)' , 'pendingProjects')
    .where('team.id = :id ' , {id})
    .groupBy('team.id')
    .getRawOne()
  }

  async deleteTeam(id : number) : Promise <any> {
    const team = await this.TeamRepo.findOne({
      where : {id},
      relations : ['manager']
    })
    if(team && team.manager){
      await this.UserRepo.update(team.manager.id , {role : 'member'})
    }
    return this.TeamRepo.delete(id)
  }

  async getTeamsList() : Promise <any[]> {
    return await this.TeamRepo
    .createQueryBuilder('team')
    .leftJoin('team.manager' , 'manager')
    .leftJoin('manager.profile' , 'profile')
    .select('team.id', 'id')
    .addSelect('team.name' , 'name')
    .addSelect('profile.id' , 'managerId')
    .addSelect('CONCAT( profile.firstName , " " , profile.lastName )' , 'fullName')
    .groupBy('team.id')
    .getRawMany()
  }
  async getTeamMembersTasks(teamId : number) : Promise <any[]> {
    return await this.UserRepo
    .createQueryBuilder('user')
    .leftJoin('user.tasks','task' , 'task.status = :status' , {status : 'completed'})
    .leftJoin('user.profile', 'profile')
    .select('user.id' , 'id')
    .addSelect('CONCAT(profile.firstName ," ", profile.lastName)','fullName')
    .addSelect('COUNT(task.id)' , 'taskCount')
    .where('user.teamId = :teamId',{teamId})
    .groupBy('user.id')
    .addGroupBy('profile.firstName')
    .addGroupBy('profile.lastName')
    .orderBy('taskCount' , 'DESC')
    .limit(10)
    .getRawMany();
  }

  async getTeamProjects() : Promise <any[]>{
    return await this.TeamRepo
    .createQueryBuilder('team')
    .leftJoin('team.projects','projects', 'projects.status = :status', { status: 'completed' })
    .select( 'team.id' , 'id' )
    .addSelect('team.name' , 'name')
    .addSelect('COUNT(projects.id)','projectCount')
    .groupBy('team.id')
    .orderBy('projectCount' , 'DESC')
    .limit(10)
    .getRawMany();
  }







  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
