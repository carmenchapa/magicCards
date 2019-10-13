import React from "react"
import {Text, TouchableOpacity, View} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {styles as s} from "../Styles"
import {Colors} from "./ColorsRow"

export const ListItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={[s.cardShadow, s.card]}>
        <Text style={s.title}>{`${props.item.name}`}</Text>
        <Text style={s.infoText}>
          <Text style={s.infoTitle}>Type: </Text>
          {`${props.item.type}`}
        </Text>
        <Text style={s.infoText}>
          <Text style={s.infoTitle}>Set name: </Text>
          {`${props.item.setName}`}
        </Text>
        <Colors colors={props.item.colors} />
      </View>
    </TouchableOpacity>
  )
}
