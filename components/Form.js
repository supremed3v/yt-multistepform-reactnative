import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

import Extra from "./Extra";
import PersonalDetails from "./PersonalDetails";
import Signup from "./Signup";
export default function Form() {
  const [formData, setFormData] = useState({
    // Signup
    name: "",
    email: "",
    password: "",
    cpassword: "",

    // PersonalDetails
    age: "",
    designation: "",
    company: "",

    // Extras
    hobbies: "",
    activities: "",
  });
  const [screen, setScreen] = useState(0);
  const FormTitle = ["Sign Up", "Personal Details", "Extras"];
  const ScreenDisplay = () => {
    if (screen === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else if (screen === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Extra formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 32 }}>{FormTitle[screen]}</Text>
        <View>{ScreenDisplay()}</View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          disabled={screen === 0}
          onPress={() => {
            setScreen((currScreen) => currScreen - 1);
          }}
        >
          <Text style={styles.button}>Prev</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (screen === FormTitle.length - 1) {
              console.log(formData);
            } else {
              setScreen((currScreen) => currScreen + 1);
            }
          }}
        >
          <Text style={styles.button}>
            {screen === FormTitle.length - 1 ? "Submit" : "Next"}
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    color: "white",
    backgroundColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginLeft: 20,
    textAlign: "center",
  },
});
