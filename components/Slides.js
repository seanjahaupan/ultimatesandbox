import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import {Button} from 'react-native-elements'

import WelcomePage from './WelcomePage';

const SCREEN_WIDTH = Dimensions.get('window').width
class Slides extends Component{

  renderSlides() {
    return this.props.data.map((slide) => {
      return (
        <View key={slide.text} style = {[styles.slide, {backgroundColor:slide.color}]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          <Button 
          onPress={this._letsGo}
          title='LETS GO!!'
          color= 'black'
          backgroundColor = '#65B94A'
          style={{paddingTop:100}}
          
        />
        </View>
      );
    })
  }

  _letsGo(){
    console.log('LETS FUCKING GO!!!!')
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1}}
        pagingEnabled
        >
        {this.renderSlides()}

        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
    width:SCREEN_WIDTH

  },
  slideText: {
    fontSize: 40,
    color:'white'
  }
})
export default Slides;