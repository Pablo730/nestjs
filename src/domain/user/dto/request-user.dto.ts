import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RequestUserDto {
	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	@IsNotEmpty()
	public readonly userId: string;

	@ApiProperty({
		example: '김창민',
		description: '유저 이름',
		required: true,
	})
	@IsString()
	@IsNotEmpty()
	public readonly userName: string;

	@ApiProperty({
		example: 'gabia',
		description: '비밀번호',
		required: true,
	})
	@IsString()
	@IsNotEmpty()
	public readonly userPassword: string;

	@ApiProperty({
		example: 'kcm@gabia.com',
		description: '유저 메일',
		required: true,
	})
	@IsString()
	@IsEmail()
	public readonly eamil: string;
}
