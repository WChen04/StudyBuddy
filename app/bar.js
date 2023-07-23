import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Timer</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate()}></Button>
    </View>
  );
}
function ShopScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to Shop"
        onPress={() => navigation.navigate("Shop")}
      ></Button>
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      ></Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Bar() {
  return (
    <Tab.Navigator
      initialRouteName="Timer"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Timer" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
