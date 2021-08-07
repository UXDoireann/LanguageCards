import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
//import { createAppContainer } from 'react-navigation'

const Stack = createStackNavigator();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <DeckList/>
        <View style={styles.container}>
        <Stack.Screen
                name="DeckList"
                component={DeckList}
                
              />
              <Stack.Screen
                name='DeckView'
                component={DeckView}
               
              />
        </View>
        </NavigationContainer> 
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
