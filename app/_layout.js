import { Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, headerShown: true }}>
      <Tabs.Screen
        name="timer"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="clockcircleo" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          tabBarIcon: () => {
            return <Feather name="shopping-cart" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="settings-outline" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home-outline" size={24} color="blue" />;
          },
        }}
      />
    </Tabs>
  );
};
