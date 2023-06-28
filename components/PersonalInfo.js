import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { text } from "react-native";

const Gender = ["MALE", "FEMALE"];

const marrage = ["MARRIED", "UNMARRIED"];
const Blood = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

class PersonalInfo extends React.Component {
  render(props) {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View>
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
          <TextInput
            style={sty.textbox}
            placeholder="Education"
            maxLength={50}
          />

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
          <View style={sty.select}>
            <Text>Select Your Blood Group</Text>
            <SelectDropdown
              style={sty.select}
              data={Blood}
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
            placeholder="Your Weight in KG"
            maxLength={3}
            keyboardType="numeric"
          />
          <TextInput
            style={sty.textbox}
            placeholder="Your Height in cm"
            maxLength={3}
            keyboardType="numeric"
          />
          <View style={sty.select}>
            <Text>Married/UnMarried</Text>
            <SelectDropdown
              style={sty.select}
              data={marrage}
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
            placeholder="Referance Name "
            maxLength={30}
            value={text}
          />
          <TextInput
            style={sty.textbox}
            placeholder="Referance Mobile Number"
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
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
