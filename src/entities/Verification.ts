import { 
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn 
    
} from "typeorm";

import {verificationTarget} from "../types/types";

const EMAIL = "EMAIL";
const PHONE = "PHONE";

import User from "./User";

@Entity()
class Verification extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "text", enum: [PHONE, EMAIL]})
    target: verificationTarget;
    
    @Column({type: "text"})
    payload: string;
    
    @Column({type: "text"})
    key: string;
    
    @Column({type: "boolean"})
    used: boolean;
    
    @ManyToOne( type => User , user => user.verifications )
    user: User;
    
    @CreateDateColumn({type: "text"})
    createdAt: string;
    
    @UpdateDateColumn({type: "text"})
    updatedAt: string;
    
    @BeforeInsert() //타겟 타입에 따라 어떤 키를 생성할지 정함. createKey는 그냥 함수 선언한거라 Entity에 포함안됨.
    createKey() : void {
        if (this.target === PHONE){
            this.key = Math.floor(Math.random() * 100000).toString();
        }
        else if (this.target === EMAIL){
            this.key = Math.random().toString(36).substr(2);
        }
    }
}

export default Verification;