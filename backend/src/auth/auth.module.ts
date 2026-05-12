import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { guestRequest } from './entities/guest-request.entity';
import { Team } from 'src/teams/entities/team.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([guestRequest]),
    TypeOrmModule.forFeature([Team])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
