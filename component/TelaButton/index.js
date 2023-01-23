import React from 'react';
import { Pressable,Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from '../../assets/estilos/estilos'; 
import estilo from './estilo';

const ButtonComponent = ({tela}) => {
    const navigation = useNavigation()
  return(
    <View accessible={true}>
    <Pressable style={estilos.button}
    accessible={true}
    accessibilityLabel="Saiba mais sobre a planta"
    accessibilityHint="Toque este botão para a página de detalhes"
     onPress={()=> navigation.navigate(tela)}>
        <Text style={estilo.buttonText}>Sobre a planta</Text>
    </Pressable>
    </View>
  )
}

export default ButtonComponent;