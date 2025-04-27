import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const MapRoute = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};

export default MapRoute;
