import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function PersonalDetails({ formData, setFormData }) {
  // hobbies: "",
  // activities: "",
  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Enter your favorite hobby"
          value={formData.hobbies}
          onChangeText={(hobbies) => {
            setFormData({ ...formData, hobbies });
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Enter your activity"
          value={formData.activities}
          onChangeText={(activities) => {
            setFormData({ ...formData, activities });
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#ffc0cb",
    borderRadius: 15,
    width: 170,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});
