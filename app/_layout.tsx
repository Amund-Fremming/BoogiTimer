import Router from "@/src/Router";
import { useState } from "react";
import SplashScreen from "@/src/Splash/SplashScreen";
import { GlobalProvider } from "@/src/shared/providers/GlobalContext";
import { ServiceProvider } from "@/src/shared/providers/ServiceContext";

export default function RootLayout() {
  const [displaySplash, setDisplaySplash] = useState<boolean>(true);

  setTimeout(() => {
    setDisplaySplash(false);
  }, 1000);

  if (displaySplash) return <SplashScreen />;

  return (
    <GlobalProvider>
      <ServiceProvider>
        <Router />
      </ServiceProvider>
    </GlobalProvider>
  );
}
