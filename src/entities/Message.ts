import {
    BaseEntity,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne
}
from "typeorm";

import Chat from "./Chat";

@Entity()
class Message extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne( type=> Chat, chat => chat.messages )
    chat: Chat;
    
    @CreateDateColumn()
    createAt: string;
    
    @UpdateDateColumn()
    updateAt:string;
    
};

export default Message;