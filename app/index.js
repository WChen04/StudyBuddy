import { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import Menu from "../constants/images/menu";
import MyTimer from "./timer";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <Menu style={styles.menu}></Menu>
        <MyTimer style={styles.app} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: "center",
  },
  main: {
    flexDirection: "column",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  menu: {
    paddingLeft: 25,
    height: 50,
    width: 50,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginLeft: 10,
  },
  app: {},
});
