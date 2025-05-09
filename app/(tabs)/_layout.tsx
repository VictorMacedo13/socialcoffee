import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/tabbar";
import {
  Button,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { images } from "@/constants/images";
import Icon from "react-native-vector-icons/Ionicons";

const _layout = () => {
  return (
    <>
      <TouchableOpacity className="absolute bottom-28 right-5 z-50 w-16 h-16 bg-[#26263b] border-white  rounded-full">
        <ImageBackground
          // source={images.highlight}
          className="w-full h-full rounded-full overflow-hidden justify-center items-center"
          resizeMode="cover"
        >
          <Icon
            name="add"
            color="white"
            size={30}
            // style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </ImageBackground>
      </TouchableOpacity>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => "home",
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: () => "person",
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: "Map",
            headerShown: false,
            tabBarIcon: () => "map",
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: () => "settings-sharp",
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
