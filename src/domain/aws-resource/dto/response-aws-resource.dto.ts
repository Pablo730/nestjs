import { ApiProperty } from "@nestjs/swagger";

export class ResponseAwsResourceDto {
	@ApiProperty({
		example: 1,
		description: 'AWS 사용량 PK',
		required: true,
	})
	public resourceId: number;

	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	public userId: string;

	@ApiProperty({
		example: 'EC2',
		description: 'AWS 사용 서비스',
		required: true,
	})
	public serviceName: string;

	@ApiProperty({
		example: '7월',
		description: '사용한 달',
		required: true,
	})
	public month: string;
}
