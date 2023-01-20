import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../../assets/estilos/estilos';

const NotaImportante = () => {
  
  return(
    <View>
        <View style={estilos.nota}></View>
        <Text style={estilos.strong}>Nota:</Text>
        <Text>Atenção: O uso de plantas medicinais não deve ser feito sem acompanhamento médico ou de um especialista. As informações deste aplicativo são apenas informativos. Nenhum tratamento deve ser abandonado sem o conhecimento de seu médico.</Text>
    </View>
  )
}

export default NotaImportante;