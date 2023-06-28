import React from "react";
import { ScrollView, TextInput, View, StyleSheet } from "react-native";

class FamilyDetail extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Father Name "
            maxLength={30}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Mother Name "
            maxLength={30}
          />
          <TextInput
            style={st.textbox}
            placeholder="Entre Your Wife/Husband Name "
            maxLength={30}
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

export default FamilyDetail;
