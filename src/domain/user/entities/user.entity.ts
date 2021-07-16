import { PrimaryGeneratedColumn, Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Ghosting } from 'src/domain/ghosting/entities/ghosting.entity';
import { RequestUserDto } from '../dto/request-user.dto';
import { ResponseUserDto } from '../dto/response-user.dto';

@Entity('USER')
export class User {
	@PrimaryGeneratedColumn()
	private id: number;

	@Column()
	private userId: string;

	@Column()
	private userName: string;

	@Column()
	private userPassword: string;

	@Column()
	private email: string;

	@Column({ default: true })
	private isActive: boolean;

	@CreateDateColumn({ type: 'datetime' })
	private createdAt: Date;

	@UpdateDateColumn({ type: 'datetime' })
	private updatedAt: Date;

	@OneToMany(type => Ghosting, ghosting => ghosting.user)
	ghostingList: Ghosting[]

	public requestSave(requestUserDto: RequestUserDto): User {
		this.userId = requestUserDto.userId;
		this.userName = requestUserDto.userName;
		this.userPassword = requestUserDto.userPassword;
		this.email = requestUserDto.eamil;
		return this;
	}

	public responseSave(responseUserDto: ResponseUserDto): ResponseUserDto {
		responseUserDto.userId = this.userId;
		responseUserDto.userName = this.userName;
		responseUserDto.eamil = this.email;
		responseUserDto.createdAt = this.createdAt;
		responseUserDto.updatedAt = this.updatedAt;
		return responseUserDto;
	}
}
