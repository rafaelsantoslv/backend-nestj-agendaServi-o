import { Test, TestingModule } from '@nestjs/testing';
import { ReservasModuleController } from './reservas-module.controller';

describe('ReservasModuleController', () => {
  let controller: ReservasModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasModuleController],
    }).compile();

    controller = module.get<ReservasModuleController>(ReservasModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
