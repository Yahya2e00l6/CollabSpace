import { Entity , Column , PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { User } from "src/auth/entities/user.entity";
@Entity('USERDATA')
export class UserData {
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

    @OneToOne(()=>User)
    @JoinColumn({name : 'userID'})
    user! : User;

}
