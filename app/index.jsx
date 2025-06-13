import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [first, setfirst] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-[#efebeb]"
    >
      <Text className="text-5xl font-righteous">Chobegraphy</Text>
      <Text className="text-3xl font-spaceGrotesk">Photography</Text>
      <Text className="text-5xl font-banglaHeading">ছবিগ্রাফি</Text>
      <Text className="text-3xl font-banglaSubHeading">ফটোগ্রাফি </Text>
      <Feather
        onPress={() => {
          setfirst(!first);
        }}
        name="home"
        size={34}
        color={first ? "red" : "green"}
      />
    </View>
  );
}
