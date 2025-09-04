import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cabecalho: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#38B6FF",
    flex: 1,
  },

  ImagemLogo: {
    height: 130,
    width: 160,
  },

  subtitulo: {
    fontSize: 20,
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
    fontFamily: "Montserrat",
    justifyContent: "center",
  },
  pesquisa: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 350,
    height: 30,
  },

  avatarIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#38B6FF",
  },

  perfilmodal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
    padding: 20,
  },

  modal: {
    width: "80%",
    backgroundColor: "#38B6FF",
    borderRadius: 15,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  titulomodal: {
    fontSize: 25,
    fontFamily: "KollektifBold",
    color: "#fff",
    marginBottom: 10,
  },

  titulomodal1: {
    fontSize: 20,
    fontFamily: "Kollektif",
    color: "#fff",
    marginTop: 20,
  },

  imagemavatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  textomodal: {
    fontSize: 20,
    fontFamily: "Kollektif",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },

  botal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  avatarmodal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38B6FF",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  hoveredText: {
    color: "#edf2fb", // Mudando a cor do texto quando o hover ocorre
    fontFamily: "Montserrat",
  },
});
