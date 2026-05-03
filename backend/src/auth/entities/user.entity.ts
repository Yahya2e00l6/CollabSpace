import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GuestRequest } from "./guest-request.entity";
import { Team } from "src/teams/entities/team.entity";
import { UserData } from "src/users/entities/user-data.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Project } from "src/projects/entities/project.entity";

@Entity('USER')
export class User {
    @PrimaryGeneratedColumn({name : 'ID'})
    id!: number;

    @Column({name : 'Identifier' , unique : true})
    identifier! : string;

    @Column({name : 'Password'})
    password! : string;

    @Column({
        type : 'enum',
        enum: ['admin', 'member', 'manager'],
        name : 'Role'
    })
    role! : string;

    @OneToOne(()=>GuestRequest)
    @JoinColumn({name : 'RequestID'})
    request! : GuestRequest;

    @ManyToOne(()=>Team , ((team)=>team.members) , {nullable : true})
    @JoinColumn({name : 'teamID'})
    team! : Team | null;

    @OneToOne(()=>UserData , (userData)=>userData.user)
    profile! : UserData

    @OneToMany(()=>Task , (task)=>task.assignee)
    tasks! : Task[]

    @OneToMany(()=>Project , (project)=>project.creator)
    createdProjects! : Project[];

    @ManyToMany(()=>Project,(project)=>project.members)
    projects! : Project[];

}