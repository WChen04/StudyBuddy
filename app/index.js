import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import Menu from "../constants/images/menu";
import App from "./timer";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Menu style={styles.menu}></Menu>
        <App style={styles.app}></App>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 4,
    // alignItems: "center",
    paddingLeft: 25,
    paddingTop: 70,
  },
  main: {
    // flex: 4,
    // justifyContent: "flex-start",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  menu: {
    height: 50,
    width: 50,
    color: "black",
    // paddingTop: 250,
  },
  app: {},
});
