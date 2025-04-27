import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { images } from "@/constants/images";
import CustomBackground from "@/components/custom-bg";

import React from "react";

import Posts from "@/components/home/posts";
import FollowingReviews from "@/components/home/following-revews";
import { useScrollToTop } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Index() {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const body = (
    <View className="">
      <View className="items-center justify-center mt-5 mb-5 mx-auto">
        <Image source={images.logo} style={{ width: 40, height: 50 }} />
      </View>

      <View className="flex-row items-center bg-[#040015]  border rounded-full h-12  mb-5  mx-5 w-auto  border-[#A8B5DB]">
        <Icon className="px-2 pl-4" name="search" size={20} color="#999" />
        <TextInput
          className="flex-1 text-white group-[test]:"
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>

      <View className="flex-col pb-10 items-start w-full ">
        <FollowingReviews />
      </View>
    </View>
  );
  return (
    <CustomBackground>
      <View>
        <Posts html={body} ref={ref} />
      </View>
    </CustomBackground>
  );
}
