import { Text, View } from "react-native";

export default function Index() {
  let x = 1
  console.log("App executed!")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
