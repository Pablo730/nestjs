import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
export class AwsBilling {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: string;

	@Column()
	month: string;

	@Column()
	cost: string;
}
