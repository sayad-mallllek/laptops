import type { LightItemType, ItemType } from "../types/item.types";
import { LAPTOP_ITEMS, LIGHT_LAPTOP_ITEMS } from "./data/items";

export const getLatestItems = async () =>
  new Promise<LightItemType[]>((res) => res(LIGHT_LAPTOP_ITEMS.slice(0, 10)));

export const getItemById = async (id: number) =>
  new Promise<ItemType | undefined>((res) =>
    res(LAPTOP_ITEMS.find((item) => item.id === id))
  );
