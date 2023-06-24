import * as React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  useState,
  Alert,
  Keyboard,
  NativeModules,
} from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { TextInput } from "react-native-gesture-handler";

const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const UpdatedTime =
    hours == 0
      ? minutes == 0
        ? seconds == 0
          ? `${seconds}`
          : `${seconds}`
        : seconds < 10
        ? `${minutes}:0${seconds}`
        : `${minutes}:${seconds}`
      : minutes < 10
      ? seconds < 10
        ? `${hours}:0${minutes}:0${seconds}`
        : `${hours}:0${minutes}:${seconds}`
      : `${hours}:${minutes}:${seconds}`;

  return UpdatedTime;
};

export default function MyTimer() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [number1, onChangeNumber1] = React.useState("");
  const [number2, onChangeNumber2] = React.useState("");
  const [number3, onChangeNumber3] = React.useState("");
  function reset() {
    window.location.reload(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={number1 * 3600 + number2 * 60 + number3 * 1}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[20, 10, 5, 0]}
        onComplete={() => Alert.alert("Done!")}
        updateInterval={0}
        isSmoothColorTransition={true}
      >
        {({ remainingTime, color }) => (
          <Text
            style={{ color, fontSize: 20 }}
            onPress={() => setIsPlaying((prev) => !prev)}
            suppressHighlighting={true}
          >
            {children({ remainingTime })}
          </Text>
        )}
      </CountdownCircleTimer>
      <Text style={{ fontSize: 25, paddingTop: 20 }}>Enter a Time:</Text>
      <View style={styles.enterstyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="0"
          placeholderTextColor={"lightgray"}
          keyboardType="numeric"
          returnKeyType={"done"}
        />
        <Text>Hours</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="0"
          placeholderTextColor={"lightgray"}
          keyboardType="numeric"
          returnKeyType={"done"}
        />
        <Text>Minutes</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={onChangeNumber3}
          value={number3}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
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
});
