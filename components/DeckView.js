import React, {Component} from 'react' 
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import { questions } from '../utils/questions';

class DeckView extends Component{



    render(){

        const {navigation, route} = props

        return(
            <View>
                <Text>
                    <p>Selected Deck</p>
                </Text>
            </View>
        )
    }
}

export default DeckView