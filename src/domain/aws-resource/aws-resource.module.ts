import { Module } from '@nestjs/common';
import { AwsResourceService } from './aws-resource.service';
import { AwsResourceController } from './aws-resource.controller';

@Module({
  controllers: [AwsResourceController],
  providers: [AwsResourceService],
})
export class AwsResourceModule {}
