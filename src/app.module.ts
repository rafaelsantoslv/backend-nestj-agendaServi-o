import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasModuleService } from './reservas-module/reservas-module.service';
import { ReservasModuleController } from './reservas-module/reservas-module.controller';
import { ReservasModuleModule } from './reservas-module/reservas-module.module';
import { AgendamentosModuleModule } from './agendamentos-module/agendamentos-module.module';
import { ProfissionaisModuleService } from './profissionais-module/profissionais-module.service';
import { ProfissionaisModuleModule } from './profissionais-module/profissionais-module.module';

@Module({
  imports: [ReservasModuleModule, AgendamentosModuleModule, ProfissionaisModuleModule],
  controllers: [AppController, ReservasModuleController],
  providers: [AppService, ReservasModuleService, ProfissionaisModuleService],
})
export class AppModule {}
