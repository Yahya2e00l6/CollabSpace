import { User } from "src/auth/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project.entity";

@Entity('PROJECT_MEMBERS')
export class projectMember{
    @PrimaryGeneratedColumn({name : 'userID'})
    userID! : number;
    @PrimaryGeneratedColumn({name : 'projectID'})
    projectID! : number;

    @ManyToOne(()=>User)
    @JoinColumn({name : 'userID'})
    user! : User;

    @ManyToOne(()=>Project)
    @JoinColumn({name : 'projectID'})
    project! : Project
}