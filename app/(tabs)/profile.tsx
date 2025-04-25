import { View, Text, Image } from "react-native";
import React from "react";
import CustomBackground from "@/components/custom-bg";
import FollowingReviews from "@/components/home/following-revews";

const UserData = {
  result: {
    name: {
      first: "Karaawd1aw3d1wa",
    },
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

const Profile = () => {
  return (
    <CustomBackground>
      <View className="flex-1 items-center p-4 mt-14">
        <Image
          source={{ uri: UserData.result.image }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text className="text-2xl text-white font-base mt-2">
          {UserData.result.name.first}
        </Text>
      </View>
    </CustomBackground>
  );
};

export default Profile;
