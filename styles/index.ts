import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0F7FA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#00796B",
  },
  subtitulo: {
    fontSize: 16,
    color: "#004D40",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#B2DFDB",
    fontSize: 16,
    color: "#004D40",
    elevation: 3,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00796B",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: "60%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0F2F1",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: "#B2DFDB",
  },
  cardText: {
    fontSize: 16,
    color: "#004D40",
    lineHeight: 24,
    textAlign: "justify",
    width: "90%",
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00796B",
    marginBottom: 10,
  },
});

export default styles;