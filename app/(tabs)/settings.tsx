import { View, Text } from "react-native";
import React from "react";
import CustomBackground from "@/components/custom-bg";

const Settings = () => {
  return (
    <CustomBackground>
      <View className="flex-1 bg-transparent">
        <Text>Settings</Text>
      </View>
    </CustomBackground>
  );
};

export default Settings;
