import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "@react-native-material/core";
import { AppRegistry, Text, View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native";

import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      siteName: "",
      designation: "",
      joinDate: "",
      codeNo: "",
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <TextInput
            style={styles.textbox}
            placeholder="Employee Name"
            maxLength={30}
          />
          <TextInput
            style={styles.textbox}
            placeholder="Entre Site Name"
            maxLength={30}
          />
          <TextInput
            style={styles.textbox}
            placeholder="Entre Site Area"
            maxLength={30}
          />
          <TextInput
            style={styles.textbox}
            placeholder="Entre Your Designation "
            maxLength={30}
          />
          <TextInput
            style={styles.textbox}
            placeholder="Entre Join Date (dd-mm-yyyy)"
            keyboardType="numeric"
            maxLength={10}
          />

          <TextInput
            style={styles.textbox}
            placeholder="Entre Employee Code No."
            keyboardType="numeric"
            maxLength={6}
          />

          <Button
            title="Submit"
            style={{ alignSelf: "center", marginTop: 40 }}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textbox: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
    paddingLeft: 20,
    marginTop: 40,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "lightgreen",
    borderRadius: 15,
    marginTop: 25,

    height: 50,
    width: 100,
    alignItems: "center",

    alignSelf: "center",

    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default Form;
