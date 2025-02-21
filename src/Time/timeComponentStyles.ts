import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  number: {
    color: Colors.White,
    fontSize: 40,
    marginHorizontal: 8,
  },

  controlButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    color: Colors.DarkRed,
    fontSize: 20,
  },

  colon: {
    fontSize: 40,
    color: Colors.White,
    marginHorizontal: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
