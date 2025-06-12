import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { useEffect } from "react";
import "../global.css";
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Righteous: require("../assets/fonts/Righteous-Regular.ttf"),
    SpaceGrotesk: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    BanglaHeading: require("../assets/fonts/BanglaHeading.ttf"),
    BanglaSubHeading: require("../assets/fonts/BanglaSubHeading.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Stack />;
}
