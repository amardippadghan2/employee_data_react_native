import React from "react";
import { SafeAreaView } from "react-native";
import { View, Button, input, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";

import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";

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
      <View>
        <TextInput
          style={styles.textbox}
          placeholder="Employee Name"
          maxLength={30}
        />
        <TextInput style={styles.textbox} placeholder="Entre Site Name" />
        <TextInput style={styles.textbox} placeholder="Entre Site Area " />
        <TextInput
          style={styles.textbox}
          placeholder="Entre Your Designation "
        />
        <TextInput
          style={styles.textbox}
          placeholder="Entre Join Date (dd-mm-yyyy)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.textbox}
          placeholder="Entre Employee Code No."
        />
        <Button title="Next" />
      </View>
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
});

export default Personal;
