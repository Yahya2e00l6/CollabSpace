import { Column, Entity, PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn} from "typeorm";

@Entity('GUEST_REQUEST')
export class guestRequest{
    @PrimaryGeneratedColumn({name : 'ID'})
    id! : number;

    @Column({name : 'firstName' })
    firstName! : string;

    @Column({name : 'lastName'})
    lastName! : string;

    @Column({name : 'CIN' ,unique : true})
    cin! : string;

    @Column({
        type : "enum",
        enum : [ 'f' , 'm' ],
        name : 'Gender'
    })
    gender! : string;

    @Column({name : 'Email' , unique : true})
    email! : string;

    @Column({name : 'phoneNumber' , unique : true})
    phoneNumber! : string;

    @Column({
        type : 'date',
        name : 'birthDate'
    })
    birthDate! : Date;

    @Column({name : 'Picture' ,nullable : true})
    picture! : string;

    @Column({
        type : 'enum',
        enum : ['pending','accepted','rejected'],
        name : 'Status', 
        nullable : true,
        default : 'pending'
    })
    status! : string;

    @CreateDateColumn({ 
        name: 'createdAt', 
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP(6)' 
    })
    createdAt!: Date;

    @UpdateDateColumn({ 
        name: 'updatedAt', 
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP(6)', 
        onUpdate: 'CURRENT_TIMESTAMP(6)' 
    })
    updatedAt!: Date;


}
