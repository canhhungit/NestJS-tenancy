import { TenancyModule } from '@needle-innovision/nestjs-tenancy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Cat, CatSchema } from 'src/schemas/cat.model';
import { CatService } from './cat.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    TenancyModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  providers: [CatService],
})
export class CatModule {}
