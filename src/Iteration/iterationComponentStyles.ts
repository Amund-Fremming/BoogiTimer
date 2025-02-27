import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../shared/common/Dimentions";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: moderateScale(24),
    color: Colors.DarkRed,
    fontFamily: "Orbitron",
  },

  lineWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonWrapper: {
    flexDirection: "row",
    marginTop: verticalScale(25),
    alignItems: "center",
    height: "100%",
    gap: horizontalScale(6),
  },

  number: {
    color: Colors.White,
    fontSize: moderateScale(45),
    fontFamily: "Orbitron",
  },

  controlButton: {
    flexDirection: "row",
    height: verticalScale(40),
    width: horizontalScale(40),
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    margin: moderateScale(2),
  },
});
