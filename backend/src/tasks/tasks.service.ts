import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { projectMember } from 'src/projects/entities/project-member.entity';
import { groupBy } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private  taskRepo : Repository <Task>,
    @InjectRepository(projectMember)
    private projectMemberRepo : Repository <projectMember>
  ){}

  async getTaskDeadlineInfo (id : number) : Promise <any[]>{
    return await this.taskRepo
    .createQueryBuilder('tasks')
    .leftJoin('tasks.project' , 'project')
    .leftJoin('tasks.assignee' , 'assignee')
    .select('tasks.id' , 'id')
    .addSelect('tasks.taskName' , 'taskName')
    .addSelect('project.projectName' , 'projectName')
    .addSelect('tasks.deadLine' , 'deadLine')
    .addSelect('DATEDIFF(project.deadLine , CURDATE())', 'remaining')
    .where('assignee.id = :id ' ,{id})
    .andWhere('tasks.status != :status' , {status : 'completed'})
    .groupBy('tasks.id')
    .orderBy('remaining','ASC')
    .getRawMany()
  }
  async getUserInsights (id:number){
    const totalProjects = await this.projectMemberRepo.count({where : {userID : id}})
    const totalTasks = await this.taskRepo.count({where : {assignee : {id : id}}})
    const completed = await this.taskRepo.count({where : {
      assignee : { id : id },
      status : 'completed'
    }})
    const ongoing = await this.taskRepo.count({where : {
      assignee : { id : id },
      status : 'ongoing'
    }})
    const pending = await this.taskRepo.count({where : {
      assignee : { id : id },
      status : 'pending'
    }})
    return {
      totalProjects,
      totalTasks,
      completed,
      ongoing,
      pending
    }
  }
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
