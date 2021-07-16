import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('AWS_RESOURCE')
export class AwsResource {
	@PrimaryColumn()
	resourceId: number;

	@Column()
	userId: string;

	@Column()
	serviceName: string;

	@Column()
	month: string;
}
