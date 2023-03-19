import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRepository } from './media.repository';


@Module({
  imports: [TypeOrmModule.forFeature([MediaRepository])],
  controllers: [MediaController],
  providers: [MediaService, MediaRepository]
})
export class MediaModule {}
