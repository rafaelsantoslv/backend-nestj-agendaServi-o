import { Test, TestingModule } from '@nestjs/testing';
import { ProfissionaisModuleService } from './profissionais-module.service';

describe('ProfissionaisModuleService', () => {
  let service: ProfissionaisModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfissionaisModuleService],
    }).compile();

    service = module.get<ProfissionaisModuleService>(ProfissionaisModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
