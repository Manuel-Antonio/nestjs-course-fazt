import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

   

    constructor(private prismaSrv : PrismaService){}
    getAllUsers() {
        return this.prismaSrv.user.findMany();
    }

    createUserDto(user : CreateUserDto) {
        return this.prismaSrv.user.create({data: user});
    }
}
