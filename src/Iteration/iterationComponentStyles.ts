import { StyleSheet } from "react-native";
import { Colors } from "../shared/Colors";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "80%",
    backgroundColor: Colors.White,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  numberWrapper: {
    //
  },

  text: {
    fontSize: 18,
    color: Colors.Gray,
  },

  lineWrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonWrapper: {
    flexDirection: "row",
  },

  number: {
    fontSize: 20,
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
