import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      data={plants}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
