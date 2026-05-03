import { User } from "src/auth/entities/user.entity";
import { Project } from "src/projects/entities/project.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('TASK')
export class Task {
    @PrimaryGeneratedColumn({name : 'TaskID'})
    id! : number;

    @Column({name : 'taskName'})
    taskName! : string;

    @Column({
        type: 'text',
        name : 'Description'
    })
    description! : string;

    @Column({
        type : 'enum',
        enum : ['pending','completed','ongoing'],
        name : 'Status',
        default : 'pending'
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

    @ManyToOne(()=>User , (user)=>user.tasks)
    @JoinColumn({name : 'assigneeID'})
    assignee! : User;

    @ManyToOne(()=>Project , (project) => project.tasks)
    @JoinColumn({name : 'ProjectID'})
    project! : Project;


}
