import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

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
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  clock: {
    width: 55,
    fontFamily: "Orbitron",
    color: Colors.White,
    flexDirection: "row",
    fontSize: 70,
  },

  colon: {
    width: 20,
    fontFamily: "Orbitron",
    color: Colors.White,
    flexDirection: "row",
    fontSize: 70,
  },

  absoluteButtons: {
    flexDirection: "row",
    gap: 10,
    bottom: 50,
    right: 15,
    position: "absolute",
  },
});
