import { View } from "react-native";
import { Component } from "../shared/constants/Component";
import { useGlobalProvider } from "../shared/providers/GlobalContext";
import { styles } from "./timeScreenStyles";
import TimeComponent from "./TimeComponent";
import { useState } from "react";
import Button from "../shared/Button/Button";

enum Active {
  None,
  RoundPause,
  Interval,
  IntervalPause,
}

export default function TimeScreen() {
  const {
    setView,
    setIntervalLength,
    setIntervalPauseLength,
    setRoundPauseLength,
  } = useGlobalProvider();
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
      <TimeComponent
        label="Round pause"
        setValue={setRoundPauseLength}
        active={active === Active.RoundPause}
        setActive={() => handleSetActive(Active.RoundPause)}
      />
      <TimeComponent
        label="Interval length"
        setValue={setIntervalLength}
        active={active === Active.Interval}
        setActive={() => handleSetActive(Active.Interval)}
      />
      <TimeComponent
        label="Interval pause"
        setValue={setIntervalPauseLength}
        active={active === Active.IntervalPause}
        setActive={() => handleSetActive(Active.IntervalPause)}
      />
      <View style={styles.absoluteButton}>
        <Button
          large
          icon="chevron-left"
          inverted
          onPress={() => setView(Component.Iteration)}
        />
        <Button
          large
          icon="chevron-right"
          onPress={() => setView(Component.Countdown)}
        />
      </View>
    </View>
  );
}
