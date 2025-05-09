import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <BlurView
      intensity={70}
      tint="dark"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 26,
        borderWidth: 1,
        borderColor: "#0f0d23",
        flexDirection: "row",
        backgroundColor: "rgba(38,38,59,0.6 )", // fallback para Android
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

        const iconName = options.tabBarIcon() || "?";

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
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: isFocused ? "transparent" : "transparent",
              // borderRadius: 25,
            }}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {!isFocused ? (
              <View className="flex flex-1 w-full flex-col min-h-16  rounded-full min-w-[100px] items-center justify-center overflow-hidden">
                <Icon name={iconName} size={20} color="#A8B5DB" />
                <Text className=" text-[#A8B5DB] text-sm font-semibold ">
                  {label}
                </Text>
              </View>
            ) : (
              <View
                // source={images.highlight}
                className="flex flex-1 w-full flex-col min-h-16  rounded-full min-w-[100px] items-center justify-center overflow-hidden"
              >
                <Icon name={iconName} size={20} color="white" />
                <Text className=" text-white text-sm font-semibold ">
                  {label}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
};

export default TabBar;
