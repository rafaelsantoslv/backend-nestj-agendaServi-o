import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasModuleService } from './modules/catalago-module/reservas-module.service';
import { ReservasModuleController } from './modules/catalago-module/reservas-module.controller';
import { ReservasModuleModule } from './modules/catalago-module/reservas-module.module';

@Module({
  imports: [ReservasModuleModule],
  controllers: [AppController, ReservasModuleController],
  providers: [AppService, ReservasModuleService],
})
export class AppModule {}
