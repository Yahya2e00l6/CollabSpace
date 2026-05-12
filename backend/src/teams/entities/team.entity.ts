import { join } from "node:path";
import { User } from "src/auth/entities/user.entity";
import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('TEAM')
export class Team {
    @PrimaryGeneratedColumn({name : 'teamID'})
    id! : number;

    @Column({name : 'Name'})
    name! : string;

    @Column({name : 'memberCount'})
    memberCount! : number

    @OneToOne(()=>User , { nullable: true })
    @JoinColumn({name : 'ManagerID' })
    manager!: User | null;

    @OneToMany(()=>User , (user)=>user.team)
    members! : User[];

    @OneToMany(()=>Project , (project)=>project.team)
    projects! : Project[]; 

}
