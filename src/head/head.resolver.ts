import { Resolver, Query, Args } from '@nestjs/graphql';
import { HeadService } from './head.service';
import { Head } from './head.entity';

@Resolver(() => Head)
export class HeadResolver {
  constructor(private readonly headService: HeadService) {}

  @Query(() => [Head], { name: 'allHead' })
  findAll() {
    return this.headService.findAll();
  }

  @Query(() => Head, { name: 'head' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.headService.findOne(id);
  }
}
