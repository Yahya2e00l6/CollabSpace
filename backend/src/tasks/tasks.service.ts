import { Inject, Injectable , BadRequestException , NotFoundException } from '@nestjs/common';
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

  async deleteTask (taskId : number) : Promise <any>{
    const result = await this.taskRepo.delete(taskId)
    if(result.affected === 0 ){
      throw new NotFoundException(`Task #${taskId} not found or already deleted!`)
    }
  }
  async updateTaskState (taskId : number , newStatus : string) : Promise <any> {
    const allowedStatuses = ['ongoing','completed' , 'pending']
    if(!allowedStatuses.includes(newStatus.toLocaleLowerCase())){
      throw new BadRequestException(`Invalid status: ${newStatus}`);
    }
    const result = await this.taskRepo.update(taskId,{
      status : newStatus.toLocaleLowerCase()
    })
    if (result.affected === 0) {
          throw new NotFoundException(`Task #${taskId} not found!`);
      }
      return { success: true, message: 'Status updated', newStatus };
  }
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
  async getUserInsights(id: number) {
    const [totalProjects, taskStats] = await Promise.all([
      this.projectMemberRepo.count({ where: { userID: id } }),
      this.taskRepo.createQueryBuilder('task')
        .leftJoin('task.assignee', 'assignee')
        .select('COUNT(task.id)', 'totalTasks')
        .addSelect('COUNT(CASE WHEN task.status = "completed" THEN 1 END)', 'completed')
        .addSelect('COUNT(CASE WHEN task.status = "ongoing" THEN 1 END)', 'ongoing')
        .addSelect('COUNT(CASE WHEN task.status = "pending" THEN 1 END)', 'pending')
        .where('assignee.id = :id', { id })
        .getRawOne()
    ]);
    return {
      totalProjects,
      totalTasks: Number(taskStats.totalTasks || 0),
      completed: Number(taskStats.completed || 0),
      ongoing: Number(taskStats.ongoing || 0),
      pending: Number(taskStats.pending || 0)
    };
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
