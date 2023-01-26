import React from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import Abacateiro from '../../assets/images/abacate.png';
import estilos from "../../assets/estilos/estilos";
import NotaImportante from "../NotaImportante";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4625666726446510/4692990688';

export default function TelaAbacateiro(){
  
    return(
    <SafeAreaView style={estilos.telaApp} >
    
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
    accessibilityLabel={"Texto"} style={estilos.myContainer}>
      <Image accessible={true}
    accessibilityLabel={"Image"} source={Abacateiro} style={estilos.myImage} />
   
    <Text style={estilos.strong}>Nome da Planta: <Text>Abacateiro</Text></Text>
    <Text style={estilos.strong}>Nome Científico: <Text>Persea Americana</Text></Text>
    <Text style={estilos.strong}>Familia: <Text>Lauraceae</Text></Text>

    <Text style={estilos.subtitulo}>Origem do Abacate</Text>
    <Text style={estilos.texto}>O Abacate originou se do México e da América do Sul, a árvore pode atingir entre 15 à 20 metros de altura.</Text>

    <View accessible={true}
    accessibilityHint={"Leia Esta Seção"}
    accessibilityLabel={"Texto"}>
      <Text style={estilos.subtitulo}>Usos do Abacate</Text>

      <Text style={estilos.texto}><Text>Na Alimentação: </Text>Foi comprovados pelos estudos Científicos que
       o fruto é nutritivo e rico em gorduras bons, que ajuda na regulação do colesterol,
       além de ser uma fonte de sais minerais e vitaminas C e E.</Text>

       <Text style={estilos.subtitulo}>O fruto</Text>
       <Text style={estilos.texto}>O abacate contém os seguintes nutrientes:</Text>

      <Text style={estilos.item}>{'\u2B24'}Vitamina E, um antioxidante que ajuda na proteção das células.</Text>
        <Text style={estilos.item}>{'\u2B24'}O Abacate é rico em fibras que contribue para a saciedade.</Text>
     <Text style={estilos.item}>{'\u2B24' + ' '}Ácido gracho monoinsaturado que ajuda a regular o clesterol.</Text>
    </View>
    <View accessible={true}
    accessibilityHint={"Leia mais esta seção"}
    accessibilityLabel={"Texto"}>
      <Text style={estilos.subtitulo}>Como conservar o abacate</Text>

      <Text style={estilos.texto}>Há três formas de conservar o abcate:</Text>

          <Text style={estilos.item}>{'\u2B24' + ' '}Refrigeração na geladeira.</Text>
          <Text style={estilos.item}>{'\u2B24' + ' '}Com Plastico filme.</Text>
          <Text style={estilos.item}>{'\u2B24' + ' '}Expremir suco de limão na superfície.</Text>

    </View>
    <View accessible={true}
    accessibilityHint={"Leia mais uma seção"}
    accessibilityLabel={"Texto"}>
      <Text style={estilos.subtitulo}>Descobertas Científicos</Text>
      <Text style={estilos.texto}>Recentemente os cientistas descobriram dois fitonutrientes no abacates: <Text onPress={()=>Linking.openURL('https://villalvafrutas.com.br/conheca-os-poderes-medicinais-do-abacate/')} style={estilos.strong}> a 
        glutatoína e o betassitosterol</Text>, sendo a glutotoina atua como um antioxidante
         em defesa do organismo e o betassitosterol ajuda na diminuição do colesterol ruim.</Text>

      <Text style={estilos.texto}>Segundo estudos Científicos, os antioxidantes ajudam na neutralização de redicais livres 
        que são apontados como um dos fatores de desenvolvimento de problemas cardiovasculares e do desenvolvimento de câncer.
      </Text>
      <Text style={estilos.texto}>O abacate é uma das melhores fontes de glutatoína e pode oferecer certa proteção contra o câncer oral, de garganta e outros tipos.</Text>
     <View style={{width: '80%', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
    </View>
    <View accessible={true}>
      <Text style={estilos.titulo}>Composição química do abacateiro:</Text>
      <Text style={estilos.texto}>Os seguintes são elementos que fazem parte da composição química do abacate:
      Sacarina gordurosa e cerácea, resina cristalizada, substância
      albuminóide, e da perseita cristalizada é extraído um açúcar especial, carboidratos,
      substâncias amargas, perseitol, óleos essenciais, óleo fixo, mucilagens, taninos, pigmentos,
      carotenóides (amarelos) e clorofila (verdes); O extraído óleo da polpa possui glicerídeos de
      ácido oleico (ácido graxo monoinsaturado) 61% a 95%; 10% de compostos insaponificáveis,
      esteróis e ácidos voláteis, vitamina D. As sementes do abacate possuem ácidos graxos,
      álcoois, compostos insaturados excepcionalmente amargos. As folhas do abacate possuem
      3% de óleo essencial de estragol e anetol.
      </Text>
      <Text style={estilos.titulo}>Ação farmacológica:</Text>
      <Text style={estilos.texto}>Anti-anêmico, anti-infecioso para rins, Diurêtico, antireumático, anti-infeccioso para bexiga,
        Carminativo, Estimula a secreção de bile no figado, balsâmico e emanagogo, É anti-inflamatório, antimicrobiano e contra enfermidades,
         neurodegenerativas e estomaquímico.
      </Text>
      <Text style={estilos.subtitulo}>
        Para quais problemas é indicado:
      </Text>
      <Text style={estilos.texto}>
      abscessos, ácido úrico, afecções hepáticas, aftas, anemia, amigdalite, artritismo, indisposição,
       infecções da bexiga, bronquite, cansaço, caspa, cefaléia, cistites, cólica histérica, diarréia, 
       disenterias, dispepsia, distúrbios da digestão, diurético, dor de barriga, dor de cabeça,
        eczemas do couro cabeludo, edemas, eructações, estomatite, estresse, febre intermitente,
         flatulência, gases intestinais, gota, hepatite, hipertensão, inchaço dos pés, indigestão, 
         inflamações dos dedos, nevralgia do trigêmeo, nutritivo, panariços, queda de cabelo, 
         reumatismo, infecções dos rins, rouquidão, secreções catarrais, sífilis, tosse, tuberculose, 
         uremia, uretrites, varizes, verminoses, vesícula biliar, vias respiratórias, vias urinárias, 
         regularizar o fluxo menstrual, ativar a excreção biliar, liberar a menstruação.
      </Text>
      <Text style={estilos.subtitulo}>Partes a serem usadas:</Text>
      <Text style={estilos.texto}>Folhas</Text>
      <Text style={estilos.texto}>Fruto</Text>
      <Text style={estilos.texto}>Semente</Text>
      <Text style={estilos.texto}>Botões de flores</Text>

      <Text style={estilos.texto}>As folhas verdes causam parpitações cardíacas, por isso seque as antes de usa las.</Text>
    </View>
    <View accessible={true}>
      <Text style={estilos.subtitulo}>Modo de uso:</Text>
      <Text style={estilos.strong}>Dose e Posologia</Text>
      <Text style={estilos.strong}>Folhas:</Text>
      <Text style={estilos.texto}>Infusão - 10g para cada xícara de água, 3 à 4 xícaras ao dia</Text>
      <Text style={estilos.strong}>Fruto e semente:</Text>
      <Text style={estilos.texto}>Óleo: 2 à 4ml ao dia</Text>
      <Text style={estilos.strong}>Extrato seco:</Text>
      <Text style={estilos.texto}>1g ao dia</Text>

      <Text style={estilos.subtitulo}>Contraindicações:</Text>
      <Text style={estilos.texto}> É contraindicado para quem faz regime de emagrecimento ou manutenção de peso, 
        por ser muito calórico e gorduroso e também é contraindicado para mulheres grávidas
         por que pode causar aborto</Text>
    </View>
    <NotaImportante />
    </View>
    </ScrollView>
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
    
    </SafeAreaView>
    )
}