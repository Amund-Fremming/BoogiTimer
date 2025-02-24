import { View, Text, Pressable } from "react-native";
import { styles } from "./timeComponentStyles";
import { useEffect, useState } from "react";
import { IClock } from "../shared/constants/Clock";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../shared/constants/Colors";

interface TimeComponentProps {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<IClock>>;
  active: boolean;
  setActive: () => void;
}

interface IPair {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeComponent({
  label,
  setValue,
  active,
  setActive,
}: TimeComponentProps) {
  const [leftMinutes, setLeftMinutes] = useState<number>(0);
  const [rightMinutes, setRightMinutes] = useState<number>(0);
  const [leftSeconds, setLeftSeconds] = useState<number>(0);
  const [rightSeconds, setRightSeconds] = useState<number>(2);

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
    <View style={styles.outerContainer}>
      <Text style={styles.label}>{label}</Text>
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
                    color={Colors.White}
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
                    color={Colors.White}
                  />
                </Pressable>
              )}
            </View>
            {index == 1 && <Text style={styles.colon}>:</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}
