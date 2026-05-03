import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mysql",
    host : "localhost",
    port : 3306,
    username : "penguin",
    password : "penguin123",
    database : "collabSpaceDB",
    entities : [],
    synchronize : true,
  }), TasksModule, AuthModule, UsersModule, TeamsModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
