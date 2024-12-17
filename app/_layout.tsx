import { Stack } from "expo-router"; 
import { SafeAreaView, StyleSheet } from "react-native"; 

export default function RootLayout() {
  return (
    // Respeita o espaço da barra de status.
    <SafeAreaView style={styles.container}> 
      <Stack
        screenOptions={{
          headerShown: false, // Oculta a barra de cabeçalho padrão
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível da tela
  },
});
