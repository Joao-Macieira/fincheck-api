import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    return this.categoryRepository.findMany({
      where: { userId },
    });
  }
}
