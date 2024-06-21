import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoryButtons() {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal>
        {destinationCategories.map((item) => (
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={Colors.black}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
});
