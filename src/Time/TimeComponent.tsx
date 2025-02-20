import { View, Text, Pressable } from "react-native";
import { styles } from "./timeComponentStyles";
import { useEffect, useState } from "react";
import { INumericInput } from "../shared/types";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../shared/Colors";

interface TimeComponentProps {
  setValue: React.Dispatch<React.SetStateAction<INumericInput>>;
  active: boolean;
  setActive: () => void;
}

interface IPair {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeComponent({
  setValue,
  active,
  setActive,
}: TimeComponentProps) {
  const [leftMinutes, setLeftMinutes] = useState<number>(0);
  const [rightMinutes, setRightMinutes] = useState<number>(0);
  const [leftSeconds, setLeftSeconds] = useState<number>(0);
  const [rightSeconds, setRightSeconds] = useState<number>(0);

  useEffect(() => {
    setValue({ leftMinutes, rightMinutes, leftSeconds, rightSeconds });
  }, [leftMinutes, rightMinutes, leftSeconds, rightSeconds]);

  const getIncrement = (index: number, value: number) => {
    const isOdd = index % 2 !== 0;
    if ((isOdd && value == 9) || (!isOdd && value == 6)) {
      return value;
    }

    return value + 1;
  };

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
            {active && (
              <Pressable
                onPress={() => setValue(getIncrement(index, value))}
                style={styles.controlButton}
              >
                <Feather
                  style={styles.icon}
                  name="chevron-up"
                  size={35}
                  color={Colors.Gray}
                />
              </Pressable>
            )}
            <Text onPress={setActive} style={styles.number}>
              {value}
            </Text>
            {active && (
              <Pressable
                onPress={() => setValue(value == 0 ? 0 : value - 1)}
                style={styles.controlButton}
              >
                <Feather
                  style={styles.icon}
                  name="chevron-down"
                  size={35}
                  color={Colors.Gray}
                />
              </Pressable>
            )}
          </View>
          {index == 1 && <Text style={styles.colon}>:</Text>}
        </View>
      ))}
    </View>
  );
}
