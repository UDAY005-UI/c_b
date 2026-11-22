import { Module } from '@nestjs/common';
import { CompareModule } from './compare/compare.module';

@Module({
  imports: [CompareModule],
})
export class AppModule {}
