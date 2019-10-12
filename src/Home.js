import React from "react"
import {FlatList, StyleSheet, Text, View} from "react-native"
import axios from "axios"
// import mtgsdk from "mtgsdk"
import {ImageListItem} from "./components/ImageList"
import {styles as s} from "./Styles"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

export default class Home extends React.Component {
  state = {
    page: 0,
    cards: []
  }
  cardsCall = () => {
    console.log("cardsCall", this.state.page)
    const url = `https://api.magicthegathering.io/v1/cards?contains=imageUrl&pageSize=30&page=${this.state.page}`
    axios
      .get(url)
      .then(response => {
        console.log("gott cards")
        return this.setState({
          page: this.state.page + 1,
          cards: this.state.cards.concat(
            response.data.cards.filter(e => e.imageUrl)
          )
        })
      })
      .catch(error => console.log(error))
  }

  onEndReached = () => this.cardsCall()

  componentDidMount() {
    this.cardsCall()
  }

  render() {
    return (
      <View style={s.flx1}>
        <FlatList
          data={this.state.cards}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <ImageListItem
              item={item}
              index={index}
              navigate={() =>
                navigation.navigate("Detail", {data: "random", index: index})
              }
            />
          )}
          contentContainerStyle={{
            marginTop: hp("14%"),
            alignItems: "center"
          }}
          onEndReached={this.onEndReached}
        />
      </View>
    )
  }
}
