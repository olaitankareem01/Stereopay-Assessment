import { Repository } from 'typeorm';
import { Media } from './entities/media.entity'
import { InjectEntityManager} from '@nestjs/typeorm';

import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';


@Injectable()
export class MediaRepository extends Repository<Media> {
    constructor(private readonly entityManager: EntityManager) {
        super(Media,entityManager);
    }
  
    async getMedias(): Promise<Media[]> {
      return await this.entityManager.find(Media);
    }
  
    async getMediaById(id: any): Promise<Media> {
      let result = await this.entityManager.findOneBy(Media,id);
      return result;
    }
    
    async getMediasByPagination(page: number, perPage: number): Promise<Media[]> {
        const [media, count] = await this.entityManager.findAndCount(Media, {
          skip: (page - 1) * perPage,
          take: perPage,
        });
        return media;
      }

    async createMedia(media: Media): Promise<Media> {
      return await this.entityManager.save(Media, media);
    }
  
    async updateMedia(media: Media): Promise<any> {
      const updatedEntity = await this.entityManager.save(media);
      return updatedEntity;
    }
  
    async deleteMedia(id: string): Promise<any> {
      return await this.entityManager.delete(Media, id);
     
    }

    async search(query:string): Promise<any>{
        const queryBuilder = this.entityManager.createQueryBuilder(Media,'m');
        queryBuilder
        .where('m.name LIKE :name', { title: `%${query}%` })
        .orWhere('m.description LIKE :description', { description: `%${query}%` })
        const results = await queryBuilder.getMany();
        return results;
    }

  }