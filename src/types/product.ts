export type ProductCategory = 'slim' | 'straight' | 'baggy' | 'jacket';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  isNew?: boolean;
}