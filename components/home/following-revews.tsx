import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";

const UsersData = {
  result: [
    {
      name: {
        first: "Karaawd1aw3d1wa",
      },
      image: "https://loremflickr.com/640/480?lock=4224076883165184",
      Notification: 5,
    },
    {
      name: {
        first: "Odie",
      },
      image: "https://picsum.photos/seed/FpCrnpBU/640/480",
      Notification: 3,
    },
    {
      name: {
        first: "Ethel",
      },
      image: "https://picsum.photos/seed/13dm65/640/480",
      Notification: 10,
    },
    {
      name: {
        first: "Malcolm",
      },
      image: "https://picsum.photos/seed/yqpVd3t/640/480",
      Notification: 8,
    },
    {
      name: {
        first: "Ruth",
      },
      image: "https://picsum.photos/seed/jCQhZaOEaL/640/480",
      Notification: 5,
    },
    {
      name: {
        first: "Odie",
      },
      image: "https://loremflickr.com/640/480?lock=3769120036225024",
      Notification: 5,
    },
    {
      name: {
        first: "Jed",
      },
      image: "https://picsum.photos/seed/y8u8ennx/640/480",
      Notification: 5,
    },
    {
      name: {
        first: "Donavon",
      },
      image: "https://picsum.photos/seed/4Sjbx/640/480",
      Notification: 5,
    },
    {
      name: {
        first: "Ivory",
      },
      image: "https://picsum.photos/seed/NJoxlsY/640/480",
      Notification: 5,
    },
    {
      name: {
        first: "May",
      },
      image: "https://picsum.photos/seed/g1f34WO/640/480",
      Notification: 5,
    },
  ],
};
const FollowingReviews = () => {
  return (
    <>
      <Text className="text-white text-base font-bold text-center mb-5 px-5">
        Tasted Recently
      </Text>

      <FlatList
        data={UsersData.result}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 12,
        }}
        renderItem={({ item }) => (
          <View className="items-center justify-center gap-2">
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-full"
            />
            <View className="bg-red-500 px-2 rounded-full mt-[-18px]">
              <Text className="text-white text-sm font-bold text-center">
                + {item.Notification}
              </Text>
            </View>
            <Text
              className="text-white text-sm font-bold max-w-20 overflow-hidden"
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.name.first}
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default FollowingReviews;
