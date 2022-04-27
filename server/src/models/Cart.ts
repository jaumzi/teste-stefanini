import { BaseModel } from "./BaseModel"
import { Product } from "./Product";
import { Shop } from "./Shop";

export class Cart extends BaseModel {
  shop: Shop;
  items: CartItem[];
};

export class CartItem extends BaseModel {
  quantity: number;
  product: Product;
  comments: string;
}
