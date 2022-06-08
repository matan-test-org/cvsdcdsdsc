import { Order } from "../order/Order";

export type Product = {
  description: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  itemPrice: number | null;
  orders?: Array<Order>;
};
