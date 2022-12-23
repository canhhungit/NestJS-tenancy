import { TenancyModule } from '@needle-innovision/nestjs-tenancy';
import { Module } from '@nestjs/common';
import { Cat, CatSchema } from 'src/schemas/cat.model';
import { CatService } from './cat.service';

@Module({
  imports: [TenancyModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatService],
})
export class CatModule {}
