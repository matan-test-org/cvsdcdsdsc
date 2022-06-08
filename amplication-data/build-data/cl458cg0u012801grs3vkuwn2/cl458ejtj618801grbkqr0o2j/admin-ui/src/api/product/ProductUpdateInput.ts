import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  itemPrice?: number | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
