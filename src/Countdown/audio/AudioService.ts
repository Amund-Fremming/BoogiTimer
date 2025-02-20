import { Audio } from "expo-av";
import { Asset } from "expo-asset";

export class AudioService {
  sounds: Audio.Sound[] = [];

  async initializeSounds() {
    try {
      const files = [require("./ronnie1.mp3"), require("./ronnie2.mp3")];

      console.log("Loading files:", files);

      this.sounds = await Promise.all(
        files.map(async (file) => {
          const asset = Asset.fromModule(file);
          await asset.downloadAsync();

          const { sound } = await Audio.Sound.createAsync({
            uri: asset.localUri!,
          });
          return sound;
        })
      );

      console.log("Sounds loaded:", this.sounds);
    } catch (error) {
      console.error("initializeSounds -", error);
    }
  }

  async playRandomSound() {
    try {
      const index = Math.floor(Math.random() * this.sounds.length);
      const sound = this.sounds[index];

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
