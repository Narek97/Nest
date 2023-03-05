import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './inputs/create-movie.input';
import { Movie } from '../../core/database/models/dbModels/movie.model';

@Injectable()
export class MovieService {
  async createMovie(createMovieInput: CreateMovieInput) {
    return await Movie.create(createMovieInput);
  }
}
