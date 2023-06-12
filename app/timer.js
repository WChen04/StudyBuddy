import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 0 })}
        updateInterval={1}
      >
        {({ remainingTime, color }) => (
          <Text
            style={{ color, fontSize: 50 }}
            onPress={() => setIsPlaying((prev) => !prev)}
            suppressHighlighting={true}
          >
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
    // padding: 10,
  },
});
