import Router from "@/src/Router";
import { useState } from "react";
import SplashScreen from "@/src/Splash/SplashScreen";
import { GlobalProvider } from "@/src/shared/providers/GlobalContext";
import { ServiceProvider } from "@/src/shared/providers/ServiceContext";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [displaySplash, setDisplaySplash] = useState<boolean>(true);
  const [loaded] = useFonts({
    Orbitron: require("../src/shared/fonts/Orbitron-ExtraBold.ttf"),
  });

  setTimeout(() => {
    setDisplaySplash(false);
  }, 300);

  if (displaySplash) return <SplashScreen />;

  if (loaded)
    return (
      <GlobalProvider>
        <ServiceProvider>
          <Router />
        </ServiceProvider>
      </GlobalProvider>
    );
}
