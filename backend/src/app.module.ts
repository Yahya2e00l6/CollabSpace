import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';

import { User } from './auth/entities/user.entity';
import { guestRequest } from './auth/entities/guest-request.entity';
import { projectMember } from './projects/entities/project-member.entity';
import { Project } from './projects/entities/project.entity';
import { Task } from './tasks/entities/task.entity';
import { Team } from './teams/entities/team.entity';
import { UserData } from './users/entities/user-data.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mysql",
    host : "localhost",
    port : 3306,
    username : "penguin",
    password : "penguin123",
    database : "collabSpaceDB",
    entities : [User , UserData , guestRequest , Project , projectMember , Task , Team],
    synchronize : false,
  }), TasksModule, AuthModule, UsersModule, TeamsModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
