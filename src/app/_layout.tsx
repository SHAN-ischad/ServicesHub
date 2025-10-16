import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

// mainUser ServicesHubMain@
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Bold": require('../../assets/fonts/JetBrainsMono-Bold.ttf'),
    "GoogleSansCode-Regular": require('../../assets/fonts/GoogleSansCode-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
