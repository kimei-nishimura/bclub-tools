import { IChatRoomCharacter, IChatRoomSearchResult, IStoredPlayer, ISettings, IMigration } from 'models';
import { IMember } from 'models/database';
import { IStoredAppearance } from 'models/internal';

export const GLOBAL_STORAGE_KEYS = [
  'migration',
  'settings'
] as const;

export const STORAGE_KEYS = [
  'chatRoomCharacter',
  'chatRoomSearchResult',
  'onlineFriends',
  'player',
  'wardrobe'
] as const;

export type GlobalStorageKeys = typeof GLOBAL_STORAGE_KEYS[number];
export type StorageKeys = typeof STORAGE_KEYS[number];

export interface IGlobalStorageMap {
  'migration': IMigration;
  'settings': ISettings;
}

export interface IStorageMap {
  'chatRoomCharacter': IChatRoomCharacter[];
  'chatRoomSearchResult': IChatRoomSearchResult[];
  'onlineFriends': IMember[];
  'player': IStoredPlayer;
  'wardrobe': IStoredAppearance[];
}
