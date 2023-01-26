import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Alfavacao from '../../assets/images/alfavaca.png';
import NotaImportante from '../NotaImportante';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4625666726446510/4692990688';

const TelaOcimum = () => {
  return(
    <SafeAreaView> 
    
      <View style={{paddingHorizontal: 30, width: '100%',
        justifyContent: 'flex-start', alignItems: 'center'}}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
    <ScrollView>
      <View accessible={true}
    accessibilityHint={"Leia o artigo"}
    accessibilityLabel={"Texto"}
     style={estilos.myContainer}>
      <Image accessible={true}
    accessibilityLabel={"Image"} source={Alfavacao} style={estilos.myImage} />
    
   
         <Text style={estilos.strong}>Nome popular: alfavacão, alfavaca-cravo</Text>
        <Text style={estilos.strong}>Nome científico: Ocimum Gratissimum</Text>
        <Text style={estilos.strong}>Familia: Lamiaceae </Text>

        <Text style={estilos.subtitulo}>Origem do alfavacão</Text>
        <Text style={estilos.texto}>Não se sabe ao certo qual é a sua origem, mas provavelmente esta espécie se originou da Índia.</Text>
        <View>
          <Text style={estilos.subtitulo}>Substâncias químicas</Text>
          <Text style={estilos.texto}>Saponinas, Flavonoides, Ácido cafeico, oleos essenciais,</Text>
        </View>
        <View accessible={true}
    accessibilityHint={"Leia uma seção"}
    accessibilityLabel={"Texto"}>
          <Text style={estilos.subtitulo}>Atividade medicinal</Text>
          <Text style={estilos.texto}>Atividades antimicrobianas</Text>
          <Text style={estilos.texto}>Os óleos essenciais são os principais compostos com atividades medicinais antimicrobianas nesta planta, principalmente o eugenol.</Text>
          <Text style={estilos.texto}>Atividades hipoglicemiante</Text>
          <Text style={estilos.texto}>Os compostos com atividade hipoglicemiante descobertos foram os fenólicos chamados ácido chicórico.</Text>
          <Text style={estilos.texto}>Contém Propriedades antioxidantes e antinflamaórios feitos in vivo.</Text>
          <Text style={estilos.texto}>Reduz glicemia, Anti-inflamatória, Estomáquica, Carminativa, Broncodilatador, Antialergênica
          Antigripal, Antitussígena, Sedativa, Analgésica, Febrífuga</Text>
        </View>
        <View style={{width: '80%', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
        <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
        <View accessible={true}
    accessibilityHint={"Leia uma seção e veja um anúncio"}
    accessibilityLabel={"Texto"}>
          <Text style={estilos.subtitulo}>Indicação para alfavacão</Text>
          <Text style={estilos.texto}>Segundo alguns artigos da internet, o alfavacão pode ser indicado para tratamento de problemas
            do sistema digestivo, sistema nervoso, sistema respiratório e geral.
          <Text v>As ações dos princípios ativos disponíveis nesta planta são: carminativa, digestiva, estomáquica, antiespasmódica, antiulcerogênica, 
            ansiedade, insônia e antidepressiva leve, gripes com cefaleia, antiasmática, broncodilatador, tosse alérgica, gripes e resfriados, Estimulante 
            do organismo como um todo, refazendo processos de grande desgaste energético, antisséptico, analgésico, anti-inflamatório e febrífugo.</Text>
          </Text>
          <Text style={estilos.subtitulo}>Contraindicação do alfavacão</Text>
          <Text style={estilos.texto}><Text style={estilos.strong} onPress={() => Linking.openURL('https://www.oficinadeervas.com.br/conteudo/alfavacao')}>O alfavacão é containdicado</Text> em gestantes, crianças menores de 6 anos, pessoas com gastrites e úlceras gastroduodenais, síndrome do cólon irritável, colites, hepatopatias, epilepsia, Parkinson e hipoglicemia</Text>
          
        </View>
        <NotaImportante />
   </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default TelaOcimum;