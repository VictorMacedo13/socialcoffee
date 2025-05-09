import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TabView } from "react-native-tab-view";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import CustomBackground from "@/components/custom-bg";
import PresentationCard from "@/components/profile/presentation-card";
import PostsRoute from "@/components/profile/posts-router";
import MapRoute from "@/components/profile/map-router";
import MoreRoute from "@/components/profile/more-router";

const UserData = {
  result: {
    name: {
      first: "Karaawd1aw3d1wa",
    },
    id: "awdawdwadawd",
    image: "https://loremflickr.com/640/480?lock=4224076883165184",
    info: {
      Score: 153,
      Reviews: 15,
      SavedPoints: 20,
      Following: 10,
      Followers: 5,
    },
  },
};

const initialLayout = { width: Dimensions.get("window").width };

const Profile = ({ id }: { id: string }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(() => {
    const baseRoutes = [
      { key: "posts", title: "Posts" },
      { key: "More", title: "More" },
    ];
    if (id !== UserData.result.id) {
      baseRoutes.splice(1, 0, { key: "Map", title: "Map" });
    }
    return baseRoutes;
  });

  const tabWidth = initialLayout.width / routes.length;
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "posts":
        return <PostsRoute id={id} />;
      case "Map":
        return <MapRoute id={id} />;
      case "More":
        return <MoreRoute id={id} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => {
    return (
      <View style={{ marginTop: 18 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {props.navigationState.routes.map((route: any, i: number) => {
            const isActive = index === i;
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setIndex(i);
                  translateX.value = withTiming(i * tabWidth, {
                    duration: 300,
                  });
                }}
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: 2,
                }}
              >
                <Text
                  style={{
                    color: isActive ? "#fff" : "#b1b1b1",
                    fontSize: 18,
                  }}
                >
                  {route.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            height: 2,
            width: initialLayout.width,
            marginTop: 4,
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={[
              {
                height: "100%",
                width: tabWidth,
                backgroundColor: "#fff",
              },
              animatedStyle,
            ]}
          />
        </View>
      </View>
    );
  };

  return (
    <CustomBackground>
      <View
        style={{ flex: 1, alignItems: "center", padding: 0, marginTop: 56 }}
      >
        <PresentationCard />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={(i) => {
            setIndex(i);
            translateX.value = withTiming(i * tabWidth, { duration: 100 });
          }}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          swipeEnabled
          style={{ flex: 1 }}
        />
      </View>
    </CustomBackground>
  );
};

export default Profile;
