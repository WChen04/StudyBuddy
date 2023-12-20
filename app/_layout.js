import { Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, headerShown: true }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home-outline" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="Timer"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="clockcircleo" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          tabBarIcon: () => {
            return <Feather name="shopping-cart" size={24} color="blue" />;
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="settings-outline" size={24} color="blue" />;
          },
        }}
      />
    </Tabs>
  );
};
