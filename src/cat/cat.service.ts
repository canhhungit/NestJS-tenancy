import { InjectTenancyModel } from '@needle-innovision/nestjs-tenancy';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Cat } from 'src/schemas/cat.model';

@Injectable()
export class CatService implements OnModuleInit {
  constructor(
    // @InjectModel(Cat.name) private readonly catModel: Model<Cat>,
    @InjectTenancyModel(Cat.name) private readonly catModel: Model<Cat>,
  ) {}

  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  @Cron('*/5 * * * * *')
  handleCron() {
    console.log('Called every 5 second');
  }
}
