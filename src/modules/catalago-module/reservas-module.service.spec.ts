import { Test, TestingModule } from '@nestjs/testing';
import { ReservasModuleService } from './reservas-module.service';

describe('ReservasModuleService', () => {
  let service: ReservasModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasModuleService],
    }).compile();

    service = module.get<ReservasModuleService>(ReservasModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
