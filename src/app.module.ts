 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { dataSourceOptions } from 'database/data-source';
import { MediaModule } from './media/media.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    MediaModule
  ],

  controllers: [AppController],

  providers: [AppService],

 
})
export class AppModule {}