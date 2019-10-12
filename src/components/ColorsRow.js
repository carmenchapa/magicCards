import React from "react"
import _ from "lodash"
import {TouchableOpacity, View} from "react-native"
import {styles as s} from "../Styles"
import {AntDesign} from "@expo/vector-icons"

function getColor(item) {
  const colors = {
    Red: "#e53935",
    Blue: "#1976d2",
    Green: "#4caf50",
    White: "#f5f5f5",
    Black: "#263238",
    Grey: "#b0bec5"
  }
  return _.get(colors, item, item)
}

export const Colors = props => (
  <View style={s.colors}>
    {props.colors.map((e, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => props.onPress(props.selected !== e ? e : null)}
        activeOpacity={!props.onPress ? 1 : 0.3}
      >
        <View
          style={[
            s.color,
            {backgroundColor: getColor(e)},
            e === "White" && {borderWidth: 0.5, borderColor: getColor("Grey")}
          ]}
        >
          {props.selected === e && (
            <AntDesign name="check" color={e === "White" ? "grey" : "white"} />
          )}
        </View>
      </TouchableOpacity>
    ))}
  </View>
)
