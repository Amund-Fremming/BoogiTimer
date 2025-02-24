import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: Colors.Black,
  },

  absoluteButtons: {
    position: "absolute",
    bottom: 50,
    right: 10,
  },
});
