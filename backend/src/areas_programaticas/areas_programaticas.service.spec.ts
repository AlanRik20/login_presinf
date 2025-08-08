import { Test, TestingModule } from '@nestjs/testing';
import { AreasProgramaticasService } from './areas_programaticas.service';

describe('AreasProgramaticasService', () => {
  let service: AreasProgramaticasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreasProgramaticasService],
    }).compile();

    service = module.get<AreasProgramaticasService>(AreasProgramaticasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
