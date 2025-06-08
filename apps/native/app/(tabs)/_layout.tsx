import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingBottom: Platform.OS === 'ios' ? 30 : 0,
        },
        tabBarLabelStyle: {
          // 这个地方是 Tabs.Screen 下的a标签 justify-content: flex-start; 导致，不知道怎么改先这样
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index/index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trends/index"
        options={{
          title: '动态',
          tabBarIcon: ({ color }) => <TabBarIcon name="bolt" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="msg/index"
        options={{
          title: '消息',
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="my/index"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
