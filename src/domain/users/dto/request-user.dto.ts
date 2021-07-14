import { ApiProperty } from '@nestjs/swagger';

export class RequestUserDto {
	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	readonly userId: string;

	@ApiProperty({
		example: '김창민',
		description: '유저 이름',
		required: true,
	})
	readonly userName: string;

	@ApiProperty({
		example: 'gabia',
		description: '비밀번호',
		required: true,
	})
	readonly userPassword: string;

	@ApiProperty({
		example: 'kcm@gabia.com',
		description: '유저 메일',
		required: true,
	})
	readonly eamil: string;
}
