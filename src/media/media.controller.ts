import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { ResponseDto } from './dto/response.dto';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateMediaDto } from './dto/update-media.dto';
import { identity } from 'rxjs';
// import { UpdateMediaDto } from './dto/update-media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({ summary: 'Create a media' })
  @Post()
  create(@Body() createMediaDto: CreateMediaDto) :Promise<ResponseDto> {
    return this.mediaService.create(createMediaDto);
  }

  @ApiOperation({ summary: 'Get a paginated list of media' })
  @Get()
  getMedias(@Query('page') page=1, @Query('limit') limit=10) {
    return this.mediaService.getAllMediasWithPagination(page,limit);
  }


  
  @ApiOperation({ summary: 'Get all media' })
  @Get()
  getMedia() {
    return this.mediaService.findAllMedias();
  }

  @ApiOperation({ summary: 'Find a media by id' })
  @Get(':id')
  findMedia(@Param('id') id: string) {
    return this.mediaService.findMediaById(+id);
  }

  @ApiOperation({ summary: 'Update a media' })
  @Patch(':id')
  updateMedia(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id,updateMediaDto);
  }

  @Get('search')
  async searchMedia(@Query('query') query: string): Promise<any> {
    return await this.mediaService.searchMedia(query);
  }

  
  @ApiOperation({ summary: 'delete a media' })
  @Delete(':id')
  deleteMedia(@Param('id') id: string) {
    return this.mediaService.removeMedia(id);
  }



}
