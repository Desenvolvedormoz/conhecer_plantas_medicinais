import React from "react";
import { View, Text, Image } from "react-native";
import estilos from "../../assets/estilos/estilos";

export default function TelaListaItems(props) {
    return(
     <View accessible={true} style={estilos.container}>
     <Text style={estilos.titulo}>{props.title}</Text>
     <Image style={estilos.imagem} source={props.imagem} />
     <Text style={estilos.descricao}>{props.descricao}</Text>
    <View>
      {props.button}
    </View>
    </View>
    )
}