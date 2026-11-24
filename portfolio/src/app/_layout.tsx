import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants/theme';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,

        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          height: 72,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="school-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="briefcase-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="code-slash-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="jogo"
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="game-controller-outline"
              size={22}
              color={color as string}
            />
          ),
        }}
      />
    </Tabs>
  );
}