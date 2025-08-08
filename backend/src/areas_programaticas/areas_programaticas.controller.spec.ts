import { Test, TestingModule } from '@nestjs/testing';
import { AreasProgramaticasController } from './areas_programaticas.controller';
import { AreasProgramaticasService } from './areas_programaticas.service';

describe('AreasProgramaticasController', () => {
  let controller: AreasProgramaticasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreasProgramaticasController],
      providers: [AreasProgramaticasService],
    }).compile();

    controller = module.get<AreasProgramaticasController>(AreasProgramaticasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
