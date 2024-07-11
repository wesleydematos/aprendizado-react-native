import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ListingDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ListingDetails {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
