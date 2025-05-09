import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CustomBackground from "@/components/custom-bg";
import MapView, {
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import PostCard from "@/components/post-card";
import Icon from "react-native-vector-icons/Ionicons";

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
      region: {
        latitude: -3.71722,
        longitude: -38.54306,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -12.9714,
        longitude: -38.5014,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -19.8157,
        longitude: -43.9542,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -25.4284,
        longitude: -49.2733,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -5.79448,
        longitude: -35.211,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -2.582,
        longitude: -44.2967,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -22.9068,
        longitude: -43.1729,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -13.0,
        longitude: -38.5,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -7.319,
        longitude: -40.213,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
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
      region: {
        latitude: -3.716,
        longitude: -40.713,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
  ],
};

const Map = ({ id }: { id: string }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [activefilter, setActiveFilter] = useState("My Reviews");

  const handleMarkerPress = (post: any) => {
    setSelectedPost(post); // Definir o post selecionado
    setModalVisible(true); // Mostrar o modal
  };

  return (
    <CustomBackground>
      <View className="absolute top-16 mx-5 left-0 right-0 h-14 bg-white z-10 flex-row items-center  rounded-full ">
        <View>
          <Icon className="px-2 pl-4" name="search" size={20} color="#999" />
        </View>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={{
            fontSize: 16,
            color: "#000",
            height: "100%",
          }}
        />
      </View>
      <FlatList
        data={["My Reviews", "Following", "Saved", "Most Saved"]}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          right: 0,
          zIndex: 10,
          paddingHorizontal: 20,
          height: 50,
        }}
        contentContainerStyle={{
          gap: 8,
          alignItems: "center",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveFilter(item);
            }}
          >
            <View
              className={`items-center ${
                activefilter === item ? "bg-[#454D74] " : "bg-white "
              }p-2 justify-center rounded-full px-4`}
            >
              <Text className={`${activefilter === item && "text-white "}`}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={postsData.result[postsData.result.length - 1].region} // Região inicial do mapa
        showsUserLocation
        style={{ height: "100%", width: "100%" }}
        showsMyLocationButton
      >
        {postsData.result.map((item) => (
          <Marker
            key={item.id}
            coordinate={item.region}
            onPress={() => handleMarkerPress(item)}
          >
            <View style={{ position: "absolute", alignItems: "center" }}>
              <View
                style={{
                  width: Platform.OS === "android" ? 30 : 60,
                  height: Platform.OS === "android" ? 30 : 60,
                  borderRadius: 30,
                  backgroundColor: "#ef4444",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  borderWidth: 0,
                  borderColor: "#fff",
                  zIndex: 1,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
              </View>

              <View
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "#ef4444",
                  transform: [{ rotate: "45deg" }],
                  marginTop: -9,
                }}
              />
            </View>
          </Marker>
        ))}
      </MapView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <SafeAreaView
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* A View abaixo envolve o conteúdo do Modal */}
            <Pressable
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                maxWidth: 400,
                width: "90%",
              }}
              onPress={(e) => e.stopPropagation()} // Evita que o clique dentro do conteúdo feche o modal
            >
              {/* Seu componente de conteúdo do modal */}
              {selectedPost && <PostCard item={selectedPost} />}
            </Pressable>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </CustomBackground>
  );
};

export default Map;
