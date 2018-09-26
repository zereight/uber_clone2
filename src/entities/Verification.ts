import { BaseEntity, Column,  Entity, PrimaryGeneratedColumn } from "typeorm";

import {verificationTarget} from "../types/types";

@Entity()
class Verification extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "text", enum: ["PHONE", "EMAIL"]})
    target: verificationTarget;
    
    @Column({type: "text"})
    payload: string;
    
    @Column({type: "text"})
    key: string;
    
    @Column({type: "boolean"})
    used: boolean;
    
    @Column({type: "text"})
    createdAt: string;
    
    @Column({type: "text"})
    updatedAt: string;
}

export default Verification;