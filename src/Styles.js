import {StyleSheet} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import {
  HORIZONTAL_PADDING,
  NAVBAR_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT
} from "./Constants"

export const styles = StyleSheet.create({
  //-----** General styles **-----//
  flx1: {flex: 1},
  centerContent: {justifyContent: "center"},
  endContent: {justifyContent: "flex-end"},
  startContent: {justifyContent: "flex-start"},
  centerItems: {alignItems: "center"},
  fullFill: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  },
  fullWidth: {
    width: SCREEN_WIDTH
  },
  absoluteTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  //-----** Header **-----//
  headerContainer: {
    justifyContent: "center",
    marginHorizontal: HORIZONTAL_PADDING,
    paddingTop: hp("4%")
  },
  header: {
    height: NAVBAR_HEIGHT,
    paddingTop: STATUS_BAR_HEIGHT
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  //-----** FlatList **-----//
  cardShadow: {
    margin: 10,
    marginTop: 26,
    width: wp("80%"),
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  listItem: {
    flex: 1,
    height: wp("128%"),
    marginTop: 10,
    justifyContent: "flex-start"
  },
  magicItem: {
    width: wp("70%"),
    height: wp("98%"),
    borderRadius: 14,
    marginTop: 6,
    alignSelf: "center"
  },
  info: {padding: 20},
  colors: {
    flexDirection: "row",
    paddingTop: 10
  },
  color: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  // selectedColor: {},
  feePhotoTitle: {
    fontFamily: "MuseoMedium",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 5
    // color: "#fff"
  },
  feeLikes: {
    fontFamily: "MuseoLight",
    fontSize: 8,
    lineHeight: 9
    // color: "#fff"
  },
  //-----** Detail **-----//
  detailInfo: {
    padding: HORIZONTAL_PADDING
  },
  detailPhotoTitle: {
    fontFamily: "MuseoMedium",
    fontSize: 42,
    lineHeight: 49,
    color: "#fff"
  },
  detailLikes: {
    fontFamily: "MuseoLight",
    fontSize: 14,
    lineHeight: 16,
    color: "#fff"
  },
  detailUserName: {
    fontFamily: "MuseoMedium",
    fontSize: 12,
    lineHeight: 14,
    paddingBottom: 8,
    color: "#fff"
  }
})
