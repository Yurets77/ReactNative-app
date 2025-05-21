import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => (
            <IconSymbol name="home-sharp" size={28} color={color} library="ion" />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          title: 'Услуги',
          tabBarIcon: ({ color }) => (
            <IconSymbol name="construct-outline" size={28} color={color} library="ion" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color }) => (
            <IconSymbol name="settings-outline" size={28} color={color} library="ion" />
          ),
        }}
      />
    </Tabs>
  );
}
