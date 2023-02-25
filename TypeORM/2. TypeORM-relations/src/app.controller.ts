import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/create')
  async createData(): Promise<any> {
    await this.appService.seed();
    return 'Save';
  }
}
