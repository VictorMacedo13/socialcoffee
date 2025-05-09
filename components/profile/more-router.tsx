import { View, Text } from "react-native";
import React from "react";

const MoreRoute = ({ id }: { id: string }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>More</Text>
    </View>
  );
};

export default MoreRoute;
