import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

interface GenreAttr {
  genre: string;
}

@Table({
  tableName: 'genres',
  createdAt: false,
  updatedAt: false,
})
@ObjectType()
export class Genre extends Model<Genre, GenreAttr> {
  @Field()
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Field()
  @Column({ type: DataType.STRING })
  genre: string;
}
