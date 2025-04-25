import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { images } from "@/constants/images";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={{
        backgroundColor: "#0f0d23",
        flexDirection: "row",
        marginHorizontal: 20,
        position: "absolute",
        borderWidth: 1,
        borderColor: "#0f0d23",
        bottom: 26,
        borderCurve: "continuous",
        borderRadius: 25,
        shadowOpacity: 0,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const iconName = options.tabBarIcon() || "home";

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isFocused ? "#fff" : "transparent",
              borderRadius: 25,
            }}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {!isFocused ? (
              <View>
                <Icon name={iconName} size={20} color="#A8B5DB" />
              </View>
            ) : (
              <ImageBackground
                source={images.highlight}
                className="flex flex-1 w-full flex-row min-h-16  rounded-full min-w-[100px] items-center justify-center  overflow-hidden"
              >
                <Icon name={iconName} size={20} color="#151312" />
                <Text className=" text-secondary text-base font-semibold ml-2">
                  {label}
                </Text>
              </ImageBackground>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
