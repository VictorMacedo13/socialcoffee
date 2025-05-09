import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const PostCard = ({ item }: { item: any }) => {
  return (
    <>
      <View className="w-full flex-col  bg-black rounded-lg pb-5">
        <View className="flex-row justify-between items-center p-2">
          <View className="flex-row items-center gap-2">
            <Image
              source={{ uri: item.user.picture }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-white text-sm font-bold">
              {item.user.name}
            </Text>
          </View>
          <Icon name="ellipsis-horizontal" color="white" size={20} />
        </View>
        <ImageBackground
          source={{ uri: item.image }}
          className="w-full h-96 flex-col justify-end"
          resizeMode="cover"
        >
          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0.8)",
              "rgba(0,0,0,1)",
            ]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 192, // equivalente ao h-48
            }}
            pointerEvents="none"
          />
          <View className="w-full flex-row  justify-between px-5">
            <View className="flex-col flex-1 ">
              <Text className="text-white " numberOfLines={1}>
                {item.tittle}
              </Text>
              <Text className="text-white" numberOfLines={1}>
                {item.local}
              </Text>
            </View>
            <View className="flex-row items-center gap-2 pl-5">
              <Text className="text-white">Read More</Text>
              <Icon name="chevron-forward-outline" color="white" size={20} />
            </View>
          </View>
          <View className="w-full flex-row h-10 px-5 justify-between">
            <View className="flex-row items-end justify-start gap-1 h-full">
              {Array.from({ length: parseInt(item.stars) }).map((_, index) => (
                <Icon key={index} name="star" color="#FFD700" size={14} />
              ))}
            </View>
            <View className="flex-row items-end h-full gap-5">
              <View className="flex-row items-center gap-1">
                <Icon name="location-sharp" color="white" size={20} />
                <Text className="text-white">{item.saves}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Icon name="chatbubble-sharp" color="white" size={20} />
                <Text className="text-white">{item.comments}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Icon name="thumbs-up-sharp" color="white" size={20} />
                <Text className="text-white">{item.likes}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default PostCard;
