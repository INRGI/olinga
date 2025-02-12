import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationModule } from './Language/translation.module';
import { AuthModule } from './Auth/auth.module';
import { ConsultationModule } from './Сonsultation/consultation.module';
import { MassageModule } from './Massage/massage.module';
import { CoursesModule } from './Courses/courses.module';
import { AbonementsModule } from './Abonements/Abonements.module';
import { PromotionModule } from './Promotion/promotion.module';

@Module({
  imports: [    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    TranslationModule,
    AuthModule,
    ConsultationModule,
    MassageModule,
    CoursesModule,
    AbonementsModule,
    PromotionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
