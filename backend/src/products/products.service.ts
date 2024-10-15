import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/product.dto';
import { UUID } from 'crypto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  getProducts(page: number) {
    return this.prisma.product.findMany({
      where: {
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  getProduct(id: UUID) {
    return this.prisma.product.findUnique({
      where: {
        productId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  createProduct(product: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
        ...product,
      },
    });
  }

  deleteProduct(id: UUID) {
    return this.prisma.product.delete({
      where: {
        productId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
    });
  }

  updateProduct(id: UUID, product: CreateProductDto) {
    return this.prisma.product.update({
      where: {
        productId: id,
        userId: 'de9c5ee3-8cd8-4940-b864-5fc1db18663f',
      },
      data: {
        ...product,
      },
    });
  }
}
