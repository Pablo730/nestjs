import { PartialType } from '@nestjs/swagger';
import { CreateAwsResourceDto } from './create-aws-resource.dto';

export class UpdateAwsResourceDto extends PartialType(CreateAwsResourceDto) {}
