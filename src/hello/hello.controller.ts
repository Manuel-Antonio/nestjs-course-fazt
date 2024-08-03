import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('hello')
@ApiTags('hello')
export class HelloController {
    @Get("ticket/:num")
    getNumber(@Param("num", ParseIntPipe) num : number){
        console.log(typeof num)
        return `Ticket de numero ${num + 11} `
    }

    @Get("active/:status")
    isUserActive(@Param("status", ParseBoolPipe) status : boolean){
        console.log(typeof status)
        return `Status the User: ${status}`
    }

    @Get("/check")
    @UseGuards(AuthGuard)
    findHello(@Query(ValidateUserPipe) query : {name: string, age: number, isSoltero:boolean}) {
        console.log("Query: ",query)
        console.log(typeof query.name, query.name)
        console.log(typeof query.age, query.age)
        console.log(typeof query.isSoltero, query.isSoltero)
        return "Listo verifica pipe"
    }

}
