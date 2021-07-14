import { Test, TestingModule } from '@nestjs/testing';
import { GhostingService } from '../../../src/domain/ghosting/ghosting.service';

describe('GhostingService', () => {
	let service: GhostingService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GhostingService],
		}).compile();

		service = module.get<GhostingService>(GhostingService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
