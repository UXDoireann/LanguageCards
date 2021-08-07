import React, {Component} from 'react' 
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';
//import {showDecks} from '../actions/index'
//import {getQuestions} from '../utils/api'
//import AsyncStorage from '@react-native-async-storage/async-storage';


class DeckList extends Component{
   
   
        
      
      render() {

        const { questions} = this.props;
        console.log(questions)
        const decks = Object.keys(questions)
        console.log(decks)
        
        return (
            <View>
              <Text>
                <h1>Decks</h1>
              <ul>
                {decks.map((deck)=>(
                  <li>
                    <p>{deck}</p>
                  </li>
                ))}
              </ul>
              </Text>
            </View>
         
        );
      }
    }
    
    function mapStateToProps(state) {
     
      return {
        questions:questions
        
      };
    }
    
    export default connect(mapStateToProps)(DeckList);