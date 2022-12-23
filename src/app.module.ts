import { TenancyModule } from '@needle-innovision/nestjs-tenancy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    TenancyModule.forRoot({
      tenantIdentifier: 'X-TENANT-ID',
      options: () => {},
      uri: (tenantId: string) => 'mongodb://localhost/nest',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ScheduleModule.forRoot(),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
