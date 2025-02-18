import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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

  incrementButton: {
    flexDirection: "row",
    height: 40,
    width: 40,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  number: {
    fontSize: 20,
  },

  decrementButton: {
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
});
