import { StyleSheet } from "react-native";
import { Colors } from "../shared/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.Black,
  },

  icon: {
    //
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
    fontSize: 40,
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

  colon: {
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
