import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    backgroundColor: Colors.Black,
    gap: 10,
  },

  absoluteButton: {
    position: "absolute",
    bottom: 50,
    right: 15,
    gap: 10,
    flexDirection: "row",
  },
});
