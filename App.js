import React from "react"
import {AppLoading} from "expo"
import * as Font from "expo-font"
import Home from "./src/Home.js"

export default class App extends React.Component {
  state = {
    isReady: false
  }

  _cacheResourcesAsync = () => {
    const asyncTasks = [
      Font.loadAsync({
        MuseoLight: require("./static/fonts/MuseoSans-100.otf"),
        MuseoRegular: require("./static/fonts/MuseoSans-300.otf"),
        MuseoMedium: require("./static/fonts/MuseoSans-500.otf"),
        MuseoBold: require("./static/fonts/MuseoSans-700.otf"),
        MuseoBlack: require("./static/fonts/MuseoSans-900.otf"),
        MuseoItalicLight: require("./static/fonts/MuseoSans-100Italic.otf"),
        MuseoItalicRegular: require("./static/fonts/MuseoSans-300Italic.otf"),
        MuseoItalicMedium: require("./static/fonts/MuseoSans-500Italic.otf"),
        MuseoItalicBold: require("./static/fonts/MuseoSans-700Italic.otf"),
        MuseoItalicBlack: require("./static/fonts/MuseoSans-900Italic.otf")
      })
    ]

    return Promise.all(asyncTasks).catch(error => console.log(error))
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      )
    }

    return <Home />
  }
}
