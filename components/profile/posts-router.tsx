import { View, Text } from "react-native";
import React from "react";
import Posts from "../home/posts";

const PostsRoute = ({ id }: { id: string }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Posts id={id} />
    </View>
  );
};

export default PostsRoute;
