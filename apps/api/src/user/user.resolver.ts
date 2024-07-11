import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { AddBalanceInput, FindById, UpsertUserInput } from './dto/user.input';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUserKuy(): Promise<User[]> {
    try {
      const users = await this.userService.findAll();

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  @Query((returns) => User)
  async getUserById(@Args('input') input: FindById): Promise<User> {
    try {
      const user = this.userService.findById(input.userId);

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation((returns) => User)
  async upsertUser(@Args('input') input: UpsertUserInput): Promise<User> {
    try {
      const user = await this.userService.upsert(input.name);

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation((returns) => User)
  async addBalance(@Args('input') input: AddBalanceInput): Promise<User> {
    try {
      const user = await this.userService.addAmount({
        id: input.userId,
        amount: input.amount,
      });

      return user;
      return { id: 1, name: '1', amount: 1 };
    } catch (error) {
      console.log(error);
    }
  }
}
