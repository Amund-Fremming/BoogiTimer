import { Audio } from "expo-av";

export class AudioService {
  sounds: Audio.Sound[];

  constructor() {
    this.sounds = [];
    this.sounds;
  }

  async initializeSounds() {
    try {
      var files = [
        "./ronnie1.mp3",
        "./ronnie2.mp3",
        "./ronnie3.mp3",
        "./ronnie4.mp3",
        "./ronnie5.mp3",
      ];

      this.sounds = await Promise.all(
        files.map(async (file) => {
          const { sound } = await Audio.Sound.createAsync({ uri: file });
          return sound;
        })
      );
    } catch (error) {
      console.error("initializeSounds - " + error);
    }
  }

  async playRandomSound() {
    try {
      const index = Math.ceil(Math.random() * this.sounds.length);
      const sound = this.sounds[index];

      await sound.playAsync();
      await sound.unloadAsync();
    } catch (error) {
      console.error("playRandomSound - " + error);
    }
  }
}
