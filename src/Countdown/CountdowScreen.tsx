import { View, Text } from "react-native";
import { Component } from "../shared/constants/Component";
import { useGlobalProvider } from "../shared/providers/GlobalContext";
import { useEffect, useRef, useState } from "react";
import { styles } from "./countdownScreenStyles";
import { Colors } from "../shared/constants/Colors";
import { IClock } from "../shared/constants/Clock";
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
  const [currentRound, setCurrentRound] = useState<number>(rounds);
  const [activeCountdown, setActiveCountdown] = useState<boolean>(false);

  const countdownRef = useRef<IClock>(countdown);
  const stateRef = useRef<State>(state);
  const currentIntervalRef = useRef<number>(currentInterval);
  const currentRoundsRef = useRef<number>(currentRound);

  const { audioService } = useServiceProvider();

  useEffect(() => {
    countdownRef.current = countdown;
    stateRef.current = state;
    currentIntervalRef.current = currentInterval;
    currentRoundsRef.current = currentRound;
  }, [countdown, state, currentInterval, currentRound]);

  const startCountdown = () => {
    setActiveCountdown(true);
    setState(State.Interval);
    setBackgroundColor(Colors.Green);

    const interval = setInterval(async () => {
      updateCountdown();
      if (await handleCountdown()) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const updateCountdown = (): IClock => {
    let values = [
      countdownRef.current.leftMinutes,
      countdownRef.current.rightMinutes,
      countdownRef.current.leftSeconds,
      countdownRef.current.rightSeconds,
    ];

    var finished = values.filter((v) => v == 0).length == 4;
    if (finished) {
      return { ...countdownRef.current, rightSeconds: -1 };
    }

    let i = 3;
    let stop = false;
    while (!stop && i > -1) {
      if (values[i] != 0) {
        values[i] = values[i] - 1;
        stop = true;
        break;
      }

      if (values[i] == 0 && isEven(i)) {
        values[i] = 5;
      }

      if (values[i] == 0 && !isEven(i)) {
        values[i] = 9;
      }
      i--;
    }

    const newState = {
      leftMinutes: values[0],
      rightMinutes: values[1],
      leftSeconds: values[2],
      rightSeconds: values[3],
    };

    setCountdown(newState);
    return newState;
  };

  const isEven = (num: number) => num % 2 === 0;

  const handleCountdown = async (): Promise<boolean> => {
    const countdownValue = updateCountdown();

    if (!countdownFinished(countdownValue)) {
      return false;
    }

    await audioService.playRandomSound();

    switch (stateRef.current) {
      case State.Interval:
        if (
          currentIntervalRef.current === 1 &&
          currentRoundsRef.current === 1
        ) {
          handleCountdownFinished();
          setActiveCountdown(false);
          return true;
        }
        if (currentIntervalRef.current === 1) {
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
    setState(State.Interval);
    setBackgroundColor(Colors.Green);
    setCountdown(intervalLength);

    setCurrentRound((prevState) => prevState - 1);
  };

  const handleIntervalPauseFinished = () => {
    setState(State.Interval);
    setBackgroundColor(Colors.Green);
    setCountdown(intervalLength);
  };

  const handleIntervalRoundFinished = () => {
    setState(State.IntervalPause);
    setBackgroundColor(Colors.DarkRed);
    setCountdown(intervalPauseLength);

    setCurrentInterval((prevState) => prevState - 1);
  };

  const handleIntervalsFinished = () => {
    setState(State.RoundPause);
    setBackgroundColor(Colors.Gray);
    setCountdown(roundPauseLength);

    setCurrentInterval(intervals);
  };

  const handleCountdownFinished = () => {
    setState(State.Finished);
    setBackgroundColor(Colors.Black);

    setCountdown(intervalLength);
    setCurrentRound(rounds);
    setCurrentInterval(intervals);
  };

  const countdownFinished = (countdown: IClock) =>
    countdown.leftMinutes == 0 &&
    countdown.rightMinutes == 0 &&
    countdown.leftSeconds == 0 &&
    countdown.rightSeconds == -1;

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <View style={styles.clockWrapper}>
        <Text style={styles.clock}>{countdown.leftMinutes}</Text>
        <Text style={styles.clock}>{countdown.rightMinutes}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.clock}>{countdown.leftSeconds}</Text>
        <Text style={styles.clock}>{countdown.rightSeconds}</Text>
      </View>
      <View style={styles.absoluteButtons}>
        <Button
          icon="chevron-left"
          large
          inverted
          onPress={() => setView(Component.Time)}
        />
        {!activeCountdown && (
          <Button
            large
            icon="chevron-right"
            onPress={activeCountdown ? () => {} : startCountdown}
          />
        )}
      </View>
    </View>
  );
}
