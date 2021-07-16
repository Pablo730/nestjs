import { User } from "src/domain/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("GHOSTING")
export class Ghosting {
	@PrimaryGeneratedColumn()
	private id: number;

	@Column()
	private userId: string;

	@Column()
	private serviceName: string;

	@Column({ default: true })
	private status: string;

	@CreateDateColumn()
	private createdAt: Date;

	@UpdateDateColumn()
	private updatedAt: Date;

	@ManyToOne(type => User, user => user.ghostingList)
	user: User
}
