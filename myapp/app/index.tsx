import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/partial-react-logo.png")}
        style={styles.header}
      />
      <Text>2020ICT30</Text>
      <Text>Hello world, this is My First ReactNative cross platform app</Text>
    </View>
  );
}
