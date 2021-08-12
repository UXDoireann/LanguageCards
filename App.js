import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Stack = createStackNavigator();
const MainNav =()=>(
  <Stack.Navigator>
    <Stack.Screen
    name="Decks"
    component={DeckList}
    style={styles.container}/>
    <Stack.Screen
    name="Selected Deck"
    component={DeckView}/>
  </Stack.Navigator>
)




export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        
        <NavigationContainer>
                <MainNav/>
        </NavigationContainer> 
      
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
