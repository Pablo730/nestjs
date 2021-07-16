import { Inject, Injectable } from '@nestjs/common';
import { RequestAwsBillingDto } from './dto/request-aws-billing.dto';


@Injectable()
export class AwsBillingService {
	create(requestAwsBillingDto: RequestAwsBillingDto) {
		return 'This action adds a new awsBilling';
	}

	findAll() {
		return `This action returns all awsBilling`;
	}
}
