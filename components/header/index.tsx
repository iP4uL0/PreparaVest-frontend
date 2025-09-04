import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  type ImageSourcePropType,
} from "react-native";
import { style } from "./style";
import {
  useNavigation,
  StackActions,
  type NavigationProp,
  type ParamListBase,
} from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

type HoverKey = "home" | "provas" | "informacoes" | "conteudo" | "dicas" | null;

export default function Cabecalho() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<"true" | "false">(
    "false"
  );
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [avatarId, setAvatarId] = useState<ImageSourcePropType>(
    require("../../assets/avatares/0.png")
  );
  const [hoveredItem, setHoveredItem] = useState<HoverKey>(null);

  async function loadStorage() {
    // const teste = await AsyncStorage.getItem("verificaLogin");
    // const email = await AsyncStorage.getItem("email");
    // const id = await AsyncStorage.getItem("id");
    // const avatarId = await AsyncStorage.getItem("avatarId");

    if (!fontsLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    const handleMouseEnter = (item: Exclude<HoverKey, null>) => {
      setHoveredItem(item);
    };

    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    return (
      <View style={style.cabecalho}>
        <Image
          style={style.ImagemLogo}
          source={require("../../assets/Professores/logopreparavest.jpeg")}
        />

        <View style={style.subtitulo}>
          <Pressable
            onPress={() => navigation.dispatch(StackActions.replace("Home"))}
            // @ts-expect-error: onMouseEnter existe no RN Web
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}>
            <Text
              style={[
                { fontSize: 22, fontFamily: "Montserrat" },
                hoveredItem === "home" && style.hoveredText,
              ]}>
              Home
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.dispatch(StackActions.replace("Pagina Enem"))
            }
            // @ts-expect-error: onMouseEnter existe no RN Web
            onMouseEnter={() => handleMouseEnter("provas")}
            onMouseLeave={handleMouseLeave}>
            <Text
              style={[
                { fontSize: 22, fontFamily: "Montserrat" },
                hoveredItem === "provas" && style.hoveredText,
              ]}>
              Provas
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.dispatch(StackActions.replace("Informacoes"))
            }
            // @ts-expect-error: onMouseEnter existe no RN Web
            onMouseEnter={() => handleMouseEnter("informacoes")}
            onMouseLeave={handleMouseLeave}>
            <Text
              style={[
                { fontSize: 22, fontFamily: "Montserrat" },
                hoveredItem === "informacoes" && style.hoveredText,
              ]}>
              Informações Gerais
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.dispatch(StackActions.replace("Conteudo relevante"))
            }
            // @ts-expect-error: onMouseEnter existe no RN Web
            onMouseEnter={() => handleMouseEnter("conteudo")}
            onMouseLeave={handleMouseLeave}>
            <Text
              style={[
                { fontSize: 22, fontFamily: "Montserrat" },
                hoveredItem === "conteudo" && style.hoveredText,
              ]}>
              Conteúdo Relevante
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.dispatch(StackActions.replace("Dicas"))}
            // @ts-expect-error: onMouseEnter existe no RN Web
            onMouseEnter={() => handleMouseEnter("dicas")}
            onMouseLeave={handleMouseLeave}>
            <Text
              style={[
                { fontSize: 22, fontFamily: "Montserrat" },
                hoveredItem === "dicas" && style.hoveredText,
              ]}>
              Dicas de Estudos
            </Text>
          </Pressable>
        </View>

        {isAuthenticated === "true" ? (
          <Pressable
            onPress={() => navigation.navigate("Profile" as never)}></Pressable>
        ) : (
          <Pressable onPress={() => navigation.navigate("Login" as never)}>
            <Text>Entrar</Text>
          </Pressable>
        )}
      </View>
    );
  }
}
