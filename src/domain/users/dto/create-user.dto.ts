import { PartialType } from "@nestjs/swagger";
import { Users } from "../entities/user.entity";

export class CreateUserDto extends PartialType(Users) { }
