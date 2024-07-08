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
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.bookmarks}>
            <Ionicons name="bookmarks" size={20} color={Colors.white} />
          </View>
          <Text style={styles.itemTxt}>{item.name}</Text>
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 228,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmarks: {
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    top: 185,
    right: 30,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
});
