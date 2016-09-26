import React, { Component } from 'react'
import { AppRegistry, MapView, View, StyleSheet } from 'react-native'
import { getWeatherData } from './src/api'

class Weather extends Component {

  constructor() {
    super()
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  }

  render() {
    return <MapView
      annotations={[this.state.pin]}
      onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
      style={styles.map}>
    </MapView>
  }

  onRegionChangeComplete(region) {
    console.log('gets to region change ');
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    })

    getWeatherData(region.latitude, region.longitude)
    .then((data) => {
      console.log(data)
      this.setState(data)
    })
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('weather', () => Weather)
