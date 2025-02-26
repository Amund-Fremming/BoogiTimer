import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";
import { horizontalScale, verticalScale } from "../shared/common/Dimentions";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(20),
    backgroundColor: Colors.Black,
  },

  absoluteButtons: {
    position: "absolute",
    bottom: verticalScale(50),
    right: horizontalScale(10),
  },
});
