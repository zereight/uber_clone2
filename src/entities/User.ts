import bcrypt from "bcrypt";

import {IsEmail} from "class-validator"; // int, float등 type check라기보단
//email형식이 맞는지 검사하는 validation(유효성) check임

import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm" ;

const BCRYPT_ROUNDS = 10; //how much hashing?

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
    
    @Column({type:"text"})
    password:string;
    
    @Column({type:"text"})
    phoneNumber:string;
    
    @Column({type: "boolean", default: false})
    verifiedPhoneNumber:boolean;
    
    @Column({type:"text"})
    profilePhoto:string;
    
    @Column({type:"boolean", default:false})
    isDriving: boolean;
    
    @Column({type:"boolean", default:false})
    isRiding: boolean;
    
    @Column({type:"boolean", default:false})
    isTaken: boolean;
    
    @Column({type:"double precision", default: 0})
    lastLng: number;
    
    @Column({type:"double precision", default: 0})
    lastLat: number;
    
    @Column({type:"double precision", default: 0})
    lastOrientation: number;
    
    @CreateDateColumn()
    createdAt:string;
    
    @UpdateDateColumn()
    updateAt:string;
    
    get fullName() : string{
        return `${this.firstName}${this.lastName}`;
    }
    
    public comparePassword( password: string ) : Promise<boolean> {
        return bcrypt.compare( password, this.password );
    }
    
    @BeforeInsert()
    @BeforeUpdate()
    async savePassword() : Promise<void> {
        if( this.password ){
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }
    
    private hashPassword ( password : string ) : Promise<string> {
        return bcrypt.hash( password, BCRYPT_ROUNDS );
    }
    
};

//double precision 는 postgresql에서 지원하는 type중 하나 float 과 같음.


export default User;