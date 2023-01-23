import React from 'react';
import { View, Text, Linking, ScrollView, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Piao from '../../assets/images/pixao.png';
import NotaImportante from '../NotaImportante';

const TelaPinhao = () => {
  return(
    <ScrollView>
      <Image source={Piao} style={estilos.myImage}/>
    <View accessible={true} style={estilos.myContainer}>
        <Text style={estilos.strong}>Nome: Pião-roxo, Pinhão roxo</Text>
        <Text style={estilos.strong}>Nome científico: Jatropha gossypiifolia</Text>
        <Text style={estilos.strong}>Familia: Euphorbiaceae</Text>
        <View>
          <Text style={estilos.subtitulo}>Origem de Pião-roxo</Text>
          <Text style={estilos.texto}>Uma planta originária da América central, Brazil.</Text>

          <Text style={estilos.subtitulo}>Substâncias químicas do pião-roxo</Text>
          <Text style={estilos.texto}>Estudos científicos foram feitos para descobrir a composição química
          desta planta e foi comprovado que a Jatropha gossypiifolia possue ácidos orgânicos, alcalóides, terpenóides, esteróides, flavonóides, lignanas e taninos.</Text>
          <Text style={estilos.texto}>A principal substância química encontrada no Pião-roxo é o diterpeno chamado jatrofona.</Text>
          <Text style={estilos.subtitulo}>Benefícios de Pião-roxo</Text>
          <Text style={estilos.texto}>O pião-roxo é usado para a ornamentação e por algumas populações como insecticida. Também o óleo da semente é usado tanto na preparação 
          de tintas e sabões quanto como lubrificante e combustível para motores tipo Diesel  e, ainda, na iluminação.</Text>
          <Text style={estilos.texto}>Alguns estudos apontam que esta planta tem efeitos terapeútico comprovados, mas vários estudos apontam a toxicidade desta espécie.</Text>
          <Text style={estilos.subtitulo}>Toxicidade da planta</Text>
          <Text style={estilos.texto}>O látex desta planta é caústico para a pele e mucosas. 
          "De um modo geral, a ingestão de partes do vegetal pode produzir efeitos purgativos e depressores dos sistemas respiratório e cardiovascular. Na intoxicação surgem, 
          inicialmente, distúrbios do sistema digestório, acompanhados por dores intensas, desidratação, insuficiência renal e agravo cardiovascular. A evolução do quadro traz 
          danos neurológicos, inclusive com torpor e possibilidade de coma e morte."</Text>
          <Text style={estilos.texto}>Apesar da toxicidade do látex da planta que consideramos até aqui, devemos ter em conta
          que as populações raramente usam a planta in-natura. Muitas vezes usam a planta depois da secagem da parte da planta, ou
          uma preparação medicinal como: infusão e decocção. O que talvez pode anular os efeitos tóxicos da planta.</Text>
           <Text style={estilos.subtitulo}>Consideração final</Text>
          <Text style={estilos.texto}>Se olhar para consideração que fizemos até aqui, notará que esta planta é muito tóxico apesar de que se usado depois de secagem,
           infusão e decoção a toxicidade talvez pode diminuir. Os cientístas desaconselham o uso desta planta para o tratamento da saúde. <Text onPress={()=>Linking.openURL('https://www.scielo.br/j/rbpm/a/DZD6VsbyGpKSPQ3Lrwf5PSz/?lang=pt#')} style={estilos.strong}>Leia mais sobre este assunto.</Text></Text>
        </View>
        <NotaImportante />
    </View>
    </ScrollView>
  )
}

export default TelaPinhao;