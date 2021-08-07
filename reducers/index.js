import { SHOW_DECKS } from '../actions'

function questions (state = {}, action) {
  switch (action.type) {
    case SHOW_DECKS :
      return {
        ...state,
        ...action.questions,
      }
   
    default :
      return state
  }
}

export default questions