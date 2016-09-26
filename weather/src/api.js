const rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=75087095c83c66d4d4005be5adbd0da3'

export const getWeatherData = (latitude, longitude) => {
  const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`

  return fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    return {
      city: json.name,
      temperature: kevinToF(json.main.temp),
      description: json.weather[0].description

    }
  })

  const kevinToF = (temp) => {
    return Math.round((temp - 273.15) * 1.8 + 32) + ' F'
  }
}
