import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Ghosting {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: string;

	@Column()
	serviceName: string;

	@Column({ default: true })
	status: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
