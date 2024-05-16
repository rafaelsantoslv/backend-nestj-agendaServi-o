import { Module } from '@nestjs/common';
import { AgendamentosModuleController } from './agendamentos-module.controller';
import { AgendamentosModuleService } from './agendamentos-module.service';

@Module({
  controllers: [AgendamentosModuleController],
  providers: [AgendamentosModuleService]
})
export class AgendamentosModuleModule {}
