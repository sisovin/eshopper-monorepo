import { Category } from './category.entity';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  category: Category;
}
