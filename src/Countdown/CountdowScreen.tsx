import { View, Text, Alert } from "react-native";
import { Component } from "../shared/constants/Component";
import { useGlobalProvider } from "../shared/providers/GlobalContext";
import { useEffect, useState } from "react";
import { styles } from "./countdownScreenStyles";
import { Colors } from "../shared/constants/Colors";
import { IClock, defaultValue } from "../shared/constants/Clock";
import React from "react";
import Button from "../shared/Button/Button";
import { useServiceProvider } from "../shared/providers/ServiceContext";

enum State {
  NotStarted,
  Interval,
  IntervalPause,
  RoundPause,
  Finished,
}

export default function CountdownScreen() {
  const [backgroundColor, setBackgroundColor] = useState<string>(Colors.Black);
  const [state, setState] = useState<State>(State.NotStarted);
  const [countdown, setCountdown] = useState<IClock>(defaultValue);
  const [currentInterval, setCurrentInterval] = useState<number>(0);

  const { audioService } = useServiceProvider();
  const {
    setView,
    rounds,
    intervals,
    intervalLength,
    intervalPauseLength,
    roundPauseLength,
  } = useGlobalProvider();

  useEffect(() => {
    setCountdown(intervalLength);
    setCurrentInterval(intervals);
  }, []);

  const startCountdown = () => {
    const interval = setInterval(() => {
      setState(State.Interval);
      setBackgroundColor(Colors.Green);

      if (handleCountdown()) {
        console.log("Stop signaled");
        clearInterval(interval);
      }
    }, 1000);
  };

  const updateCountdown = () => {
    if (countdown.rightSeconds !== 0) {
      setCountdown((prevState) => ({
        ...prevState,
        rightSeconds: prevState.rightSeconds - 1,
      }));
      return;
    }

    var values = [
      countdown.rightSeconds,
      countdown.leftSeconds,
      countdown.rightMinutes,
      countdown.leftMinutes,
    ];

    let nonZero = 0;
    for (let i = 1; i < 4; i++) {
      if (values[i] !== 0) {
        nonZero = i;
        break;
      }
    }

    values[nonZero] = values[nonZero] - 1;
    for (let i = nonZero - 1; nonZero >= 0; i--) {
      if (isEven(values[i])) {
        values[i] = 9;
        continue;
      }

      values[i] = 6;
    }

    setCountdown({
      leftMinutes: values[3],
      rightMinutes: values[2],
      leftSeconds: values[1],
      rightSeconds: values[0],
    });
  };

  const isEven = (num: number) => num % 2 === 0;

  const handleCountdown = (): boolean => {
    console.log("State after: " + countdown.rightSeconds);

    if (state === State.Interval) {
      setCurrentInterval(currentInterval - 1);
    }

    if (countdownFinished() && state === State.Interval) {
      if (rounds === 0) {
        setBackgroundColor(Colors.Black);
        return true;
      }

      if (currentInterval === 0) {
        setState(State.RoundPause);
        setBackgroundColor("pink");
        setCurrentInterval(intervals);
        setCountdown(roundPauseLength);
        return false;
      }

      setBackgroundColor(Colors.Red);
      setState(State.IntervalPause);
      setCurrentInterval(currentInterval - 1);
      setCountdown(intervalPauseLength);
      return false;
    }

    if (countdownFinished() && state === State.IntervalPause) {
      setBackgroundColor(Colors.Green);
      setState(State.Interval);
      setCountdown(intervalLength);
      return false;
    }

    if (countdownFinished() && state === State.RoundPause) {
      setCurrentInterval(intervals);
      setState(State.Interval);
      setCountdown(intervalLength);
      setBackgroundColor(Colors.Green);
      return false;
    }

    updateCountdown();
    return false;
  };

  const playSound = async () => {
    try {
      await audioService.playRandomSound();
    } catch (error) {
      console.log(error);
    }
  };

  const countdownFinished = () =>
    countdown.leftMinutes === 0 &&
    countdown.rightMinutes === 0 &&
    countdown.leftSeconds === 0 &&
    countdown.rightSeconds === 0;

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <View style={styles.clockWrapper}>
        <Text style={styles.clock}>{countdown.leftMinutes}</Text>
        <Text style={styles.clock}>{countdown.rightMinutes}</Text>
        <Text style={styles.clock}>:</Text>
        <Text style={styles.clock}>{countdown.leftSeconds}</Text>
        <Text style={styles.clock}>{countdown.rightSeconds}</Text>
      </View>
      <View style={styles.absoluteButtons}>
        <Button
          icon="chevron-left"
          large
          inverted
          onPress={() => setView(Component.Iteration)}
        />
        <Button large icon="play" onPress={startCountdown} />
      </View>
    </View>
  );
}
