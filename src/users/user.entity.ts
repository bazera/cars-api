import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  afterInsert() {
    console.log('inserted user with id, ', this.id);
  }

  @AfterUpdate()
  afterUpdate() {
    console.log('updates user with id, ', this.id);
  }

  @AfterRemove()
  afterRemove() {
    console.log('removed user with id, ', this.id);
  }
}
