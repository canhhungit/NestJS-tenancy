import { InjectTenancyModel } from '@needle-innovision/nestjs-tenancy';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Cat } from 'src/schemas/cat.model';

@Injectable()
export class CatService {
  constructor(
    @InjectTenancyModel(Cat.name) private readonly catModel: Model<Cat>,
  ) {}

  @Cron('*/5 * * * * *')
  handleCron() {
    console.log('Called every 5 second');
  }
}
