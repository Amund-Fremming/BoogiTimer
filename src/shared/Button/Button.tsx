import { Colors } from "@/src/shared/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";
import { styles } from "./buttonStyles";

interface ButtonProps {
  large?: boolean;
  onPress: () => void;
  icon: "chevron-right" | "chevron-left" | "plus" | "minus";
  inverted?: boolean;
}

export default function Button({
  large: big = false,
  onPress,
  icon,
  inverted = false,
}: ButtonProps) {
  const backgroundColor = inverted ? Colors.White : Colors.DarkRed;
  const iconColor = inverted ? Colors.DarkRed : Colors.White;
  const iconSize = big ? 45 : 0;
  const scale = big ? 70 : 38;

  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor,
        width: scale,
        height: scale,
      }}
    >
      <Feather
        size={iconSize}
        color={iconColor}
        name={icon}
        style={styles.icon}
      />
    </Pressable>
  );
}
