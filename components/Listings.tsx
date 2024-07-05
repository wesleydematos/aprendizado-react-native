import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = {
  listings: IPlace[];
};

export interface IPlace {
  id: string;
  category: string;
  description: string;
  duration: number;
  image: string;
  location: string;
  name: string;
  rating: number;
}

export default function Listings({ listings }: Props) {
  const renderItems: ListRenderItem<IPlace> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 200, height: 200 }}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
