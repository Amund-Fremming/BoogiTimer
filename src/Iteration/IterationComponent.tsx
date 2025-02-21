import { Text, View } from "react-native";
import { styles } from "./iterationComponentStyles";
import Button from "../shared/Button/Button";

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
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.number}>{value}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            inverted
            icon="minus"
            onPress={() => setValue(value == 0 ? 0 : value - 1)}
          />
          <Button icon="plus" onPress={() => setValue(value + 1)} />
        </View>
      </View>
    </View>
  );
}
