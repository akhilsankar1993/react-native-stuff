// create a react component
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import { DayItem } from './src/day-item'
import Moment from 'moment'

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }

  days() {
    const dayItems = []
    for (var i = 0; i < 7; i++) {
      const day = Moment().add(i, 'days').format('dddd')
      dayItems.push(
        <DayItem day={day} daysUntil={i} key={i} />
      )
    }

    return dayItems
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
