import { View, Text, Image } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "@/constants/images";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "expo-router";

// enum AnimationDirection {
//   LEFT = "LEFT",
//   RiGHT = "RIGHT",
// }

const CustomBackground = ({
  children,
}: // direction,
{
  children: ReactNode;
  // direction: AnimationDirection;
}) => {
  // const translateX = useSharedValue(100); // Valor inicial da animação (fora da tela)

  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Resetando a animação toda vez que a tela ganha o foco
  //     translateX.value = withTiming(0, {
  //       duration: 400,
  //       easing: Easing.out(Easing.exp),
  //     });

  //     // Retorno da função limpa a animação caso a tela perca o foco
  //     return () => {
  //       translateX.value = 1000; // Reseta para o valor inicial quando a tela sai de foco
  //     };
  //   }, [])
  // );

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateX: translateX.value }],
  // }));
  return (
    <View className="flex-1 bg-[#040015]">
      <LinearGradient
        colors={["rgba(129,117,246,0.2)", "rgba(0,0,0,0.2)"]}
        locations={[0, 0.3]} // 0% e 30%
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      >
        <Image
          source={images.logo}
          className="absolute z-0 opacity-10  top-[-280] left-[-80]"
          style={{
            width: 340,
            height: 480,
          }}
        />
        {/* <Animated.View style={[{ flex: 1 }, animatedStyle]}> */}
        {children}
        {/* </Animated.View> */}
      </LinearGradient>
    </View>
  );
};

export default CustomBackground;
