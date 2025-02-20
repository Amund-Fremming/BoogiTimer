import { Colors } from "@/src/shared/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";
import { styles } from "./buttonStyles";

interface ButtonProps {
  onPress: () => void;
  inverted?: boolean;
  backButton?: boolean;
}

export default function Button({
  onPress,
  inverted = false,
  backButton = false,
}: ButtonProps) {
  const backgroundColor = inverted ? Colors.White : Colors.DarkRed;
  const iconColor = inverted ? Colors.DarkRed : Colors.White;
  const icon = backButton ? "chevron-left" : "chevron-right";

  return (
    <Pressable
      onPress={onPress}
      style={{ ...styles.container, backgroundColor }}
    >
      <Feather size={45} color={iconColor} name={icon} />
    </Pressable>
  );
}
