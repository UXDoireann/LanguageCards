import React, {Component} from 'react' 
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';

class DeckView extends Component{



    render(){

      const{deck}=this.props.route.params
      console.log(deck)

        return(
            <View>
                <Text>
                   {deck}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(questions, params) {
   return{
       questions
   

    };
  }

export default connect (mapStateToProps)(DeckView)