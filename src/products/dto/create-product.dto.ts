import { IsString, IsNumber, IsNotEmpty, IsPositive, Min, MaxLength } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    description: string;
    
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    @Min(0)
    price: number;
    
    @IsNumber()
    @IsPositive()
    @Min(0)
    stock: number;
}
