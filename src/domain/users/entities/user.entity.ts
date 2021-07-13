import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("users", { schema: "test" })
export class Users {
	@ApiProperty({
		example: 1,
		description: '사용자 id',
		required: true,
	})
	@PrimaryGeneratedColumn({ type: 'int', name: 'id' })
	rowNum: number;

	@ApiProperty({
		example: 'kcm@gabia.com',
		description: '이메일',
		required: true,
	})
	@Column("varchar", { name: "email", length: 100 })
	email: string;

	@ApiProperty({
		example: 'Pablo',
		description: '닉네임',
		required: true,
	})
	@Column("varchar", { name: "nick_name", length: 100 })
	nickName: string;
}
