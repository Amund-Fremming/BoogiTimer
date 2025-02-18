import { GlobalProvider } from "@/src/shared/GlobalContext";
import Router from "@/src/Router";
import { useEffect, useState } from "react";
import SplashScreen from "@/src/Splash/SplashScreen";

export default function RootLayout() {
  const [displaySplash, setDisplaySplash] = useState<boolean>(true);

  setTimeout(() => {
    setDisplaySplash(false);
  }, 1000);

  if (displaySplash) return <SplashScreen />;

  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}
