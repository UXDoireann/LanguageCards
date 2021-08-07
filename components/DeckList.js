import React, {Component} from 'react' 
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';
import { useNavigation } from '@react-navigation/native';
//import {showDecks} from '../actions/index'
//import {getQuestions} from '../utils/api'
//import AsyncStorage from '@react-native-async-storage/async-storage';


function DeckList (props){
   
   
        
      
    

const navigation = useNavigation()
     

        const { questions} = props;
        console.log(questions)
        const decks = Object.keys(questions)
        console.log(decks)
       
        
        return (
            <View>
              <Text>
                <h1>Decks</h1>
              <ul>
                {decks.map((deck)=>(
                  <li key={deck}>
                    <p>{deck}</p><br>
                    </br>
                    <p>{Object.keys(questions[deck].questions).length
                   } cards</p>
                   <button onClick={()=>navigation.navigate('DeckView', {id:deck})}>Select Deck</button>
                  </li>
                ))}
              </ul>
              </Text>
            </View>
         
        );
      }
    
    
    function mapStateToProps(state) {
     
      return {
        questions:questions
        
      };
    }
    
    export default connect(mapStateToProps)(DeckList);