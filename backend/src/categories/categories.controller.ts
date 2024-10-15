import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/category.dto';

@Controller('/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService = categoriesService;
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategory(id);
  }

  @Post()
  createCategory(@Body() category: CreateCategoryDto) {
    return this.categoriesService.createCategory(category);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }

  @Put(':id')
  updateCategory(
    @Body() category: CreateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.categoriesService.updateCategory(id, category);
  }
}
