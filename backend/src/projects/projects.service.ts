import { Injectable } from '@nestjs/common';
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
