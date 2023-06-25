import React from "react";
import { SafeAreaView } from "react-native";
import { View, Button, input, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ fontSize: 50 }}>this is home screen</Text>

        <Button
          title="profile page"
          onPress={() => {
            this.props.navigation.navigate("myProfile");
          }}
        />
      </SafeAreaView>
    );
  }
}

function profile(props) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 50 }}>This is profile page</Text>
      <Button
        title="home page"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <Button
        title="about page"
        onPress={() => {
          props.navigation.navigate("About");
        }}
      />
    </View>
  );
}

function about(props) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 50 }}>About Page</Text>

      <Button
        title="home page"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },

  myProfile: {
    screen: profile,
  },
  About: {
    screen: about,
  },
});

export default createAppContainer(AppNavigator);
