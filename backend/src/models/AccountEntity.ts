import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import FeedbackEntity from "./FeedbackEntity";

@Entity()
class AccountEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  created!: Date;

  @Column()
  password!: string;

  @Column({ unique: true })
  email!: string;

  @Column('boolean', {default: true, name: "isActive" })
  isActive: boolean = true;
}

export interface AccountCreationDto {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  telephone: string;
 
}

export interface AccountLoginDto {
  password: string;
  email: string;
}
export default AccountEntity;
