import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentosModuleController } from './agendamentos-module.controller';

describe('AgendamentosModuleController', () => {
  let controller: AgendamentosModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendamentosModuleController],
    }).compile();

    controller = module.get<AgendamentosModuleController>(AgendamentosModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
