import { Module } from '@nestjs/common';
import { MariadbDatabaseModule } from 'src/common/database/mariadb/mariadb.database.module';

import { PhotoController } from './photo.controller';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';

@Module({
	imports: [MariadbDatabaseModule],
	controllers: [PhotoController],
	providers: [
		...photoProviders,
		PhotoService,
	],
})
export class PhotoModule { }