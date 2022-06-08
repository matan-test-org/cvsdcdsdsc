import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  itemPrice?: SortOrder;
};
