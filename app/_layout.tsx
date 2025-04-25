import { Slot, Stack } from "expo-router";
import "./globals.css";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="users/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
