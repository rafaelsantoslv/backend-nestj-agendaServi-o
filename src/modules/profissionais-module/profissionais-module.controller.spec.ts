import { Test, TestingModule } from '@nestjs/testing';
import { ProfissionaisModuleController } from './profissionais-module.controller';

describe('ProfissionaisModuleController', () => {
  let controller: ProfissionaisModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfissionaisModuleController],
    }).compile();

    controller = module.get<ProfissionaisModuleController>(ProfissionaisModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
