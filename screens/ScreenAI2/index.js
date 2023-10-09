import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Holistic Health and Fitness</Text>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3" // Replace this URL with the URL of the AI generated soldier's silhouette

    }} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7d8c83",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "monospace"
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default LoginScreen;