import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  name: string;

  @Field()
  lang: string;

  @Field()
  year: number;

  @Field({ nullable: true })
  time?: number | null;
}
