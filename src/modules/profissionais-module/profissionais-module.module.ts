import { Module } from '@nestjs/common';
import { ProfissionaisModuleController } from './profissionais-module.controller';

@Module({
  controllers: [ProfissionaisModuleController]
})
export class ProfissionaisModuleModule {}
