import React from "react";
import { ScrollView, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class DocumentInfo extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            style={st.textbox}
            placeholder="Birth Date As Per Aadhar Card (DD-MM-YYYY)"
            keyboardType="numeric"
            maxLength={10}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Aadhar Number"
            keyboardType="numeric"
            maxLength={12}
            isRequired={true}
          />

          <TextInput
            style={st.textbox}
            placeholder="Entre Pan Number"
            maxLength={10}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your UAN Number"
            keyboardType="numeric"
            maxLength={12}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your ESI Number"
            keyboardType="numeric"
            maxLength={12}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Bank Name"
            maxLength={20}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Account Number"
            keyboardType="numeric"
            maxLength={15}
            isRequired={true}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Back IFSC Code"
            maxLength={15}
            isRequired={true}
          />
        </View>
      </ScrollView>
    );
  }
}

const st = StyleSheet.create({
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
});

export default DocumentInfo;
