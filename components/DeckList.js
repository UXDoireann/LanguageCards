import React, {Component} from 'react' 
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';
import { useNavigation } from '@react-navigation/native';
import{lightPurp, pink, blue, red, orange}from '../utils/colors'
//import {showDecks} from '../actions/index'
//import {getQuestions} from '../utils/api'
//import AsyncStorage from '@react-native-async-storage/async-storage';


class DeckList extends Component{
   
   
        
      
    

render(){
     

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
                  <li key={deck}>
                    <p>{deck}</p><br>
                    </br>
                    <p>{Object.keys(questions[deck].questions).length
                   } cards</p>
                   <TouchableOpacity style={styles.Buttons} onPress={()=>this.props.navigation.navigate('DeckView', {id:deck})}><Text>Select Deck</Text></TouchableOpacity>
                  </li>
                ))}
              </ul>
              </Text>
            </View>
         
        );
      }
}

const styles = StyleSheet.create({

  Buttons:{
    backgroundColor:lightPurp,
    width:250,
    marginTop: 5,
    marginBottom:5,
    borderRadius:10
  }
})
    
    function mapStateToProps(state) {
     
      return {
        questions:questions
        
      };
    }
    
    export default connect(mapStateToProps)(DeckList);