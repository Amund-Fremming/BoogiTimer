import { Button, Text, View } from "react-native";
import { styles } from "./iterationScreenStyles";
import { useGlobalProvider } from "../shared/GlobalContext";
import { Component } from "../shared/Component";

export default function IterationScreen() {
  const { setView } = useGlobalProvider();

  return (
    <View style={styles.container}>
      <Text>Iteration Screen</Text>
      <Button onPress={() => setView(Component.Time)} title="Next" />
    </View>
  );
}
