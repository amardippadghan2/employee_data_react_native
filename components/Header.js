import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => (
  <AppBar
    title="Employee Info"
    subtitle="Entre your information"
    centerTitle={true}
    leading={(props) => (
      <IconButton
        icon={(props) => <Icon name="menu" {...props} />}
        {...props}
      />
    )}
    trailing={(props) => (
      <IconButton
        icon={(props) => <Icon name="dots-vertical" {...props} />}
        {...props}
      />
    )}
  />
);

export default Header;
