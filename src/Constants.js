import {Platform} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

//-----** Dimensions **-----//

export const NAVBAR_HEIGHT = hp("14%")
export const STATUS_BAR_HEIGHT = Platform.select({ios: 20, android: 24})
export const SCREEN_WIDTH = wp("100%")
export const SCREEN_HEIGHT = hp("100%")
export const HORIZONTAL_PADDING = 26
