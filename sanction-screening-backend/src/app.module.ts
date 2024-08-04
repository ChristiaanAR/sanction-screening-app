import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfacScreenServiceModule } from './ofac-screen-service/ofac-screen-service.module';

@Module({
  imports: [OfacScreenServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
