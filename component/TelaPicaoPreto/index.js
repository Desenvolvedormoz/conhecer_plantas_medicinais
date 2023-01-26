import React from 'react';
import { Linking, ScrollView, Text, View, Image, SafeAreaView } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Picao from '../../assets/images/picaopreto.png';
import NotaImportante from '../NotaImportante';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4625666726446510/4692990688';

const TelaPicaoPreto = () => {
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
    accessibilityLabel={"Image"} source={Picao} style={estilos.myImage} />
    
    
        <Text style={estilos.strong}>Nome: Picão preto</Text>
        <Text style={estilos.strong}>Nome científico: Bidens pilosa</Text>
        <Text style={estilos.strong}>Familia: Asteraceae </Text>

        <View accessible={true}
        accessibilityHint={"Leia uma seção e veja um anúncio"}
        accessibilityLabel={"Texto"}>
          <Text style={estilos.subtitulo}>Origem de Bidens pilosa</Text>
          <Text style={estilos.texto}>Acredita se que bidens pilosa tenha se originado da América do sul e com o passar do tempo, se
            espalhado para as diferentes partes do mundo.
          </Text>

          <Text style={estilos.subtitulo}>Principais substâncias Químicas</Text>
          <Text style={estilos.texto}>As principais substâncias químicas de bidens são: <Text onPress={()=>Linking.openURL('https://www.arca.fiocruz.br/bitstream/handle/icict/15136/16.pdf?sequence=2&isAllowed=y')} style={estilos.strong}>poliacetilenos e flavonoides.</Text></Text>
          <Text style={estilos.texto}>Nesses últimos, encontramos também chalconas e auronas. Além dessas substâncias químicas, relata se que
          a bidens pilosa tenha cerca de 200 metabólitos secundários. Onde além das que destacamos acima podemos também concontrar
          esteroides, terpenos, hidrocarbonetos alifáticos, álcoois, ácidos carboxílicos, derivados do ácido benzoico, aldeídos, cumarinas e
          outras classes de fenilpropanoides, porfirinas, substâncias nitrogenadas e sulfuradas. </Text>
          <View style={{width: '80%', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
          <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
          <Text style={estilos.subtitulo}>Partes com mais consentração das substâncias químicas</Text>
          <Text style={estilos.texto}>Os <Text style={estilos.strong}>poliacetilenos</Text> encontram se concentrados em várias partes da planta,
          mas principalmente nas raízes.</Text>

          <Text style={estilos.texto}>Na ocorência dos flavonoides, incluem-se chalconas e auronas. Os flavonoides são os princípios ativos mais 
          ativos contra a malária no Bidens pilosa</Text>

          <Text style={estilos.subtitulo}>Uso medicinal de Bidens pilosa</Text>
          <Text style={estilos.texto}>Foi comprovado que o extrato de Bidens pilosa é antiinflamatório, o que apoia o uso
          desta planta contra o reumatismo, asma e conjuntivite. Também foi confirmado experimentalmente o uso desta planta
          para o tratamento da malária, como hipotensora e antipirética, atibateriano e antifúngico, antiúlcera, hepatoprotetora, cicatrizante e antialérgica.</Text>

          <Text style={estilos.subtitulo}>Partes usados da planta:</Text>
          <Text style={estilos.texto}>Todas as partes da planta, mas principalmente as folhas.</Text>
        </View>
        
        <NotaImportante />
    </View>
    </ScrollView>
    
    </SafeAreaView>
  );
}

export default TelaPicaoPreto;