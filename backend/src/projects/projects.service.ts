import { Injectable ,NotFoundException  } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { groupBy } from 'rxjs';
import { Team } from 'src/teams/entities/team.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo : Repository <Project>,
    @InjectRepository(User)
    private userRepo : Repository <User>,
  ){}


async assignMultipleToProject(userIds: number[], projectId: number) {
    if (!userIds || userIds.length === 0) {
        return { message: 'No users selected' };
    }
    const values = userIds.map(id => ({
        projectID: projectId,
        userID: id      
    }));
    await this.projectRepo.createQueryBuilder()
        .insert()
        .into('PROJECT_MEMBERS')
        .values(values)
        .orIgnore()
        .execute();

    return { success: true, message: 'Members assigned successfully' };
}
async getAvailableMembers(projectId: number, teamId: number): Promise<any[]> {
    return await this.userRepo.createQueryBuilder('user')
        .innerJoin('user.team', 'team') 
        .leftJoin('user.profile', 'profile')
        .select('user.id', 'userId')
        .addSelect("CONCAT(profile.firstName, ' ', profile.lastName)", 'fullName')
        .addSelect('profile.email', 'email')
        .where('team.id = :teamId', { teamId })
        .andWhere('user.id NOT IN (SELECT userID FROM PROJECT_MEMBERS WHERE projectID = :projectId)', { projectId })
        .getRawMany();
}
  async taskInfo( id : number) : Promise <any[]> {
    return await this.projectRepo
    .createQueryBuilder('project')
    .leftJoin('project.tasks' , 'tasks')
    .leftJoin('tasks.assignee' , 'assignee')
    .leftJoin('assignee.profile' , 'profile')
    .select('tasks.id' , 'taskId')
    .addSelect('tasks.taskName' , 'taskName')
    .addSelect('tasks.createdAt' , 'createdAt')
    .addSelect('project.projectName' , 'project')
    .addSelect('tasks.status' , 'taskStatus')
    .addSelect('assignee.id' , 'OwnerId')
    .addSelect('CONCAT(profile.firstName , " " , profile.lastName)' , 'OwnerfullName')
    .addSelect('tasks.description' , 'taskDescription')
    .addSelect('tasks.deadLine' , 'taskDeadLine')
    .where('project.id = :id',{id})
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
  async tasksInsights( id : number ) : Promise <any>{
    return await this.projectRepo
    .createQueryBuilder('project')
    .leftJoin('project.tasks' , 'tasks')
    .leftJoin('project.members' , 'members')
    .select('COUNT( DISTINCT members.id)' ,'totalMembers')
    .addSelect('COUNT( DISTINCT tasks.id)','totalTasks')
    .addSelect('COUNT(DISTINCT CASE WHEN tasks.status = "completed" THEN tasks.id END)' ,'completedTasks')
    .addSelect('COUNT(DISTINCT CASE WHEN tasks.status = "ongoing" THEN tasks.id END)' ,'ongoingTasks')
    .addSelect('COUNT(DISTINCT CASE WHEN tasks.status = "pending" THEN tasks.id  END)' ,'pendingTasks')
    .groupBy('project.id')
    .where('project.id = :id' , {id})
    .getRawOne()
  }
  async deleteProject (id : number ) : Promise <any>{
    const project = await this.projectRepo.findOne({where : {id}})
    if (!project) {
          throw new NotFoundException(`Project #${id} not found`);
      }
      await this.projectRepo.remove(project);
      return { message: `Project ${id} deleted successfully` };
  }
  async getProjects() : Promise  <any[]>{
    return await this.projectRepo
    .createQueryBuilder('project')
    .leftJoin('project.team' , 'team')
    .select('project.id' , 'id')
    .addSelect('project.projectName','projectName')
    .addSelect('team.name' , 'teamName')
    .getRawMany()
  }
  async getcompletedProjectsInfo() : Promise <any[]>{
    return await this.projectRepo
    .createQueryBuilder('project')
    .leftJoin('project.team' , 'team')
    .select('project.id' , 'id')
    .addSelect('project.projectName' , 'projectName')
    .addSelect('team.name' ,'teamName')
    .addSelect('TIMESTAMPDIFF(HOUR, project.completionDate, NOW())' , 'diffInHours' )
    .where('project.status = :status',{status : 'completed'})
    .groupBy('project.id')
    .orderBy('project.completionDate','DESC')
    .getRawMany();
  }
  async getprojectDeadlineInfo(teamid : number) : Promise <any[]> {
    return await this.projectRepo
    .createQueryBuilder('project')
    .leftJoin('project.tasks','tasks')
    .leftJoin('project.team','team')
    .select('project.id','projectid')
    .addSelect('tasks.id','taskid')
    .addSelect('project.projectName' , 'projectName')
    .addSelect('project.deadLine' , 'deadLine')
    .addSelect('COUNT(tasks.id)','totalTasks')
    .addSelect('COUNT(CASE WHEN tasks.status = "completed" THEN 1 END)' ,'completedTasks')
    .addSelect('DATEDIFF(project.deadLine , CURDATE())', 'remaining')
    .groupBy('project.id')
    .where('team.id = :teamid' , {teamid})
    .orderBy('remaining','ASC')
    .getRawMany();
  }
  async getAdminInsights(){
    const totalEmployees = await this.userRepo.count()
    const totalProjects = await this.projectRepo.count()
    const completed = await this.projectRepo.count({where : {status : 'completed'}})
    const ongoing = await this .projectRepo.count({where : {status : 'ongoing'}})
    const pending = await this.projectRepo.count({where : {status : 'pending'}})
    return{
      totalEmployees,
      totalProjects,
      completed,
      ongoing,
      pending,
    }
  }













  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
