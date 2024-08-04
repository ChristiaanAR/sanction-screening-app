import {
    Controller,
    Post,
    Res,
    HttpStatus,
    Logger,
    Body,
} from '@nestjs/common';
import { Response } from 'express';
import { SanctionScreenBody } from './ofac-screen-service.common'
import { OfacScreenServiceService } from './ofac-screen-service.service';

@Controller('screen')
export class OfacScreenServiceController {
    constructor (
        private readonly ofacScreenServiceService: OfacScreenServiceService,
    ) {}

    @Post()
    async ofacSearch(
        @Body() body: SanctionScreenBody,
        @Res() res: Response,
    ) {
        try {
            const data = await this.ofacScreenServiceService.ofacSearch(body);
            res.status(HttpStatus.OK).json(data);
        } catch (err) {
            Logger.error(`Error in OFAC search: ${err.message}`);
            res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
        }

    }
}
