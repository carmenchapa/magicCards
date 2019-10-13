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
    alignItems: "center",
    marginHorizontal: HORIZONTAL_PADDING,
    height: 120,
    paddingTop: hp("5%"),
    backgroundColor: "white"
  },
  header: {
    height: NAVBAR_HEIGHT,
    paddingTop: STATUS_BAR_HEIGHT
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    borderColor: "gray",
    borderWidth: 0,
    backgroundColor: "#eceff1",
    borderRadius: 8,
    width: wp("80%"),
    paddingHorizontal: 15
  },
  //-----** FlatList **-----//
  cardShadow: {
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
  card: {
    // justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 14,
    margin: 10,
    marginTop: 15,
    padding: 15,
    width: wp("80%"),
    height: wp("25%")
  },

  title: {
    fontFamily: "MuseoMedium",
    fontSize: 14,
    lineHeight: 15,
    marginBottom: 5
  },
  infoText: {
    fontFamily: "MuseoLight",
    fontSize: 10,
    lineHeight: 9
  },
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
  //-----** Detail **-----//
  magicImage: {
    width: wp("80%"),
    minHeight: wp("116%"),
    borderRadius: 28,
    alignSelf: "center"
  },
  modalView: {
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
})
