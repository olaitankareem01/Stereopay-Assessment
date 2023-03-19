import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
import { CreateMediaDto } from './dto/create-media.dto';
import { ResponseDto } from './dto/response.dto';
import { Media } from './entities/media.entity';
import { MediaRepository } from './media.repository';
import { getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { UpdateMediaDto } from './dto/update-media.dto';


// import { UpdateMediaDto } from './dto/update-media.dto';


@Injectable()
export class MediaService {

  constructor(@InjectRepository(MediaRepository) private mediaRepository: MediaRepository) {}



  async create(createMediaDto:CreateMediaDto) {
    
    const media = plainToClass(Media, createMediaDto);
    media.createdAt = new Date();
    media.updatedAt = new Date();
    media.deletedAt = new Date();
    const createdMedia = await this.mediaRepository.save(media);
    return new ResponseDto('success', 'Media created successfully', createdMedia);
  }

  async findAllMedias() {
    const media = await this.mediaRepository.getMedias();
    return new ResponseDto('success', 'Media retrieved successfully', media);
  }

  async findMediaById(id: any): Promise<ResponseDto> {
    const media = await this.mediaRepository.getMediaById(id);
    if (media) {
      return new ResponseDto('success', 'Media retrieved successfully', media);
    } else {
      return new ResponseDto('error', 'Media not found');
    }
  }

  
  async getAllMediasWithPagination(page:number,perPage:number) {
    const media = await this.mediaRepository.getMediasByPagination(page,perPage);
    return new ResponseDto('success', 'Media retrieved successfully', media);
  }


  async update(id: any, updateMediaDto: UpdateMediaDto) {
    const oldMedia = await this.mediaRepository.getMediaById(id);
    if (!oldMedia) {
      return new ResponseDto('error', 'Media not found');
    }
    oldMedia.name = updateMediaDto.name;
    oldMedia.status = updateMediaDto.status;
    oldMedia.type = updateMediaDto.type;
    oldMedia.url = updateMediaDto.url;
    oldMedia.description = updateMediaDto.description;
    oldMedia.updatedAt = new Date();

    
    // const updatedMedia = Object.assign(oldMedia, updateMediaDto);
    // console.log(updatedMedia);
    // updatedMedia.updatedAt = new Date();
    const savedMedia = await this.mediaRepository.updateMedia(oldMedia);
    return new ResponseDto('success', 'Media updated successfully', savedMedia);
  }

  async removeMedia(id: any) {
    const deleteResult = await this.mediaRepository.deleteMedia(id);
    if (deleteResult.affected === 0) {
      return new ResponseDto('error', 'Media not found');
    }
    return new ResponseDto('success', 'Media deleted successfully');
  }


  async searchMedia(query: string) {
    const media = await this.mediaRepository.search(query);
    if (media) {
      return new ResponseDto('success', 'Media retrieved successfully', media);
    } else {
      return new ResponseDto('error', 'Media not found');
    }
  }
}
