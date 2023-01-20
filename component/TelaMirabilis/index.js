
import React from 'react';
import { Linking, ScrollView, Text, View, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Maravilha from '../../assets/images/maravilha.png';
import NotaImportante from '../NotaImportante';

const TelaMirabilis = () => {
  return(
    <ScrollView>
      <Image source={Maravilha} style={estilos.myImage} />
    <View style={estilos.myContainer}>
        <Text style={estilos.strong}>Nome: maravilha, bela-da-noite</Text>
        <Text style={estilos.strong}>Nome científico: Mirabilis Jalapa</Text>
        <Text style={estilos.strong}>Familia: Nyctaginaceae</Text>

        <Text style={estilos.subtitulo}>Origem da maravilha</Text>
        <Text style={estilos.texto}>A Planta popularmente conhecida por Maravilha é uma espécie nativa das regiões tropicais do continente Americano.</Text>

        <Text style={estilos.texto}>Esta planta é utilizada geralmente para a ornamentação nos jardins e casas.</Text>
        <Text style={estilos.subtitulo}>Para que é indicado</Text>
        <Text style={estilos.texto}>Na internet é possível encontrar pelos menos um <Text style={estilos.strong} onPress={()=>Linking.openURL('https://agro20.com.br/maravilha/')}>
          artigo</Text> que diz que a Maravilha pode tratar diversos problemas de saúde como
          DSTs diversas, Herpes, Feridas, Leucorreia, Vermes, Cólica, Cicatrização, Escoriações, Contusão, Sardas e Dor de ouvido. Eu li dois deles que falam quase da mesma coisa, mas não recori a algum artigo científico para confirmar 
          isso neste artigo.</Text>

          <Text style={estilos.texto}>É indicada no tratamento de ingestão de estômago, figado, baço afetado com congestão, derrame cerebral, paralisia facial como boca torta, perda de fala, paralisia nas pernas, braços e mãos que ficam com tremedeiras, dores 
            de cabeça, enxaqueca, fastio e menopausa. <Text style={estilos.strong} onPress={()=>Linking.openURL('https://afontedeinformacao.com/biblioteca/artigo/read/61327-para-que-serve-mirabilis-jalapa')}>
         veja mais neste artigo</Text></Text>

         <Text style={estilos.subtitulo}>Toxicidade e uso</Text>
         <Text style={estilos.texto}>Apesar de apresentar benefícios para a saúde, as raizes e as sementes são muito tóxicos.
          Por isso veja o que alguns artigos recomendam:<Text style={estilos.strong}>"O seu uso deve ser evitado, principalmente as raízes e sementes.
          O contato com a pele pode causar irritações cutâneas e quando ingerida pode provocar diarréias, náuseas e fortes 
          dores de estómago." </Text><Text style={estilos.strong} onPress={()=>Linking.openURL('https://batatadoceira.blogspot.com/2018/02/cuidado-com-as-flores-toxicas.html')}>Veja o site</Text>
         </Text>
         <Text style={estilos.strong}> "Embora suas raízes tuberosas sejam consideradas venenosas,..." <Text style={estilos.strong} onPress={()=>Linking.openURL('http://www.unirio.br/ccbs/ibio/herbariohuni/mirabilis-jalapa-l')}>Leia o site</Text>
         </Text>
         <Text style={estilos.subtitulo}>Observações do autor deste artigo</Text>
         <Text style={estilos.texto}>O meu principal interesse ao escrever estes artigos não é de dar orientações sobre o uso
          racional de plantas mediciais, apesar de ter pesquisado um pouco para elaborar a matéria, mas
          criar um portifólio como programador mobile. Visto que aprendi a fitoterapia clinica, me sinto
          mais familializado por esta matéria, por isso achei ideal escrever sobre alguma coisa que tenho 
          familiaridade. Mas por não ser o meu principal foco ao escrever os artigos. Recomendo fortemente
          que faça mais pesquisas sobre estas plantas e se familiarize com eles. lembre se sempre o uso de 
          plantas mediciais é muito complexo. 
         </Text>
         <Text style={estilos.texto}>Você não pode usar plantas medicinais para tratar problemas de saúde que Você não conhece, que 
          não tem diagnóstico médico. As plantas medicianais prejudicam sim quando forem usados de forma iracional. Por 
          exemmplo, algumas plantas quando usadas em altas doses ou de forma prologadas podem causar problemas a sua
          saúde. Outras quando usados em concomitante com outros medicamentos ou plantas mediciais podem potencializar
          ou anular o medicamento. Outras quando usados sem conhecimento podem agravar o problema ou mesmo matar. Por isso,
          não brinque de se tratar com plantas medicinais sem o acompanhamento de um especialista ou seu médico. Não é
          por que seu vizinho se curou com uma planta que automaticamente seu proplema também será sem acompanhamento de um
          especialista. Lembre se disso caro, leitor.
         </Text>
         <NotaImportante />
     </View>
     </ScrollView>
  )
}

export default TelaMirabilis