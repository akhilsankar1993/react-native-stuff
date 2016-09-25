import React, { Component } from 'react'
import { View, Text, AppRegistry } from 'react-native'

class StopWatch extends Component {
  render() {
    return (
      <Text>
        This works!
      </Text>
    )
  }
}

AppRegistry.registerComponent('stopwatch', () => StopWatch)
