import { View } from "react-native";
import { Component } from "../shared/Component";
import { useGlobalProvider } from "../shared/GlobalContext";
import { styles } from "./timeScreenStyles";
import NumericInput from "./TimeComponent";
import { useState } from "react";
import Button from "../shared/Button/Button";

enum Active {
  None,
  Rounds,
  Intervals,
}

export default function TimeScreen() {
  const { setView, setIntervalLength, setIntervalPauseLength } =
    useGlobalProvider();
  const [active, setActive] = useState<Active>(Active.None);

  const handleSetActive = (value: Active) => {
    if (active === value) {
      setActive(Active.None);
      return;
    }

    setActive(value);
  };

  return (
    <View style={styles.container}>
      <NumericInput
        setValue={setIntervalLength}
        active={active === Active.Rounds}
        setActive={() => handleSetActive(Active.Rounds)}
      />
      <NumericInput
        setValue={setIntervalPauseLength}
        active={active === Active.Intervals}
        setActive={() => handleSetActive(Active.Intervals)}
      />

      <View style={styles.absoluteButton}>
        <Button
          backButton
          inverted
          onPress={() => setView(Component.Iteration)}
        />
        <Button onPress={() => setView(Component.Countdown)} />
      </View>
    </View>
  );
}
