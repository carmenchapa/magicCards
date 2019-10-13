import React from "react"
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {styles as s} from "../Styles"
import {Colors} from "./ColorsRow"

export const ListItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={[s.cardShadow, s.card]}>
        <Text style={s.title}>{`${props.item.name}`}</Text>
        <Text style={s.infoText}>{`${props.item.type}`}</Text>
        <Text style={s.infoText}>{`${props.item.setName}`}</Text>
        <Colors colors={props.item.colors} />
      </View>
    </TouchableOpacity>
  )
}
