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
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('Todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOperation({ summary: 'Create todo' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Todo })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: HttpStatus.OK, type: [Todo] })
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @ApiOperation({ summary: 'Get one todo' })
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update todo' })
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todosService.update(+id, updateTodoDto);
  }

  @ApiOperation({ summary: 'Delete todo' })
  @ApiResponse({ status: HttpStatus.OK })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todosService.remove(+id);
  }
}
