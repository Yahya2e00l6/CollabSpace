import { User } from "src/auth/entities/user.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('PROJECTS')
export class Project {
    @PrimaryGeneratedColumn({name : 'ID'})
    id! : number;

    @Column({name : 'projectName'})
    projectName! : string;

    @Column({
        type : 'text',
        name : 'Description'
    })
    description! : string;

    @Column({ type: 'datetime', nullable: true })
    completionDate!: Date;

    @Column({
        type : 'enum',
        enum : ['pending','completed','ongoing'],
        name : 'status',
        default : 'ongoing'
    })
    status! : string;

    @Column({
        type : 'date',
        name : 'deadLine'
    })
    deadLine! : Date;

    @CreateDateColumn({
        type : 'date',
        name : 'createdAt'
    })
    createdAt! : Date;

    @ManyToOne(()=>User , (user)=>user.createdProjects)
    @JoinColumn({name : 'CreatorID'})
    creator! : User;

    @ManyToOne(()=>Team , (team)=>team.projects)
    @JoinColumn({name : 'teamID'})
    team! : Team;

    @OneToMany(()=>Task , (task)=>task.project)
    tasks! : Task[]

    @ManyToMany(() => User, (user) => user.projects)
    @JoinTable({
        name : 'PROJECT_MEMBERS',
        joinColumn : {
            name : 'projectID',
            referencedColumnName : 'id'
        },
        inverseJoinColumn : {
            name : 'userID',
            referencedColumnName : 'id'
        }
    })
    members! : User[]
}
