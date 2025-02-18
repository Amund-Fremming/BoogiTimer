import { View, Button } from "react-native";
import { Component } from "../shared/Component";
import { useGlobalProvider } from "../shared/GlobalContext";
import { styles } from "./timeInputScreenStyles";
import NumericInput from "./TimeComponent";

export default function TimeScreen() {
  const { setView, setIntervalLength, setIntervalPauseLength } =
    useGlobalProvider();

  return (
    <View style={styles.container}>
      <NumericInput setValue={setIntervalLength} />
      <NumericInput setValue={setIntervalPauseLength} />
      <Button title="Back" onPress={() => setView(Component.Iteration)} />
      <Button title="Next" onPress={() => setView(Component.Countdown)} />
    </View>
  );
}
