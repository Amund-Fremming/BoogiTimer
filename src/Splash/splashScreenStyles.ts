import { StyleSheet } from "react-native";
import { Colors } from "../shared/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Black,
  },
});

export const imageStyles = StyleSheet.create({
  image: {
    minHeight: "40%",
  },
});
