import React, {Component} from 'react' 
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';
import { useNavigation } from '@react-navigation/native';
import{lightPurp, pink, blue, red, orange, white}from '../utils/colors'
import {MaterialCommunityIcons, MaterialIcons, Ionicons} from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
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
              <ul>
                {decks.map((deck)=>(
                  <li key={deck}>
                    <p>{deck}</p><br>
                    </br>
                    <p>{Object.keys(questions[deck].questions).length
                   } cards</p>
                   <TouchableOpacity style={styles.Buttons} onPress={()=>this.props.navigation.navigate('Selected Deck', {deck:deck})}><Text style={styles.ButtonText}>Select Deck{Platform.OS==='ios' 
        ? <MaterialCommunityIcons name="cards" size={24} color="white" />
        : <Ionicons name="archive" size={24} color="white" />}</Text></TouchableOpacity>
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
    backgroundColor:blue,
    width:250,
    paddingTop: 5,
    paddingBottom:5,
    borderRadius:10,
    paddingLeft:5,
    alignItems:'center',
    justifyContent:'center'
  },
  ButtonText:{
    color:white,
    fontSize:20,
   // fontWeight:'bold',
  }
})
    
    function mapStateToProps(state) {
     
      return {
        questions:questions
        
      };
    }
    
    export default connect(mapStateToProps)(DeckList);