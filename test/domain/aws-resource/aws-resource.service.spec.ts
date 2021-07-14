import { Test, TestingModule } from '@nestjs/testing';
import { AwsResourceService } from '../../../src/domain/aws-resource/aws-resource.service';

describe('AwsResourceService', () => {
	let service: AwsResourceService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AwsResourceService],
		}).compile();

		service = module.get<AwsResourceService>(AwsResourceService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
