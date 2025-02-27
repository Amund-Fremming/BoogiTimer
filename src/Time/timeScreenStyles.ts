import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";
import { horizontalScale, verticalScale } from "../shared/common/Dimentions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: horizontalScale(30),
    backgroundColor: Colors.Black,
    gap: verticalScale(10),
  },

  absoluteButton: {
    position: "absolute",
    bottom: verticalScale(50),
    right: horizontalScale(15),
    gap: horizontalScale(10),
    flexDirection: "row",
  },
});
