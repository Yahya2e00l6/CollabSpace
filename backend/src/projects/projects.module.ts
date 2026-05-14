import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Project } from './entities/project.entity';
import { projectMember } from './entities/project-member.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Team } from 'src/teams/entities/team.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([projectMember]),
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forFeature([Team]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports : [ProjectsService]
})
export class ProjectsModule {}
