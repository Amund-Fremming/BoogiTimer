import { View } from "react-native";
import { styles } from "./iterationScreenStyles";
import { useGlobalProvider } from "../shared/providers/GlobalContext";
import { Component } from "../shared/constants/Component";
import IterationComponent from "./IterationComponent";
import Button from "../shared/Button/Button";

export default function IterationScreen() {
  const { setView, rounds, setRounds, intervals, setIntervals } =
    useGlobalProvider();

  return (
    <View style={styles.container}>
      <IterationComponent label="Rounds" value={rounds} setValue={setRounds} />
      <IterationComponent
        label="Intervals"
        value={intervals}
        setValue={setIntervals}
      />

      <View style={styles.absoluteButtons}>
        <Button
          large
          icon="chevron-right"
          onPress={() => setView(Component.Time)}
        />
      </View>
    </View>
  );
}
