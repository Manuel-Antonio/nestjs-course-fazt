import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersSrv: UsersService) {}

  @Get()
  GetAllUsers() {
    return this.usersSrv.getAllUsers();
  }

  @Post()
  @HttpCode(201)
  CreateUserDto(@Body() body: CreateUserDto) {
    return this.usersSrv.createUserDto(body);
  }

  @Get('notfound')
  @HttpCode(404)
  errorNotFound() {
    return 'Error 404 not found ';
  }

  @Get('interno')
  @HttpCode(500)
  errorInternal() {
    return 'Error interno';
  }
}
