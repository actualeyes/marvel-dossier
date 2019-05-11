import * as constants from '../constants';

export interface FetchCharacterData {
  type: constants.FETCH_CHARACTER_DATA;
}

export const fetchCharacterData = () => {
  return {
    type: constants.FETCH_CHARACTER_DATA
  }
}

export type CharacterAction =
  FetchCharacterData;

