import { Injectable } from '@nestjs/common';
import { RequestAwsResourceDto } from './dto/request-aws-resource.dto';

@Injectable()
export class AwsResourceService {
	create(requestAwsResourceDto: RequestAwsResourceDto) {
		return 'This action adds a new awsResource';
	}

	findAll() {
		return `This action returns all awsResource`;
	}

	findOne(id: number) {
		return `This action returns a #${id} awsResource`;
	}

}
