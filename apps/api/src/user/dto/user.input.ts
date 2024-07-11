import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpsertUserInput {
  @Field()
  name: string;
}

@InputType()
export class AddBalanceInput {
  @Field((type) => Int)
  userId: number;

  @Field((type) => Int)
  amount: number;
}

@InputType()
export class FindById {
  @Field((type) => Int)
  userId: number;
}
