import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('AWS_BILLING')
export class AwsBilling {
	@PrimaryColumn()
	billingId: number;

	@Column()
	userId: string;

	@Column()
	useMonth: string;

	@Column()
	useCost: string;
}
