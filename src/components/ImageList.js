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

export const ImageListItem = props => {
  return (
    <TouchableOpacity onPress={() => console.log(props.item)}>
      <View style={s.cardShadow}>
        <View style={s.listItem}>
          <Image
            style={[s.magicItem]}
            source={{
              uri: props.item.imageUrl
            }}
            resizeMode="contain"
          ></Image>
          <View style={s.info}>
            <Text style={s.feePhotoTitle}>{`${props.item.name}`}</Text>
            <Text style={s.feeLikes}>{`${props.item.type}`}</Text>
            <Text style={s.feeLikes}>{`${props.item.setName}`}</Text>
            <Colors colors={props.item.colors} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
