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
        MuseoRegular: require("./static/fonts/MuseoSans-300.otf"),
        MuseoBold: require("./static/fonts/MuseoSans-700.otf"),
        MuseoBlack: require("./static/fonts/MuseoSans-900.otf")
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
