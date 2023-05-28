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
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Album } from './entities/album.entity';

@ApiTags('Albums')
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @ApiOperation({ summary: 'Create album' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Album })
  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumsService.create(createAlbumDto);
  }

  @ApiOperation({ summary: 'Get all albums' })
  @ApiResponse({ status: HttpStatus.OK, type: [Album] })
  @Get()
  findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }

  @ApiOperation({ summary: 'Get one album' })
  @ApiResponse({ status: HttpStatus.OK, type: Album })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Album> {
    return this.albumsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update album' })
  @ApiResponse({ status: HttpStatus.OK, type: Album })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ): Promise<Album> {
    return this.albumsService.update(+id, updateAlbumDto);
  }

  @ApiOperation({ summary: 'Delete album' })
  @ApiResponse({ status: HttpStatus.OK })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.albumsService.remove(+id);
  }
}
