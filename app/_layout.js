import { Stack, Tabs } from "expo-router";
import { Clock } from "../constants/images/clock";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="timer"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="clockcircleo" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          tabBarIcon: () => {
            return <Feather name="shopping-cart" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="settings-outline" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home-outline" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
};
