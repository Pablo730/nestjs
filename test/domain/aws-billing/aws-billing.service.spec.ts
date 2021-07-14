import { Test, TestingModule } from '@nestjs/testing';
import { AwsBillingService } from '../../../src/domain/aws-billing/aws-billing.service';

describe('AwsBillingService', () => {
	let service: AwsBillingService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AwsBillingService],
		}).compile();

		service = module.get<AwsBillingService>(AwsBillingService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
