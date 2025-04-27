import { View, Text, Image } from "react-native";
import React from "react";

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
const PresentationCard = () => {
  return (
    <View className="flex-row items-center gap-4">
      <Image
        source={{ uri: UserData.result.image }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <View className="flex-row items-center gap-4  ">
            <Text style={{ fontSize: 16, color: "white" }}>
              {UserData.result.name.first}
            </Text>
            <View className="flex-row items-center ">
              <Text
                style={{ color: "#A8B5DB", fontSize: 16 }}
                className="p-0 border-t-2 border-b-2 border-[#A8B5DB] "
              >
                {UserData.result.info.Score}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-2 mt-2">
            <Text style={{ color: "#b1b1b1", fontSize: 14 }}>
              {UserData.result.info.Followers} Followers
            </Text>
            <Text style={{ color: "#b1b1b1", fontSize: 14 }}>
              {UserData.result.info.Following} Following
            </Text>
          </View>
          <View className="flex-row  mt-2 "></View>
        </View>
      </View>
    </View>
  );
};

export default PresentationCard;
