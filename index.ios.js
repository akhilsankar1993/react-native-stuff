// create a react component
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import { DayItem } from './src/day-item'

const DAYS =
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the Week
        </Text>
        {this.days()}
      </View>
    )
  }

  days() {
    return DAYS.map((day) => {
      return(<DayItem day={day} />)
    })
  }
}

// Style the React Component
const styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays)
