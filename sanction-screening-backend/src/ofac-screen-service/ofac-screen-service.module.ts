import { Module } from '@nestjs/common';
import { OfacScreenServiceController } from './ofac-screen-service.controller';
import { OfacScreenServiceService } from './ofac-screen-service.service';

@Module({
  controllers: [OfacScreenServiceController],
  exports: [OfacScreenServiceService],
  providers: [OfacScreenServiceService],
})
export class OfacScreenServiceModule {}
