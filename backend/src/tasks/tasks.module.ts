import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';
import { projectMember } from 'src/projects/entities/project-member.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forFeature([projectMember])
  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService]
})
export class TasksModule {}
