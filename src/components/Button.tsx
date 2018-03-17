import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  backgroundColor: string;
}

export default class Button extends Component<Props, {}> {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.button, { backgroundColor: this.props.backgroundColor }]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 2,
    width: 150,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 28 }
});
