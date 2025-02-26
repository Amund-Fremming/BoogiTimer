import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../shared/common/Dimentions";

export const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "column",
  },

  container: {
    flexDirection: "row",
    backgroundColor: Colors.Black,
  },

  icon: {
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  numberWrapper: {
    width: horizontalScale(60),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  number: {
    color: Colors.White,
    fontSize: moderateScale(50),
    marginHorizontal: 8,
    fontFamily: "Orbitron",
  },

  controlButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    paddingTop: verticalScale(10),
    marginLeft: horizontalScale(10),
    fontFamily: "Orbitron",
    color: Colors.DarkRed,
    fontSize: moderateScale(20),
  },

  colon: {
    fontSize: moderateScale(40),
    color: Colors.White,
    marginHorizontal: horizontalScale(5),
  },

  buttonContainer: {
    flexDirection: "row",
    gap: horizontalScale(20),
    position: "absolute",
    top: verticalScale(50),
    alignItems: "center",
  },
});
