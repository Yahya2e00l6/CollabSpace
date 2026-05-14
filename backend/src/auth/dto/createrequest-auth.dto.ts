import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRequestDto{
    firstName!: string;
    lastName!: string;
    cin!: string;
    gender!: string;
    email!: string;
    phoneNumber!: string;
    birthDate!: Date;
    status!: string;
    @IsString()
    @IsNotEmpty()
    identifier!: string;
    @IsString()
    @IsNotEmpty()
    password!: string;
}