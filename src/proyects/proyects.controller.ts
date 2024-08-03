import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('proyects')
@ApiTags("proyects")
export class ProyectsController {

    @Get("/")
    index(){
        return "Homa proyect"
    }
}
