import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import * as Font from "expo-font";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Font.loadAsync({
      Aloja: require("./app/assets/fonts/Aloja-Light.otf"),
      BungeeInline: require("./app/assets/fonts/BungeeInline-Regular.ttf"),
      StyleScript: require("./app/assets/fonts/StyleScript-Regular.ttf"),
      PaletteMosaic: require("./app/assets/fonts/PaletteMosaic-Regular.ttf"),
    });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>TicTacToe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //notch-related problem.
    transform: [{ rotate: "-20deg" }],
  },
  title: {
    fontSize: 66,
    fontFamily: "StyleScript",
  },
});

export default App;
