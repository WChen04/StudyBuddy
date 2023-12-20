import * as React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { TextInput } from "react-native-gesture-handler";
import { time_convert } from "../helperfunctions/time_convert";
import Currency from "../constants/images/currency";
import Moneytext from "../constants/images/money";

export default function MyTimer(props) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [Hour, setHour] = React.useState("");
  const [Minute, setMinute] = React.useState("");
  const [Seconds, setSeconds] = React.useState("");
  const [total_money, setMoney] = React.useState(0);

  // addMoney = (num) => {
  //   setMoney(Number(total_money) + Number(num));
  // };
  //Implement the adding money section to this

  function reset() {
    window.location.reload(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Currency style={styles.currency}></Currency>
      <Moneytext style={styles.money} money={total_money}></Moneytext>

      <View style={styles.container2}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={Hour * 3600 + Minute * 60 + Seconds * 1}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[20, 10, 5, 0]}
          onComplete={() => {
            console.log("test");
            Alert.alert("Done!");
            props.addMoney(Seconds);
            //props.saveData(Seconds);
          }}
          updateInterval={0}
          isSmoothColorTransition={true}
        >
          {({ remainingTime, color }) => (
            <Text
              style={{ color, fontSize: 20 }}
              onPress={() => setIsPlaying((prev) => !prev)}
              suppressHighlighting={true}
            >
              {time_convert({ remainingTime })}
            </Text>
          )}
        </CountdownCircleTimer>
        <Text style={{ fontSize: 25, paddingTop: 20 }}>Enter a Time:</Text>
        <View style={styles.enterstyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setHour}
            value={Hour}
            placeholder="0"
            placeholderTextColor={"lightgray"}
            keyboardType="numeric"
            returnKeyType={"done"}
          />
          <Text>Hours</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setMinute}
            value={Minute}
            placeholder="0"
            placeholderTextColor={"lightgray"}
            keyboardType="numeric"
            returnKeyType={"done"}
          />
          <Text>Minutes</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setSeconds}
            value={Seconds}
            placeholder="0"
            placeholderTextColor={"lightgray"}
            keyboardType="numeric"
            returnKeyType={"done"}
          />
          <Text>Seconds</Text>
        </View>
        <View style={styles.Buttons}>
          <Button
            color="green"
            backgroundColor="red"
            onPress={() => setIsPlaying((prev) => !prev)}
            title="Start"
          ></Button>
          <Button onPress={reset} title="Reset"></Button>
        </View>
        <Text style={styles.spaceholder}></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    // alignItems: "right",
    backgroundColor: "white",
    paddingTop: 10,
  },
  container2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  spaceholder: {
    paddingTop: 170,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 30,
  },
  enterstyle: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "violet",
  },
  textInputStyle: {
    flexDirection: "row",
    color: "lightgrey",
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  currency: {
    // paddingLeft: 25,
    height: 35,
    width: 35,
    color: "black",
    justifyContent: "right",
    // alignItems: "center",
    marginBottom: 60,
    marginRight: 30,
    // backgroundColor: "pink",
  },
});
