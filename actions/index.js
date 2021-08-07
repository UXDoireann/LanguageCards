import {getQuestions} from '../utils/api'

export const SHOW_DECKS = 'SHOW_DECKS'


export function showDecks (decks) {
  return {
    type: SHOW_DECKS,
    decks
    ,
  }
}