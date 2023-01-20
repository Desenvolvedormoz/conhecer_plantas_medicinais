import React from 'react';
import { Pressable,Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from '../../assets/estilos/estilos'; 
import estilo from './estilo';

const ButtonComponent = ({tela}) => {
    const navigation = useNavigation()
  return(
    <View>
    <Pressable style={estilos.button} onPress={()=> navigation.navigate(tela)}>
        <Text style={estilo.buttonText}>Sobre a planta</Text>
    </Pressable>
    </View>
  )
}

export default ButtonComponent;