import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { retry } from 'rxjs';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('createtask/:projectId')
  async createTask(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Body() body: any 
  ) {
    return await this.tasksService.createTask(projectId, body);
  }
  
  @Delete('deleteTask/:taskId')
  async deleteTask(@Param('taskId' , ParseIntPipe) taskId : number){
    return this.tasksService.deleteTask(taskId)
  }
  @Patch('updateTaskState/:taskId/:newStatus')
  async updateTaskState(
    @Param('taskId' , ParseIntPipe) taskId : number,
    @Param('newStatus') newStatus : string ) {
      return this.tasksService.updateTaskState(taskId , newStatus)
    }
  @Get('taskDeadlineInfo/:id')
  taskDeadlineInfo(@Param('id',ParseIntPipe) id : number ){
    return this .tasksService.getTaskDeadlineInfo(id);
  }
  @Get('tasksInsights/:id')
  Insights(@Param('id',ParseIntPipe) id :number){
    return this.tasksService.getUserInsights(id);
  }
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
