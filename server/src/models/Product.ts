import { BaseModel } from "./BaseModel";

export class Product extends BaseModel {
  name: string;
  prince: number;
  description?: string;
}
