import React, {Component} from 'react' 
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';

class DeckView extends Component{



    render(){

        

        return(
            <View>
                <Text>
                    <p>Selected Deck</p>
                </Text>
            </View>
        )
    }
}

function mapStateToProps(questions, { navigation, route }) {
   
    return {
      route,
      navigation
    };
  }

export default connect (mapStateToProps)(DeckView)