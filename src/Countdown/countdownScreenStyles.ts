import { StyleSheet } from "react-native";
import { Colors } from "../shared/Colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Black,
  },

  clock: {
    flexDirection: "row",
  },

  absoluteButtons: {
    flexDirection: "row",
    gap: 10,
    bottom: 50,
    right: 35,
    position: "absolute",
  },
});
