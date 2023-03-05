import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Genre } from '../../core/database/models/dbModels/genre.model';

@Injectable()
export class GenreService {
  async createNewGenre(genre: string) {
    const currentGenre = Genre.findOne({ where: { genre } });
    if (currentGenre) {
      throw new HttpException('Genre already exist', HttpStatus.BAD_REQUEST);
    }
    return Genre.create({ genre });
  }
}
