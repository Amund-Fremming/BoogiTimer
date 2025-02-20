import { Pressable, Text, View } from "react-native";
import { styles } from "./iterationComponentStyles";

interface IterationComponentProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  label: string;
}

export default function IterationComponent({
  value,
  setValue,
  label,
}: IterationComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.lineWrapper}>
        <View style={styles.numberWrapper}>
          <Text style={styles.text}>{label}</Text>
          <Text style={styles.number}>{value}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable
            onPress={() => setValue(value == 0 ? 0 : value - 1)}
            style={styles.controlButton}
          >
            <Text>down</Text>
          </Pressable>
          <Pressable
            onPress={() => setValue(value + 1)}
            style={styles.controlButton}
          >
            <Text>up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
