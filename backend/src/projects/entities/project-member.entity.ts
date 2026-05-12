import { User } from "src/auth/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project.entity";

@Entity('PROJECT_MEMBERS')
export class projectMember{
    @PrimaryColumn({name : 'userID'})
    userID! : number;
    @PrimaryColumn({name : 'projectID'})
    projectID! : number;

    @ManyToOne(()=>User)
    @JoinColumn({name : 'userID'})
    user! : User;

    @ManyToOne(()=>Project)
    @JoinColumn({name : 'projectID'})
    project! : Project
}