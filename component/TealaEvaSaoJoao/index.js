import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import ErvaJoao from '../../assets/images/ervajoao.png';
import NotaImportante from '../NotaImportante';

const TelaErvaSaoJoao = () => {
  return(
    <ScrollView>
    <Image source={ErvaJoao} style={estilos.myImage} />
    <View style={estilos.myContainer}>
    <Text style={estilos.strong}> Nome: Erva de são joão</Text>
    <Text style={estilos.strong}>Nome científico: </Text>
    <Text style={estilos.strong}>Familia</Text>

    <View accessible={true}>
      <Text style={estilos.subtitulo}>Preste muita atenção</Text>
      <Text style={estilos.texto}>"Existem reivindicações de que a erva-de-são-joão consegue inibir o HIV, o vírus 
        que causa a AIDS. No entanto, ela interfere nos efeitos de muitos dos medicamentos que 
        são mais eficazes para tratar a infecção por HIV." <Text style={{color: '#00274E'}} onPress={()=>Linking.openURL('https://www.msdmanuals.com/pt/casa/assuntos-especiais/suplementos-alimentares-e-vitaminas/erva-de-s%C3%A3o-jo%C3%A3o')}>Mdmauals</Text></Text>
    <Text style={estilos.texto}>Vários estudos científicos controlados com placebos foram feitos sobre a erva de são João.</Text>
    <Text style={estilos.texto}>"Em geral, esses estudos mostram que a erva-de-são-joão pode beneficiar pessoas com 
      depressão leve a moderada e pode até mesmo ser tão eficaz quanto alguns antidepressivos 
      tradicionais. No entanto, a maioria dos estudos não mostra que a erva-de-são-joão seja 
      eficaz no tratamento da depressão grave." diz a mesma fonte</Text>
    </View>
    <Text style={estilos.subtituloLink} onPress={()=>Linking.openURL('https://www.msdmanuals.com/pt/casa/assuntos-especiais/suplementos-alimentares-e-vitaminas/erva-de-s%C3%A3o-jo%C3%A3o')}>Leia as recomendações do do mdmanuals</Text>
    <Text style={estilos.texto}>"A erva-de-são-joão pode ajudar a aliviar os sintomas de ansiedade e de depressão leve a
       moderada. A Associação Americana de Medicina afirmou que ela pode ajudar aliviar os sintomas 
       de depressão leve a moderada e possivelmente causar menos efeitos colaterais que os antidep
       ressivos convencionais."</Text>

     <Text style={estilos.subtitulo}>Reacão com medicamentos alopáticos</Text>
    <Text style={estilos.texto}>"No entanto, a erva-de-são-joão interage negativamente com muitos medicamentos que as 
      pessoas tomam; portanto, elas <Text style={estilos.strong}> devem consultar o médico</Text> antes de tomá-la. <Text style={estilos.strong}>Alguns países 
      proibiram seu uso</Text> devido às muitas interações medicamentosas.</Text>

    <Text style={estilos.texto}>Gestantes e pessoas que tomam medicamentos para infecção por HIV não devem tomar a 
  erva-de-são-joão."</Text>

  <NotaImportante />
    </View>
    </ScrollView>
  )
}

export default TelaErvaSaoJoao;