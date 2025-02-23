import { View, Text, Alert } from "react-native";
import { Component } from "../shared/constants/Component";
import { useGlobalProvider } from "../shared/providers/GlobalContext";
import { useEffect, useRef, useState } from "react";
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
  const {
    setView,
    rounds,
    intervals,
    intervalLength,
    intervalPauseLength,
    roundPauseLength,
  } = useGlobalProvider();

  const [backgroundColor, setBackgroundColor] = useState<string>(Colors.Black);
  const [state, setState] = useState<State>(State.NotStarted);
  const [countdown, setCountdown] = useState<IClock>(intervalLength);
  const [currentInterval, setCurrentInterval] = useState<number>(intervals);

  const countdownRef = useRef<IClock>(defaultValue);
  const { audioService } = useServiceProvider();

  useEffect(() => {
    countdownRef.current = countdown;
  }, [countdown]);

  useEffect(() => {
    console.log(
      countdown.leftMinutes +
        "" +
        countdown.rightMinutes +
        ":" +
        countdown.leftSeconds +
        "" +
        countdown.rightSeconds
    );
  }, [countdown]);

  const startCountdown = () => {
    console.log("startCountdown");
    setState(State.Interval);
    setBackgroundColor(Colors.Green);
    const interval = setInterval(() => {
      if (handleCountdown()) {
        console.log("Stop signaled");
        clearInterval(interval);
      }
    }, 1000);
  };

  const updateCountdown = (): IClock => {
    console.log("Update countdown");
    let values = [
      countdownRef.current.leftMinutes,
      countdownRef.current.rightMinutes,
      countdownRef.current.leftSeconds,
      countdownRef.current.rightSeconds,
    ];

    let i = 3;
    let stop = false;
    while (!stop && i > -1) {
      console.log("Value " + values[i]);

      if (values[i] != 0) {
        values[i] = values[i] - 1;
        stop = true;
      }

      if (values[i] == 0 && isEven(i)) {
        values[i] = 5;
      }

      if (values[i] == 0 && !isEven(i)) {
        values[i] = 9;
      }
      i--;
    }

    console.log("updateCountdown finished");

    const newState = {
      leftMinutes: values[0],
      rightMinutes: values[1],
      leftSeconds: values[2],
      rightSeconds: values[3],
    };

    /*console.log(
      updatedState.leftMinutes +
        "" +
        updatedState.rightMinutes +
        ":" +
        updatedState.leftSeconds +
        "" +
        updatedState.rightSeconds
    );*/

    setCountdown((prevState) => ({ ...prevState, ...newState }));
    return newState;
  };

  const isEven = (num: number) => num % 2 === 0;

  const handleCountdown = (): boolean => {
    console.log("handleCountdown");

    const countdownValue = updateCountdown();
    const isCountdownFinished = countdownFinished(countdownValue);

    if (isCountdownFinished) {
      return false;
    }

    switch (state) {
      case State.Interval:
        if (currentInterval === 0 && rounds === 0) {
          handleCountdownFinished();
          return true;
        }
        if (currentInterval === 0) {
          handleIntervalsFinished();
          break;
        }

        handleIntervalRoundFinished();
        break;
      case State.IntervalPause:
        handleIntervalPauseFinished();
        break;
      case State.RoundPause:
        handleRoundPauseFinished();
        break;
    }

    return false;
  };

  const handleRoundPauseFinished = () => {
    console.log("handleRoundpauseFinished");

    setState(State.Interval);
    setBackgroundColor(Colors.Green);
    setCountdown(intervalLength);
  };

  const handleIntervalPauseFinished = () => {
    console.log("handleIntervalPauseFinished");

    setState(State.Interval);
    setBackgroundColor(Colors.Green);
    setCountdown(intervalLength);
  };

  const handleIntervalRoundFinished = () => {
    console.log("handleIntervalRoundFinished");

    setState(State.IntervalPause);
    setBackgroundColor(Colors.DarkRed);
    setCountdown(intervalPauseLength);

    setCurrentInterval((prevState) => prevState - 1);
  };

  const handleIntervalsFinished = () => {
    console.log("handleIntervalsFinished");

    setState(State.RoundPause);
    setBackgroundColor(Colors.Gray);
    setCountdown(roundPauseLength);

    setCurrentInterval(intervals);
  };

  const handleCountdownFinished = () => {
    console.log("handleCountdownFinished");

    setState(State.Finished);
    setBackgroundColor(Colors.Black);
    setCountdown(defaultValue);
  };

  const playSound = async () => {
    try {
      await audioService.playRandomSound();
    } catch (error) {
      console.log(error);
    }
  };

  const countdownFinished = (countdown: IClock) =>
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
