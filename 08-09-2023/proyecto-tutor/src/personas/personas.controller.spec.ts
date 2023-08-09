import { Test, TestingModule } from '@nestjs/testing';
import { PersonasController } from './personas.controller';

describe('PersonasController', () => {
  let controller: PersonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasController],
    }).compile();

    controller = module.get<PersonasController>(PersonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// crea este archivo para comprobar que la app
// funciona, se llaman test unitarios.
// quizás veamos esto pero no es el objetivo
// aunque para nuestra app si haremos :)
// pero estos test, requieren varias clases
// para dominarlo ok? si lo hacemos ahora
// perderemos el foco pero sí que hay que dominarlo 
// ok?