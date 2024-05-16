import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentosModuleService } from './agendamentos-module.service';

describe('AgendamentosModuleService', () => {
  let service: AgendamentosModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamentosModuleService],
    }).compile();

    service = module.get<AgendamentosModuleService>(AgendamentosModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
