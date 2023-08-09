import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';

@Module({
  controllers: [PersonasController]
})
export class PersonasModule {}
