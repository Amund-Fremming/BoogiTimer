import { StyleSheet } from "react-native";
import { moderateScale } from "../common/Dimentions";

export const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(425),
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontWeight: "bold",
  },
});
