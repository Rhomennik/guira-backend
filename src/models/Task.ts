import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("task")
class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  macaddress: string;

  @Column()
  type: string;

  @Column()
  user_name: string;

  @Column()
  id_user: string;

  @Column()
  id_task: string;

  @Column()
  id_task_validator: boolean;

  @Column()
  chat_id: string;

  @Column()
  message_id: string;

  @Column()
  message: string;

  @Column()
  description: string;

  @Column()
  done: string;

  @UpdateDateColumn()
  deleted: string;

  @CreateDateColumn()
  accessed: Date;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;
}

export default Task;
