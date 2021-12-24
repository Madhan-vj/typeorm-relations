import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import providers from './providers';
@Module({
 imports: [TypeOrmModule.forFeature([...entities])],
 controllers: [],
 providers: [...providers],
 exports: [...providers],
})
export class DatabaseModule { }
