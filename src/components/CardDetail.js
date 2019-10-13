import React from "react"
import {Image, TouchableOpacity, View} from "react-native"
import {styles as s} from "../Styles"
import {AntDesign} from "@expo/vector-icons"

export const CardDetail = props => {
  return (
    <View
      transparent
      needsOffscreenAlphaCompositing
      style={[s.absolute, s.fullFill, s.modalView]}
    >
      <AntDesign
        style={{paddingRight: 20}}
        name={"close"}
        size={40}
        color={"white"}
        onPress={() => props.onPress()}
      />
      <Image
        style={[s.magicImage]}
        source={{uri: props.image}}
        resizeMode="contain"
      />
      <View style={{height: 40}} />
    </View>
  )
}
