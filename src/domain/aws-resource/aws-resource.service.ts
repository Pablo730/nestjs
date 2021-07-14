import { Injectable } from '@nestjs/common';
import { CreateAwsResourceDto } from './dto/create-aws-resource.dto';
import { UpdateAwsResourceDto } from './dto/update-aws-resource.dto';

@Injectable()
export class AwsResourceService {
  create(createAwsResourceDto: CreateAwsResourceDto) {
    return 'This action adds a new awsResource';
  }

  findAll() {
    return `This action returns all awsResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} awsResource`;
  }

  update(id: number, updateAwsResourceDto: UpdateAwsResourceDto) {
    return `This action updates a #${id} awsResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} awsResource`;
  }
}
