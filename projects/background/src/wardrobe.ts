import { decompressWardrobe, IStoredAppearance, store } from '../../../models';

export function writeWardrobe(tabId: number, names: string[], compressedWardrobe: string) {
  const wardrobe: IStoredAppearance[] = [];
  const minimalWardrobe = decompressWardrobe(compressedWardrobe);
  for (const [i, wardrobeSlot] of minimalWardrobe.entries()) {
    const outfit: IStoredAppearance = {
      OutfitName: names[i],
      Items: wardrobeSlot.map(item => ({
        ItemName: item[0],
        GroupName: item[1],
        Color: item[2],
        Property: item[3]
      }))
    };
    wardrobe.push(outfit);
  }

  store(tabId, 'wardrobe', wardrobe);
}
