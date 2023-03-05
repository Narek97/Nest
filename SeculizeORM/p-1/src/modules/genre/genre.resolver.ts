import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Genre } from '../../core/database/models/dbModels/genre.model';
import { GenreService } from './genre.service';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Mutation(() => Genre)
  async createNewGenre(@Args('genre') genre: string): Promise<Genre> {
    return this.genreService.createNewGenre(genre);
  }
}
