import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import PostCard from "../post-card";

const postsData = {
  result: [
    {
      id: "680a98d2be16af7fcb8578c5",
      user: {
        name: "Vida.Okuneva2",
        picture: "https://loremflickr.com/640/480?lock=3196736394756096",
      },
      tittle: "Elegant Soft Car nome muito grande pra quebrar tudo",
      local: "Aufderhar and Sons",
      image: "https://picsum.photos/seed/K6hSEHfRvj/640/480",
      stars: "2",
      Description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      likes: "5921",
      saves: "5780",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c6",
      user: {
        name: "Ramiro.Wehner73",
        picture: "https://picsum.photos/seed/B2INZA/640/480",
      },
      tittle: "Rustic Plastic Ball",
      local: "MacGyver - Lueilwitz",
      image: "https://picsum.photos/seed/fcUVLHI6LB/640/480",
      stars: "5",
      Description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      likes: "7822",
      saves: "3682",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c7",
      user: {
        name: "Declan.Fritsch11",
        picture: "https://picsum.photos/seed/fFy4d/640/480",
      },
      tittle: "Generic Soft Chair",
      local: "Reichert - Turner",
      image: "https://loremflickr.com/640/480?lock=7638907051048960",
      stars: "4",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "6781",
      saves: "4549",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c8",
      user: {
        name: "Chasity_Kling52",
        picture: "https://picsum.photos/seed/RoNSxXj/640/480",
      },
      tittle: "Unbranded Wooden Shirt",
      local: "Gibson Group",
      image: "https://picsum.photos/seed/AaqyLFYj1/640/480",
      stars: "3",
      Description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      likes: "8173",
      saves: "9684",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c9",
      user: {
        name: "Joanny_Skiles13",
        picture: "https://picsum.photos/seed/wyqyKVOL/640/480",
      },
      tittle: "Luxurious Soft Chicken",
      local: "Larkin - Tillman",
      image: "https://loremflickr.com/640/480?lock=602009027739648",
      stars: "5",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "7489",
      saves: "6999",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578ca",
      user: {
        name: "Rosemarie_Barrows2",
        picture: "https://loremflickr.com/640/480?lock=3545555961643008",
      },
      tittle: "Refined Plastic Table",
      local: "Shanahan - Braun",
      image: "https://loremflickr.com/640/480?lock=889647695659008",
      stars: "2",
      Description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      likes: "223",
      saves: "217",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cb",
      user: {
        name: "Kiara87",
        picture: "https://loremflickr.com/640/480?lock=2000711055310848",
      },
      tittle: "Elegant Fresh Shoes",
      local: "Ledner and Sons",
      image: "https://picsum.photos/seed/Fm0znXCT/640/480",
      stars: "5",
      Description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      likes: "7656",
      saves: "1353",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cc",
      user: {
        name: "Wilton_Bahringer90",
        picture: "https://loremflickr.com/640/480?lock=1115311279439872",
      },
      tittle: "Practical Metal Sausages",
      local: "Heidenreich Group",
      image: "https://picsum.photos/seed/ZBwOLZFX/640/480",
      stars: "4",
      Description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      likes: "811",
      saves: "1396",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cd",
      user: {
        name: "Emie93",
        picture: "https://loremflickr.com/640/480?lock=8186087237222400",
      },
      tittle: "Luxurious Steel Pants",
      local: "Roob Inc",
      image: "https://loremflickr.com/640/480?lock=2400230257459200",
      stars: "5",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "2205",
      saves: "1266",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578ce",
      user: {
        name: "Minerva.Friesen-Willms",
        picture: "https://picsum.photos/seed/yvp7jg/640/480",
      },
      tittle: "Small Steel Ball",
      local: "Mante - Haag",
      image: "https://loremflickr.com/640/480?lock=1715945345122304",
      stars: "2",
      Description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      likes: "8589",
      saves: "6818",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c5",
      user: {
        name: "Vida.Okuneva2",
        picture: "https://loremflickr.com/640/480?lock=3196736394756096",
      },
      tittle: "Elegant Soft Car nome muito grande pra quebrar tudo",
      local: "Aufderhar and Sons",
      image: "https://picsum.photos/seed/K6hSEHfRvj/640/480",
      stars: "2",
      Description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      likes: "5921",
      saves: "5780",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c6",
      user: {
        name: "Ramiro.Wehner73",
        picture: "https://picsum.photos/seed/B2INZA/640/480",
      },
      tittle: "Rustic Plastic Ball",
      local: "MacGyver - Lueilwitz",
      image: "https://picsum.photos/seed/fcUVLHI6LB/640/480",
      stars: "5",
      Description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      likes: "7822",
      saves: "3682",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c7",
      user: {
        name: "Declan.Fritsch11",
        picture: "https://picsum.photos/seed/fFy4d/640/480",
      },
      tittle: "Generic Soft Chair",
      local: "Reichert - Turner",
      image: "https://loremflickr.com/640/480?lock=7638907051048960",
      stars: "4",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "6781",
      saves: "4549",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c8",
      user: {
        name: "Chasity_Kling52",
        picture: "https://picsum.photos/seed/RoNSxXj/640/480",
      },
      tittle: "Unbranded Wooden Shirt",
      local: "Gibson Group",
      image: "https://picsum.photos/seed/AaqyLFYj1/640/480",
      stars: "3",
      Description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      likes: "8173",
      saves: "9684",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578c9",
      user: {
        name: "Joanny_Skiles13",
        picture: "https://picsum.photos/seed/wyqyKVOL/640/480",
      },
      tittle: "Luxurious Soft Chicken",
      local: "Larkin - Tillman",
      image: "https://loremflickr.com/640/480?lock=602009027739648",
      stars: "5",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "7489",
      saves: "6999",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578ca",
      user: {
        name: "Rosemarie_Barrows2",
        picture: "https://loremflickr.com/640/480?lock=3545555961643008",
      },
      tittle: "Refined Plastic Table",
      local: "Shanahan - Braun",
      image: "https://loremflickr.com/640/480?lock=889647695659008",
      stars: "2",
      Description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      likes: "223",
      saves: "217",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cb",
      user: {
        name: "Kiara87",
        picture: "https://loremflickr.com/640/480?lock=2000711055310848",
      },
      tittle: "Elegant Fresh Shoes",
      local: "Ledner and Sons",
      image: "https://picsum.photos/seed/Fm0znXCT/640/480",
      stars: "5",
      Description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      likes: "7656",
      saves: "1353",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cc",
      user: {
        name: "Wilton_Bahringer90",
        picture: "https://loremflickr.com/640/480?lock=1115311279439872",
      },
      tittle: "Practical Metal Sausages",
      local: "Heidenreich Group",
      image: "https://picsum.photos/seed/ZBwOLZFX/640/480",
      stars: "4",
      Description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      likes: "811",
      saves: "1396",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578cd",
      user: {
        name: "Emie93",
        picture: "https://loremflickr.com/640/480?lock=8186087237222400",
      },
      tittle: "Luxurious Steel Pants",
      local: "Roob Inc",
      image: "https://loremflickr.com/640/480?lock=2400230257459200",
      stars: "5",
      Description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      likes: "2205",
      saves: "1266",
      comments: "50",
    },
    {
      id: "680a98d2be16af7fcb8578ce",
      user: {
        name: "Minerva.Friesen-Willms",
        picture: "https://picsum.photos/seed/yvp7jg/640/480",
      },
      tittle: "Small Steel Ball",
      local: "Mante - Haag",
      image: "https://loremflickr.com/640/480?lock=1715945345122304",
      stars: "2",
      Description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      likes: "8589",
      saves: "6818",
      comments: "50",
    },
  ],
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Posts = React.forwardRef(
  (
    { html, id }: { html?: React.ReactNode; id?: string },
    ref?: React.Ref<FlatList<any>>
  ) => {
    const [allPosts, setAllPosts] = React.useState(postsData.result);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loadingMore, setLoadingMore] = React.useState(false);

    const loadMorePosts = async () => {
      if (loadingMore || allPosts.length > 50) return;
      setLoadingMore(true);

      await sleep(1000);

      setAllPosts((prev) => [...prev, ...postsData.result]);

      setLoadingMore(false);
    };

    const onRefresh = async () => {
      setRefreshing(true);
      await sleep(1000);
      setAllPosts(postsData.result); // reseta
      setRefreshing(false);
    };

    return (
      <View className="w-full ">
        <FlatList
          ref={ref}
          data={allPosts}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={5}
          ListHeaderComponent={<>{html}</>}
          ListFooterComponent={
            <>
              {loadingMore ? (
                <View className="w-full flex-col p-5 mt-2 h-[calc(50vh)] items-center justify-center">
                  <ActivityIndicator size="large" color="#fff" />
                </View>
              ) : (
                <View className="w-full flex-col p-5 mt-2 h-[calc(50vh)] items-center">
                  <Text className="text-white text-2xl font-semibold opacity-60">
                    The End
                  </Text>
                  <View className="w-full h-12 bg-[#040015] rounded-full mb-5 mt-2" />
                </View>
              )}
            </>
          }
          renderItem={({ item, index }) => <PostCard item={item} />}
        />
      </View>
    );
  }
);

export default Posts;
