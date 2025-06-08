// app/_layout.tsx
import { CONVEX_URL } from '@env';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';

const convex = new ConvexReactClient(CONVEX_URL as string);

export default function AppLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* 根页面（可选，显示在 Tabs 之外） */}
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        {/* Tabs 导航作为子路由 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ConvexProvider>
  );
}
