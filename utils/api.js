import { QUESTION_STORAGE_KEY } from './questions'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function getQuestions (key) {
   return AsyncStorage.getItem(QUESTION_STORAGE_KEY)
     .then((results) => {
       const data = JSON.parse(results)
       return data
     })
 }