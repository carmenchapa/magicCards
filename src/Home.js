import React from "react"
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"
import axios from "axios"
// import mtgsdk from "mtgsdk"
import {ImageListItem} from "./components/ImageList"
import {Colors} from "./components/ColorsRow"
import {styles as s} from "./Styles"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import {AntDesign} from "@expo/vector-icons"

export default class Home extends React.Component {
  state = {
    page: 0,
    cards: [],
    selectedColor: null,
    search: null,
    closeIcon: false
  }
  cardsCall = () => {
    // console.log("cardsCall", this.state.page)
    let url = `https://api.magicthegathering.io/v1/cards?contains=imageUrl&pageSize=30&page=${this.state.page}`
    url = this.state.selectedColor
      ? url + `&colors=${this.state.selectedColor.toLowerCase()}`
      : url
    url = this.state.search ? url + `&name=${this.state.search}` : url

    // console.log("url", url)
    axios
      .get(url)
      .then(response => {
        console.log("gott cards")
        return this.setState({
          page: this.state.page + 1,
          cards: this.state.cards.concat(
            //Filter cards with image, 'contains=imageUrl' does not work for repeated images
            response.data.cards.filter(e => e.imageUrl)
          )
        })
      })
      .catch(error => console.log(error))
  }

  resetCards = () => this.setState({page: 0, cards: []}, this.cardsCall)

  onEndReached = () => this.cardsCall()

  onChangeText = v => this.setState({search: v})

  search = () => this.setState({closeIcon: true}, this.resetCards)

  closeSearch = () =>
    this.setState({search: null, closeIcon: false}, this.resetCards)

  selectColor = c => this.setState({selectedColor: c}, this.resetCards)

  headerComponent = () => {
    const colors = ["White", "Blue", "Green", "Red", "Black"]
    return (
      <View
        style={[
          {backgroundColor: "white"},
          s.headerContainer,
          s.cardShadow,
          s.fullWidth,
          s.centerItems
        ]}
      >
        <View style={s.search}>
          <TextInput
            onChangeText={text => this.onChangeText(text)}
            placeholder={"search"}
            value={this.state.search}
            onEndEditing={this.search}
            // style={{alignItems: "flex-end"}}
          />

          <AntDesign
            name={this.state.closeIcon ? "close" : "search1"}
            color={"grey"}
            onPress={this.state.closeIcon ? this.closeSearch : this.search}
          />
        </View>
        <Colors
          colors={colors}
          onPress={c => this.selectColor(c)}
          selected={this.state.selectedColor}
        />
      </View>
    )
  }

  componentDidMount() {
    this.cardsCall()
  }

  render() {
    return (
      <View style={(s.flx1, s.fullFill)}>
        <FlatList
          data={this.state.cards}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <ImageListItem
              item={item}
              // navigate={() =>
              //   navigation.navigate("Detail", {data: "random", index: index})
              // }
            />
          )}
          ListHeaderComponent={this.headerComponent}
          stickyHeaderIndices={[0]}
          ListEmptyComponent={() => (
            <View
              style={[
                s.fullFill,
                s.centerContent,
                s.centerItems,
                s.absoluteTop
              ]}
            >
              <ActivityIndicator />
            </View>
          )}
          contentContainerStyle={{
            // marginTop: 20,
            alignItems: "center"
          }}
          onEndReached={this.onEndReached}
        />
      </View>
    )
  }
}
