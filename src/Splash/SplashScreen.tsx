import { Image, View } from "react-native";
import { imageStyles, styles } from "./splashScreenStyles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={imageStyles.image}
        source={require("../shared/images/bog.png")}
      />
    </View>
  );
}
