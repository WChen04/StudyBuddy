import { View, Text } from "react-native";
import React from "react";
import MyCard from "../constants/images/card";
import items from "../constants/images/items.json";

const shop = () => {
  return (
    <View>
      <MyCard data={items} />
    </View>
  );
};

export default shop;
