import React from "react";
import { View, Text, Image } from "react-native";
import estilos from "../../assets/estilos/estilos";

export default function TelaListaItems(props) {
    return(
     <View accessible={true}
     accessibilityHint={"container com resumo e um botão"}
     accessibilityLabel={"Texto"} style={estilos.container}>
     <Text style={estilos.titulo}>{props.title}</Text>
     <Image accessible={true}
    accessibilityLabel={"Image"} style={estilos.imagem} source={props.imagem} />
     <Text style={estilos.descricao}>{props.descricao}</Text>
    <View accessible={true}
    accessibilityHint={"Toque para entrar no artigo"}
    accessibilityLabel={"container"}>
      {props.button}
    </View>
    </View>
    )
}