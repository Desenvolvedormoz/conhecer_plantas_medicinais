import React from 'react';
import { ScrollView,SafeAreaView,Text, View, Image, FlatList } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import NotaImportante from '../NotaImportante';
import Abobora from '../../assets/images/abobras.png'

const TelaAbobora = () => {
  return(
    <ScrollView>
        <SafeAreaView>
        <Image source={Abobora} style={estilos.myImage} />
    <View style={estilos.myContainer}>
    <Text style={estilos.strong}>Nome da Planta: <Text>Abóbora</Text></Text>
    <Text style={estilos.strong}>Nome Científico: <Text>Cucurbita pepo L</Text></Text>
    <Text style={estilos.strong}>Familia: <Text>Curcubitaceae</Text></Text>

    <View>
        <Text style={estilos.subtitulo}>Origem de Abóbora</Text>
        <Text style={estilos.texto}>O Abóbora é o alimento mais versátil do mundo, tendo origem na América do sul é produzido em
            todo o mundo. Seu fruto é muito saboroso e nutritivo.
        </Text>
        <Text style={estilos.strong}>Porque considerar Abóbora o alimento mais versátil do mundo?</Text>
        <Text style={estilos.texto}>Quando falamos de Abóbora o fruto de aboboreiro, nós não consumimos apenas o fruto, mas quase tudo - fruto,
            folhas e sementes, além de ser usado para ornamentação. Não concorda que o Abóbora merece essa consideração?
        </Text>
        <Text style={estilos.subtitulo}>Usos de Abóbora</Text>
        <Text style={estilos.texto}>O Abóbora é usado como alimento, para ornamentação e para tratamento de saúde.</Text>
    </View>
    <View>
        <Text style={estilos.subtitulo}>Uso de Abóbora na Alimentação</Text>
        <Text style={estilos.texto}>A Abóbora pode ser consumida como salada, refogada ou cozida, como soupa ou doce.
         A sua semente pode ser torada e petiscada e suas folhas podem ser refogados. Na África, as folhas de Abóbora são refogadas 
        e misturados com coco ou amendoim moido e servido na mesa com massa de milho ou mesmo arroz.</Text>
       <Text style={estilos.subtitulo}>Benefícios de Abóbora para a saúde</Text>
       <Text style={estilos.texto}>A Abóbora é rica em minerais: Cálcio, fósforo, zinco, selênio, magnésio e principalmente
       Betacaroteno.</Text>
       <Text style={estilos.texto}>As sementes de Abóbora tem uma boa quantidade de ferro e de gorduaras insaturadas. Além disso, a Abóbora possui uma boa quantidade 
       de antioxidades.</Text>
    </View>
    <View>
    <Text style={estilos.subtitulo}>Problemas de saúde que pode ser resolvidos  pelo consumo de Abóbora</Text>

    <Text style={estilos.texto}>O consumo de Abóbora ajuda a reduzir ou resolver os seguintes problemas de saúde:
    Câncer, doenças cardiovasculares por causa da presença de antioxidantes,  derrame e problemas nos olhos como a catarrata. Combate prisão de ventre e é indicado para problemas gastro intestinais e de rins.</Text>
    <Text style={estilos.texto}>As fibras da abóbora ajudam a reduzir o apetite, por isso, pode ser útil para quem tem excesso de peso.</Text>
    </View>
    <View>
    <Text style={estilos.subtitulo}>Constituição química da abóbora</Text>
    <Text style={estilos.texto}>Veja a seguir a Constituição química da abóbora:</Text>
    <Text style={estilos.texto}><Text style={estilos.strong}>Sementes:</Text> óleo essencial (até 50%), albuminas, glicosídeo (cucurbitina), resina, minerais (principalmente) zinco.</Text>
    <Text style={estilos.texto}><Text style={estilos.strong}>Polpa: </Text>açúcares, albuminas, gorduras, ácido ascórbico, ácido hidrociânico, ácido salicílico, aminoácidos, carotenóides, 
    cucurbitacina E, cucurbitina, flavonóides, saponinas, tanino, trigonelina, vitaminas, minerais.
    </Text>
    <Text style={estilos.subtitulo}>Propriedades medicinas da Abóbora</Text>
    <Text style={estilos.texto}>A Abóbora tem as seguintes Propriedades medicinais: anti-helmíntica, 
    antiinflamatória, anti-febril, antitérmica, bactericida, diurética, emoliente, estomáquica, 
    hepática, tenífuga, umectante, vermífuga</Text>

    <Text style={estilos.subtitulo}>Para o que é indicado a Abóbora?</Text>
    <Text style={estilos.texto}>A Abóbora é indicado para: erisipela, febre, inflamação (rins, vias urinarias, fígado, baço, próstata, ouvido, pele, generalizada), queimadura, vermes, dores de ouvido, anemia, avitaminose, infecções dos rins, náusea, vômito da gravidez, ferida de origem sifilítica, peles oleosas, limpeza da pele, acne,
     suavizar e amaciar a pele, máscara capilar, alisar os cabelos (submetidos a tratamento químico).</Text>

     <Text style={estilos.subtitulo}>O que posso utilizar?</Text>

     <Text style={estilos.item}>{'\u2B24' + ' '}Folhas</Text>
     <Text style={estilos.item}>{'\u2B24' + ' '}Flores</Text>
     <Text style={estilos.item}>{'\u2B24' + ' '}Polpa</Text>

    </View>
    <NotaImportante />
    </View>

    </SafeAreaView>
    </ScrollView>
  );
}

export default TelaAbobora;