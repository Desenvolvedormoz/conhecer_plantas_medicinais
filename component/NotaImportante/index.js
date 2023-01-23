import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../../assets/estilos/estilos';

const NotaImportante = () => {
  
  return(
    <View>
        <View accessible={true} style={estilos.nota}></View>
        <Text style={estilos.strong}>Nota:</Text>
        <Text style={{fontSize: 10,}}><Text style={{color: '#660E00', 
        fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase'}}>
          Atenção:</Text> As plantas medicinais podem ser perigosas e até matar. Este aplicativo não se destina 
          a dar orientação médica sobre tratamentos de saúde. Esta aplicação é apenas para informar sobre as descobertas
          científicas sobre algumas plantas usadas pelas populações. Nenhum tratamento médico deve ser abandonado sem orientação médica ou de um especialista.</Text>
    </View>
  )
}

export default NotaImportante;