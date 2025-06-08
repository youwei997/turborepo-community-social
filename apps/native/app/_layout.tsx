import { CONVEX_URL } from '@env';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';
const convex = new ConvexReactClient(CONVEX_URL as string);

const AppLayout = () => {
  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }} />
    </ConvexProvider>
  );
};

export default AppLayout;
