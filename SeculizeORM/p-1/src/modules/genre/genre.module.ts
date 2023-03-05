import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';

@Module({
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
})
export class GenreModule {}
