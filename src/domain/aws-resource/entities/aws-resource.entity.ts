import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: 'aws_billing',
	// engine: '',
	// database: 'root',
	schema: 'test',
	// synchronize: true,
	// withoutRowid : false,
	orderBy: {
		id: 'DESC',
		userId: 'ASC',
	}
})
export class AwsResource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: string;

	@Column()
	serviceName: string;

	@Column()
	traffic: string;

	@Column({ type: 'datetime' })
	startDate: Date;

	@Column({ type: 'datetime' })
	endDate: Date;
}
