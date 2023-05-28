import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Photo } from './entities/photo.entity';

@ApiTags('Photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @ApiOperation({ summary: 'Create photo' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Photo })
  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return this.photosService.create(createPhotoDto);
  }

  @ApiOperation({ summary: 'Get all photos' })
  @ApiResponse({ status: HttpStatus.OK, type: [Photo] })
  @Get()
  findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @ApiOperation({ summary: 'Get one photo' })
  @ApiResponse({ status: HttpStatus.OK, type: Photo })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Photo> {
    return this.photosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update photo' })
  @ApiResponse({ status: HttpStatus.OK, type: Photo })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ): Promise<Photo> {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @ApiOperation({ summary: 'Delete photo' })
  @ApiResponse({ status: HttpStatus.OK })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.photosService.remove(+id);
  }
}
