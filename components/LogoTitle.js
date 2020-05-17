import React from 'react';
import { View, Text, Image } from 'react-native';

export default (props) => {
  return (
    <View>
      <Text style={{ color: "#fff" }}>EquiTransylvania</Text>
      <Image
        style={{ width: 100, height: 20 }}
        source={require("../assets/equi_logo.png")}
      />
    </View>
  );
};
