import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import React from "react";

type Props = {
  listings: IPlace[];
};

interface IPlace {
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
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={listings} renderItem={renderItems} />
    </View>
  );
}

const styles = StyleSheet.create({});
