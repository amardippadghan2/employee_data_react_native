import React from "react";
import { SafeAreaView } from "react-native";
import { View, Button, input, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Form from "./components/Form";
import { Component } from "react/cjs/react.production.min";
import PersonalInfo from "./components/PersonalInfo";
import Header from "./components/Header";
import DocumentInfo from "./components/DocumentInfo";
import FamilyDetail from "./components/FamilyDetail";

import { ScrollView } from "react-native";

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
    <ScrollView>
      <View>
        <PersonalInfo />
      </View>
      <View>
        <Button
          title="Next"
          onPress={() => {
            props.navigation.navigate("Document");
          }}
        />
      </View>
    </ScrollView>
  );
}

function Document(props) {
  return (
    <ScrollView>
      <View>
        <DocumentInfo />
      </View>
      <View>
        <Button
          title="Next"
          onPress={() => {
            props.navigation.navigate("Family");
          }}
        />
      </View>
    </ScrollView>
  );
}
function Family(props) {
  return (
    <View>
      <FamilyDetail />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
  Personal: {
    screen: personal,
    navigationOptions: {
      title: "personal information",
    },
  },

  Document: {
    screen: Document,
    navigationOptions: {
      title: "Entre Your Document Detail",
    },
  },
  Family: {
    screen: Family,
    navigationOptions: {
      title: "Entre Your Family Detail",
    },
  },
});

export default createAppContainer(AppNavigator);
