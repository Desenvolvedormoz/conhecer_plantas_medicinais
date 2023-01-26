import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import NotaImportante from '../NotaImportante';
import Carqueja from '../../assets/images/carqueja.png';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4625666726446510/4692990688';

const TelaCarqueja = () => {

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
    accessibilityLabel={"Texto"} style={estilos.myContainer}>
      <Image accessible={true}
    accessibilityLabel={"Image"} source={Carqueja} style={estilos.myImage} />
    
        <Text style={estilos.strong}>Nome: Carqueja</Text>
        <Text style={estilos.strong}>Nome científico: Baccharis trimera</Text>
        <Text style={estilos.strong}>Familia: Asteraceae</Text>

        <View>
          <Text style={estilos.subtitulo}>Origem da Carqueja</Text>
          <Text style={estilos.texto}>Carqueja com nome científico Baccharis trimera, 
          é uma espécie da Familia Asteraceae cujo Origem é na América do sul. É mais 
          encontrado em países como, Brasil, Perú, Uruguai, argentina e bolívia.</Text>

            <Text style={estilos.subtitulo}>Substâncias químicas</Text>
            <Text style={estilos.texto}>Estudos apontam para as seguintes substâncias 
            químicas nesta planta: flavonóides, diterpenos,  lactonas diterpênicas do 
            tipo trans - clerodano estigmasterol, óleo essencial composto por á-pineno, 
            â-pineno, canfeno, limoneno, acetato de carquejilo, carquejol, â-ocimeno, 
            ledol e uma saponina derivada do ácido equinocístico.</Text>
            <Text style={estilos.texto}>Os principais compostos Químicos encontrados nesta 
            planta são os flavonóides e os terpenóides.</Text>

            <Text style={estilos.subtitulo}>Propriedades Medicinais</Text>
            <Text style={estilos.texto}>A Baccharis trimera contém as seguintes Propriedades 
            Medicinais: antidispéptica, desintoxicante, hepatoprotetora, hipoglicemiante, 
              anti-inflamatória, analgésica, antiviral, antisséptica e antioxidante.</Text>
              <Text style={estilos.subtitulo}>Toxicidade e contraindicação</Text>
              <Text style={estilos.texto}>carqueja tem baixa toxicidade e é contraindicado pra 
              mulheres em gestação por que pode causar aborto.</Text>
              <Text style={estilos.texto}>Em pacientes hipertensos que estejam em tratamento com 
              anti-hipertensivos pode ocorrer sinergismo e elevar o efeito do fármaco, havendo a 
              necessidade de ajuste das doses em caso de ingestão simultânea de extratos com carqueja.</Text>
                <Text style={estilos.texto}>O uso da carqueja junto com inibidores da síntese de proteína 
                (tetraciclina, cloranfenicol e netilmicim) também resulta em uma interação medicamentosa. 
                 <Text style={{color: '#00274E', fontSize: 18,}} onPress={()=>Linking.openURL('https://www.scielo.br/j/rbpm/a/CFY3XWVTbXbwTXWKYkhvMgv/?lang=pt')}> Aprenda mais neste artigo</Text></Text>
                 
                <NotaImportante />
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default TelaCarqueja;