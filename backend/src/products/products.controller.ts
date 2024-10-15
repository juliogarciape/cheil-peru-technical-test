import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Query,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/product.dto';
import { UUID } from 'crypto';

@Controller('/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get()
  getProducts(@Query() query: { page: number }) {
    return this.productsService.getProducts(query.page);
  }

  @Get(':id')
  getProduct(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.productsService.getProduct(id);
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.productsService.deleteProduct(id);
  }

  @Put(':id')
  updateProduct(
    @Body() product: CreateProductDto,
    @Param('id', ParseUUIDPipe) id: UUID,
  ) {
    return this.productsService.updateProduct(id, product);
  }
}
