import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CoinMaker(props) {
  return <Text style={styles.money}>{props.money}</Text>;
}

const styles = StyleSheet.create({
  money: {
    fontSize: 30,
    marginRight: 20,
  },
});
