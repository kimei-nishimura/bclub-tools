export interface IStoredAppearance {
  OutfitName: string;
  Items: IStoredAppearanceItem[];
}

export interface IStoredAppearanceItem {
  ItemName: string;
  GroupName: string;
  Color: string;
  Property: string | null;
}
