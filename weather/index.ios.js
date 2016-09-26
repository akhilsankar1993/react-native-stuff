import React, { Component } from 'react'
import { AppRegistry, MapView, View, StyleSheet } from 'react-native'

class Weather extends Component {
  render() {

    const pins = [{
      latitude: 37,
      longitude: -95
    }]



    return <MapView
      annotations={pins}
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  }

  onRegionChangeComplete(region) {
    console.log(region)
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('weather', () => Weather)
