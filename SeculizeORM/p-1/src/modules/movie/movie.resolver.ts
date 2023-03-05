import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Movie } from '../../core/database/models/dbModels/movie.model';
import { MovieService } from './movie.service';
import { CreateMovieInput } from './inputs/create-movie.input';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private actorService: MovieService) {}

  @Query(() => [Movie])
  async getAllActors() {}

  @Mutation(() => Movie)
  async createMovie(
    @Args('createMovieInput') createMovieInput: CreateMovieInput,
  ): Promise<Movie> {
    return this.actorService.createMovie(createMovieInput);
  }
}
