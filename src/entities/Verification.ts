import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Verification extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "text"})
    target: string;
    
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