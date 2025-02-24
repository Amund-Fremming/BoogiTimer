import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  numberWrapper: {
    //
  },

  label: {
    fontSize: 24,
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
    marginTop: 25,
    alignItems: "center",
    height: "100%",
    gap: 6,
  },

  number: {
    color: Colors.White,
    fontSize: 45,
    fontFamily: "Orbitron",
  },

  controlButton: {
    flexDirection: "row",
    height: 40,
    width: 40,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
});
