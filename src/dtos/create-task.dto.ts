import {
    IsString,
    MinLength
} from "class-validator"

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    proyect : string
    @IsString()
    @MinLength(1)
    costo: string

}