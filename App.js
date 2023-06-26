import React from "react";
import { SafeAreaView } from "react-native";
import { View, Button, input, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Form from "./components/Form";
import { Component } from "react/cjs/react.production.min";
import PersonalInfo from "./components/PersonalInfo";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Form />
        <Button
          title="Next"
          onPress={() => {
            this.props.navigation.navigate("Personal");
          }}
        />
      </SafeAreaView>
    );
  }
}

function personal(props) {
  return (
    <View>
      <PersonalInfo />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Personal: {
    screen: personal,
  },
});

export default createAppContainer(AppNavigator);
