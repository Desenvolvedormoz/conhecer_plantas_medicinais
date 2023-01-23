import React, { useCallback, useRef, useState } from 'react';
import { Image, Linking, ScrollView, Text, View, Button, Alert, Pressable } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Chanana from '../../assets/images/chanana.png';
import YoutubePlayer from "react-native-youtube-iframe";


const TelaChanana = () => {
 
  const [tocar, setTocar] = useState(false);

  const qundoMudamosEstado = useCallback((state) => {
    if (state === "ended") {
      setTocar(false);
    }
  }, []);

  return(
    <ScrollView>
      <Image source={Chanana} style={estilos.myImage} />
    <View style={estilos.myContainer}>
      <Text style={estilos.strong}>Nome popular: Chanana</Text>
      <Text style={estilos.strong}>Nome científico: Tunera guynensis L</Text>
      <Text style={estilos.strong}>Familia: </Text>
      <Text style={estilos.strong}>Curiosidade</Text>
      <Text style={estilos.texto}>Segundo o <Text style={estilos.strongLink} onPress={() => 
        Linking.openURL('https://portais.ufma.br/PortalUfma/paginas/noticias/noticia.jsf?id=7979')} >
          site</Text> da Universidade Maranhão do Brasil a "Chanana auxilia no tratamento do AIDS e
           do Câncer".</Text>
        <Text style={estilos.italico}>“A utilização dos fitoterápicos no tratamento não resultam na cura do câncer, mas refletem 
          no aumento da disposição dos pacientes em relação ao lazer e também na diminuição dos efeitos 
          colaterais de remédios usados no tratamento”, declarou Terezinha, citada no site.</Text>

          <Text style={estilos.subtitulo}>Propriedades medicinais</Text>
          <Text style={estilos.texto}>Ação: Aumenta a libido sexual e ajuda no tratamento de impotencia sexual masculino,</Text>
          <Text style={estilos.texto}>antimicrobianas, adstringente, expectorante - ajuda no tratamento de bronquite e alivia a tosse, antidepressiva e ansiolítica, melhora a função digestiva e ajuda a prevenir a prisão de ventre.
            ajuda no alivio de cólicas menstruais e secura vaginal. Ajuda na diminuição de níveis de açucar no sague, podendo ajudar no controle do diabetes. Além dessas Propriedades, a chanana alivia os efeitos colaterais provocados pelo tratamento convencional do câncer e dos medicamentos de HIV.
          </Text>
          <Text style={estilos.subtitulo}>Parte a ser usada</Text>
          <Text style={estilos.texto}>folha, raiz e flor</Text> 
      <View>
        <Text style={estilos.subtitulo}>Aprenda mais assistindo o vídeo</Text>
      <YoutubePlayer
        height={480}
        width={480}
        webViewStyle={{opacity: 0.99}}
        play={tocar}
        videoId={"3Q_4M0ESqkk"}
        onChangeState={qundoMudamosEstado}
      />
      <Text style={estilos.credito}>O vídeo não é da minha autoria, tão pouco alguma parceria ou afiliação com o autor. Foi apenas mais uma referência para aprender mais sobre esta planta. Se quiser assistir mais vídeos do autor visite <Text onPress={()=>Linking.openURL('https://www.youtube.com/@vidanojardim')}> https://www.youtube.com/@vidanojardim</Text></Text>
      </View>
      </View>
    </ScrollView>
  )
}

export default TelaChanana;