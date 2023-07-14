import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import Menu from "../constants/images/menu";
import {
  Lightbulb,
  ChangeBackGroundColor,
} from "../constants/images/lightbulb";
import Currency from "../constants/images/currency";
import MyTimer from "./timer";
import CoinMaker from "./money";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bar from "./bar";
let STORAGE_KEY = "Will";
export default function Page() {
  const [total_money, setMoney] = useState(0);
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    setStyle(!style);
  };

  useEffect(() => {
    // readData();
    console.log(total_money);
  }, [total_money]);

  incrementMoney = (num) => {
    setMoney(Number(total_money) + Number(num));
  };
  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(total_money));
  //     alert("Saved");
  //   } catch (err) {
  //     alert("Failed to save");
  //   }
  // };
  // const readData = async () => {
  //   try {
  //     const value = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
  //     console.log("Value:");
  //     console.log(value === null);
  //     const savedData = await AsyncStorage.multiGet(["Will"]);
  //     console.log(savedData);

  //     if (value !== null) {
  //       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(total_money));
  //       const savedData = await AsyncStorage.multiGet(["Will"]);
  //       console.log(savedData);
  //       console.log("good");
  //       console.log(total_money);
  //     }
  //   } catch (err) {
  //     // console.log("fail");
  //     // alert("Failed to fetch");
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          {/* <Menu style={styles.menu}></Menu> */}
          <Lightbulb style={styles.light}></Lightbulb>
          <View style={styles.amount}>
            <CoinMaker style={styles.money} money={total_money}></CoinMaker>
            <Currency style={styles.currency}></Currency>
          </View>
        </View>
        <MyTimer
          style={styles.app}
          money={total_money}
          incrementMoney={incrementMoney}
          // saveData={saveData}
        />
        <Bar></Bar>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: "center",
    // backgroundColor: "",
  },
  main: {
    flexDirection: "column",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  menu: {
    paddingLeft: 30,
    height: 30,
    width: 30,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginLeft: 30,
  },
  light: {
    paddingLeft: 30,
    height: 30,
    width: 30,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginLeft: 30,
  },
  money: {
    marginTop: 2,
  },
  amount: {
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  currency: {
    paddingLeft: 25,
    height: 30,
    width: 30,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginRight: 30,
    // backgroundColor: "pink",
  },

  app: {},
});
