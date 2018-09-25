import {IsEmail} from "class-validator"; // int, float등 type check라기보단
//email형식이 맞는지 검사하는 validation(유효성) check임

import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm" ;

@Entity() //decorator
class User extends BaseEntity{
    @PrimaryGeneratedColumn() 
    id:number;
    
    @Column({type:"text", unique:true})
    @IsEmail()
    email: string;
    
    @Column({type:"text"})
    firstName: string;
    
    @Column({type:"text"})
    lastName: string;
    
    @Column({type:"int"})
    age: number;
    
    @Colunm({type:text})
    password:string;
    
    @Column({type:"text"})
    phoneNumber:string;
    
    @Column({type: "boolean", default: false})
    verifiedPhoneNumber:boolean;
    
    @Column({type:"text"})
    profilePhoto:string;
    
    @CreateDateColumn()
    createdAt:string;
    
    @UpdateDateColumn()
    updateAt:string;
};

export default User;