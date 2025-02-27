import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../shared/common/Dimentions";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Black,
  },

  clockWrapper: {
    flexDirection: "row",
    gap: horizontalScale(10),
    justifyContent: "center",
    alignItems: "center",
  },

  clock: {
    width: horizontalScale(55),
    fontFamily: "Orbitron",
    color: Colors.White,
    flexDirection: "row",
    fontSize: moderateScale(70),
  },

  colon: {
    width: horizontalScale(20),
    fontFamily: "Orbitron",
    color: Colors.White,
    flexDirection: "row",
    fontSize: moderateScale(70),
  },

  absoluteButtons: {
    flexDirection: "row",
    gap: horizontalScale(10),
    bottom: verticalScale(50),
    right: verticalScale(15),
    position: "absolute",
  },
});
