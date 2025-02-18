import { View, Text, Pressable } from "react-native";
import { styles } from "./timeComponentStyles";
import { useEffect, useState } from "react";
import { INumericInput } from "../shared/types";

interface TimeComponentProps {
  setValue: React.Dispatch<React.SetStateAction<INumericInput>>;
}

interface IPair {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeComponent({ setValue }: TimeComponentProps) {
  const [leftMinutes, setLeftMinutes] = useState<number>(0);
  const [rightMinutes, setRightMinutes] = useState<number>(0);
  const [leftSeconds, setLeftSeconds] = useState<number>(0);
  const [rightSeconds, setRightSeconds] = useState<number>(0);

  useEffect(() => {
    setValue({ leftMinutes, rightMinutes, leftSeconds, rightSeconds });
  }, [leftMinutes, rightMinutes, leftSeconds, rightSeconds]);

  const values: IPair[] = [
    {
      value: leftMinutes,
      setValue: setLeftMinutes,
    },
    {
      value: rightMinutes,
      setValue: setRightMinutes,
    },
    {
      value: leftSeconds,
      setValue: setLeftSeconds,
    },
    {
      value: rightSeconds,
      setValue: setRightSeconds,
    },
  ];

  return (
    <View style={styles.container}>
      {values.map(({ value, setValue }, index) => (
        <View key={index} style={styles.inputContainer}>
          <View style={styles.numberWrapper}>
            <Pressable
              onPress={() => setValue(value + 1)}
              style={styles.incrementButton}
            >
              <Text>Up</Text>
            </Pressable>
            <Text style={styles.number}>{value}</Text>
            <Pressable
              onPress={() => setValue(value - 1)}
              style={styles.decrementButton}
            >
              <Text>Down</Text>
            </Pressable>
          </View>
          {index == 1 && <Text style={styles.colon}>:</Text>}
        </View>
      ))}
    </View>
  );
}
