import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  getCategory(id: number) {
    return this.prisma.category.findUnique({
      where: {
        categoryId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  createCategory(category: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        ...category,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: {
        categoryId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  updateCategory(id: number, category: CreateCategoryDto) {
    return this.prisma.category.update({
      where: {
        categoryId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
      data: {
        ...category,
      },
    });
  }
}
