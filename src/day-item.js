// import
import React, { Component } from 'react'
import { Text } from 'react-native'

// create component
export class DayItem extends Component {
  render() {
    return(
      <Text style = {this.style()} >
        {this.props.day}
      </Text>
    )
  }

  style() {
    return {
      color: this.color(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color() {
    const opacity = 1 / this.props.daysUntil
    return 'rgba(0, 0, 0, ' + opacity + ')'
  }

  fontSize() {
    return 60 - 6 * (this.props.daysUntil)
  }

  lineHeight() {
    return 70 - 4 * (this.props.daysUntil)
  }
}
