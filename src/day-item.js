// import
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

// create component
export class DayItem extends Component {
  render() {
    return(
      <Text style = {styles.day} >
        {this.props.day}
      </Text>
    )
  }
}

// style component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: 'green'
  }
})
