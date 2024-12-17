import { geradorDeViagem } from "@/services/generator";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, ActivityIndicator } from "react-native";
import { MotiView } from "moti";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "@/styles";

export default function Index() {
   // Estados para gerenciar a entrada, resposta e carregamento
  const [viagem, setViagem] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função que chama o gerador de viagem (API com IA)
  const callViagem = async () => {
    if (viagem.length < 5) {
      alert("Desculpe, a descrição precisa ter mais de 5 caracteres");
      return;
    }

    setIsLoading(true); // Inicia o carregamento
    setResposta(""); // Limpa a resposta anterior

    try {
      const result = await geradorDeViagem(viagem);
      setResposta(result); // Define a resposta retornada pela API
      setViagem(""); // Limpa o input após o sucesso da busca
    } catch (error) {
      alert(error); // Alerta para caso ocorra algum erro
    } finally {
      setIsLoading(false); // Finaliza o carregamento para dar o retorno
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Cabeçalho informativo */}
        <View style={styles.header}>
          <Ionicons name="airplane" size={48} color="#00796B" style={styles.icon} />
          <Text style={styles.titulo}>Bora Viajar</Text>
        </View>
        <Text style={styles.subtitulo}>Explore sugestões de experiências incríveis na sua viagem</Text>

        {/* Input para informar descrição */}
        <TextInput
          onChangeText={setViagem}
          value={viagem}
          placeholder="Descreva sua viagem (destino, clima, orçamento)..."
          placeholderTextColor="#80CBC4"
          style={styles.input}
        />

        {/* Botão de busca */}
        <TouchableOpacity style={styles.button} onPress={callViagem} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#E0F2F1" />
          ) : (
            <Text style={styles.buttonText}>Explorar Roteiro</Text>
          )}
        </TouchableOpacity>

        {/* Resultado */}
        {resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 500 }}
          >
            <Text style={styles.cardTitle}>Seu roteiro está pronto:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )}
      </View>
    </ScrollView>
  );
}
