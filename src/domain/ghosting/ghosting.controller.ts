import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RequestGhostingDto } from './dto/request-ghosting.dto';
import { GhostingService } from './ghosting.service';

@ApiTags('Ghosing API')
@Controller('ghosting')
export class GhostingController {
	constructor(private readonly ghostingService: GhostingService) { }

	@ApiOperation({ summary: '유저 Ghosting 등록' })
	@Post()
	create(@Body() requestGhostingDto: RequestGhostingDto) {
		return this.ghostingService.create(requestGhostingDto);
	}

	@ApiOperation({ summary: '유저가 사용 중인 Ghosting' })
	@Get()
	findAll() {
		return this.ghostingService.findAll();
	}

	@ApiOperation({ summary: 'Ghosting 업데이트' })
	@Patch(':id')
	update(@Param('id') id: string, @Body() requestGhostingDto: RequestGhostingDto) {
		return this.ghostingService.update(+id, requestGhostingDto);
	}

	@ApiOperation({ summary: 'id로 Ghosting 중지' })
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.ghostingService.remove(+id);
	}
}
