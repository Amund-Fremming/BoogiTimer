import { Audio } from "expo-av";
import { Asset } from "expo-asset";

export class AudioService {
  sounds: Audio.Sound[] = [];

  async initializeSounds() {
    try {
      var files = [
        "../audio/ronnie1.mp3",
        "../audio/ronnie2.mp3",
        "../audio/ronnie3.mp3",
        "../audio/ronnie4.mp3",
        "../audio/ronnie5.mp3",
      ];

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
