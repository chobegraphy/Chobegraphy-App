import { Text, View } from "react-native";

export default function Index() {
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
    </View>
  );
}
