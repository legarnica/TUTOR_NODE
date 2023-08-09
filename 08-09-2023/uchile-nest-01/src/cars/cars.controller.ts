import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    foo(){
        return 'bar';
    }
}
