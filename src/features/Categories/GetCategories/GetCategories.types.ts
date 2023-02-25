import { ChannelCategoryDto } from "../../../api/model";

export interface IGetCategories {
  data: ChannelCategoryDto[];
  onDeleteCategory: (id: string) => void;
}
