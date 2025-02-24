import { Audio } from "expo-av";
import { Asset } from "expo-asset";

export class AudioService {
  files: any[] = [];

  async initializeSounds() {
    try {
      this.files = [
        require("../audio/ronnie2.mp3"),
        require("../audio/ronnie3.mp3"),
        require("../audio/ronnie4.mp3"),
        require("../audio/ronnie5.mp3"),
      ];
    } catch (error) {
      console.error("initializeSounds -", error);
    }
  }

  async playRandomSound() {
    try {
      const index = Math.floor(Math.random() * this.files.length);
      var asset = Asset.fromModule(this.files[index]);
      await asset.downloadAsync();

      const { sound } = await Audio.Sound.createAsync({
        uri: asset.localUri as string,
      });

      if (!sound) {
        console.error("Sound is undefined.");
        return;
      }

      await sound.playAsync();
    } catch (error) {
      console.error("playRandomSound -", error);
    }
  }
}
