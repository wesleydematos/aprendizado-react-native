import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: IPlace[];
  category: string;
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
  price: number;
}

export default function Listings({ listings, category }: Props) {
  const [loading, setLoading] = useState(false);
  const [filteredListings, setFilteredListings] = useState<IPlace[]>([]);

  useEffect(() => {
    setLoading(true);
    const filteredData =
      category === "All"
        ? listings
        : listings.filter((item) => item.category === category);

    setTimeout(() => {
      setFilteredListings(filteredData);
      setLoading(false);
    }, 200);
  }, [category, listings]);

  const renderItems: ListRenderItem<IPlace> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmarks}>
              <Ionicons name="bookmarks" size={20} color={Colors.white} />
            </View>
            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : filteredListings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
      {loading && <Text>Loading...</Text>}
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
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
