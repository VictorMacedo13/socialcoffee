import { View, Text } from "react-native";
import React from "react";
import Posts from "../home/posts";

const PostsRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Posts html={false} />
    </View>
  );
};

export default PostsRoute;
