import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { College } from './infrastructure/college/college.entity';
import { Profile } from './infrastructure/profile/profile.entity';
import { Student } from './infrastructure/student/student.entity';
import { UseCasesModule } from './modules/use-cases.module';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: classes }],
      singular: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'vasanth7788',
      database: 'typeorm-relations',
      entities: [Student, Profile, College],
      synchronize: true,
    }),
    UseCasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
