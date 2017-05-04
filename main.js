import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Slides from './components/Slides'

const SCREEN_WIDTH = Dimensions.get('window').width
const SLIDE_DATA = [{ text:'First page', color:'blue'}, {text:'Second page', color:'green'}];
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} />
        <Text>Open up main.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollviewStyle: {
    flex:1,
    width: SCREEN_WIDTH
  }
});

Expo.registerRootComponent(App);
