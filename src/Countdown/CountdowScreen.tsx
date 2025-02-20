import { View, Text, Alert } from "react-native";
import { Component } from "../shared/Component";
import { useGlobalProvider } from "../shared/GlobalContext";
import { useEffect, useState } from "react";
import { styles } from "./countdownScreenStyles";
import { Colors } from "../shared/Colors";
import { defaultValue, INumericInput } from "../shared/types";
import React from "react";
import Button from "../shared/Button/Button";
import { AudioService } from "./audio/AudioService";

export default function CountdownScreen() {
  const [backgroundColor, setBackgroundColor] = useState<string>(Colors.White);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<INumericInput>(defaultValue);

  const soundService = new AudioService();

  const { setView, rounds, intervalLength, intervalPauseLength } =
    useGlobalProvider();

  useEffect(() => {
    setCountdown(intervalLength);
  }, []);

  const startCountdown = () => {
    setInterval(() => {
      if (roundsFinished()) {
        Alert.alert("Countdown finished");
      }

      if (countdownFinished()) {
        setBackgroundColor(isPause ? Colors.Green : Colors.Red);
        setCountdown(isPause ? intervalLength : intervalPauseLength);
        setIsPause(!isPause);
        updateCountdown();
      }
    }, 1000);
  };

  const updateCountdown = () => {};

  const roundsFinished = () => rounds === 0;

  const playSound = async () => {
    try {
      await soundService.initializeSounds(); // move
      await soundService.playRandomSound();
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
      <View style={styles.clock}>
        {!isPause && (
          <>
            <Text>{countdown.leftMinutes}</Text>
            <Text>{countdown.rightMinutes}</Text>
            <Text>:</Text>
            <Text>{countdown.leftSeconds}</Text>
            <Text>{countdown.rightSeconds}</Text>
          </>
        )}
      </View>
      <View style={styles.absoluteButtons}>
        <Button
          backButton
          inverted
          onPress={() => setView(Component.Iteration)}
        />
        <Button onPress={startCountdown} />
        <Button onPress={playSound} />
      </View>
    </View>
  );
}
