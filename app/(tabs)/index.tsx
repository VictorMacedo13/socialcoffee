import { Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constants/images";
import CustomBackground from "@/components/custom-bg";

import React from "react";

import Posts from "@/components/home/posts";
import FollowingReviews from "@/components/home/following-revews";
import { useScrollToTop } from "@react-navigation/native";

export default function Index() {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const body = (
    <View className="">
      <View className="items-center justify-center mt-5 mb-5 mx-auto">
        <Image source={images.logo} style={{ width: 40, height: 50 }} />
      </View>

      <View className="w-auto h-12 bg-[#040015] rounded-full mb-5 mx-5" />

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
