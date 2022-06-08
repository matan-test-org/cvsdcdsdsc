import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  itemPrice?: number | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
