import { BaseModel } from '../base.model';
import { Column, DataType, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

interface MovieAttr {
  name: string;
  lang: string;
  year: number;
  time?: number;
}

@Table({
  tableName: 'movies',
})
@ObjectType()
export class Movie extends BaseModel<Movie, MovieAttr> {
  @Field()
  @Column({ type: DataType.STRING })
  name: string;

  @Field()
  @Column({ type: DataType.STRING })
  lang: string;

  @Field()
  @Column({ type: DataType.INTEGER })
  year: number;

  @Field({ nullable: true })
  @Column({ type: DataType.INTEGER, allowNull: true })
  time: number;
}
