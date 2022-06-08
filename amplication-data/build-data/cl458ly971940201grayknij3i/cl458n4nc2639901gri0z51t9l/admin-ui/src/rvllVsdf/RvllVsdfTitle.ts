import { RvllVsdf as TRvllVsdf } from "../api/rvllVsdf/RvllVsdf";

export const RVLLVSDF_TITLE_FIELD = "id";

export const RvllVsdfTitle = (record: TRvllVsdf): string => {
  return record.id || record.id;
};
