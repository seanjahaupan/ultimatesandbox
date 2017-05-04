import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
class Slides extends Component{

  renderSlides() {
    return this.props.data.map((slide) => {
      return (
        <View key={slide.text} style = {[styles.slide, {backgroundColor:slide.color}]}>
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    })
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