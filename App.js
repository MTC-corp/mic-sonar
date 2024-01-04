import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Key paypal
const KeyPaypal = "c4b977c0-9ec5-4ca3-a2af-cf1d32683016";

export default function App() {
  useEffect(() => {
    console.log(KeyPaypal);
  }, []);

  const onPress = () => {
    // DO something
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
