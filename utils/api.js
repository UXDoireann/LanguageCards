import { QUESTION_STORAGE_KEY } from './questions'


export function getQuestions (key) {
   return AsyncStorage.getItem(QUESTION_STORAGE_KEY)
     .then((results) => {
       const data = JSON.parse(results)
       return data
     })
 }