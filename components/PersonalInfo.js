import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const Gender = ["MALE", "FEMALE"];

class PersonalInfo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={sty.textbox}
          placeholder="Current Address"
          maxLength={50}
        />
        <TextInput
          style={sty.textbox}
          placeholder="Permanet Address"
          maxLength={50}
        />
        <TextInput style={sty.textbox} placeholder="Education" maxLength={50} />

        <View style={sty.select}>
          <Text>Select Your Gender</Text>
          <SelectDropdown
            style={sty.select}
            data={Gender}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <TextInput
          style={sty.textbox}
          placeholder="Blood Group"
          maxLength={2}
        />
        <TextInput
          style={sty.textbox}
          placeholder="Your Weight"
          maxLength={3}
          keyboardType="numeric"
        />
        <TextInput
          style={sty.textbox}
          placeholder="Your Height in cm"
          maxLength={3}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const sty = StyleSheet.create({
  textbox: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    alignSelf: "center",

    paddingLeft: 20,
    marginTop: 40,
    marginVertical: 10,
  },
  select: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
    fontSize: 20,
    backgroundColor: "white",
  },
});
export default PersonalInfo;