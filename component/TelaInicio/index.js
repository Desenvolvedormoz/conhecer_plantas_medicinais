import React from "react";
import { SafeAreaView, Text, ScrollView, Image, Linking, View } from "react-native";
import TelaListaItems from "../TelaListaItems";
import estilos from "../../assets/estilos/estilos";
import estilo from "./estilo";
import ButtonComponent from "../TelaButton";
import Abacate from '../../assets/images/abacate.png';
import Abobora from '../../assets/images/abobras.png';
import Boldo from '../../assets/images/boldo.png';
import Picao from '../../assets/images/picaopreto.png';
import Pinhao from '../../assets/images/pixao.png';
import Carqueja from '../../assets/images/carqueja.png';
import Mirabilis from '../../assets/images/maravilha.png';
import Alfavacao from '../../assets/images/alfavaca.png';
import Chanana from '../../assets/images/chanana.png';
import ErvaJoao from '../../assets/images/ervajoao.png';

export default function TelaInicio(props) {
return(
<ScrollView>
<SafeAreaView style={estilos.containerAll}>
    <Text style={estilo.titulos}>Escolha uma planta</Text>

<TelaListaItems button={<ButtonComponent tela="Abacatéiro" />} id="1" title= "Abacateiro"
    imagem = {Abacate} descricao="Abacateiro é uma planta com boa reputação na fitoterapia.
     Ela é usada para o tratamento de diversas patologias.
     Clique no botão abaixo e aprenda mais sobre esta planta e seus benefícios." />

<TelaListaItems button={<ButtonComponent tela="Abóbora" />} id="2" title= "Abóbra"
    imagem = {Abobora} descricao="É uma trepadeira perene que pode atingir 3,5 m e é uma planta dioica. Em muitas regiões do
     mundo é cultivado, seus frutos são compostos com mutos nutrientes benéficos para a saúde. " />

<TelaListaItems button={<ButtonComponent tela="Boldo" />} id="3"  title="Boldo"
    imagem = {Boldo} descricao="Uma planta usada em todo o mundo para o tratamento 
    do fígado e de má digestão. Será que as plantas tem efeitos coraterais? descubra 
    neste breve artigo sobre boldo." />

<TelaListaItems button={<ButtonComponent tela="Picão Preto" />} id="4" title= "Picão preto"
    imagem = {Picao} descricao="Picão preto encontra se em várias partes do mundo e muitas vezes é considerada uma planta invasora.
    Qual é a origem desta planta? O que a ciência descobriu sobre esta planta? descubra neste artigo." />

<TelaListaItems button={<ButtonComponent tela="Pixão" />} id="5"  title="Pixão-roxo"
    imagem = {Pinhao} descricao="Jatropha gossypiifolia uma planta conhecida popularmente em algumas regiões como pixão-roxo,
     é uma planta popularmente usado para o tratamento de problemas de saúde. O que a ciência descobriu sobre essa planta? Vale apenas usá-la? Descubra neste artigo." />

<TelaListaItems button={<ButtonComponent tela="Carqueja" />} id="6"  title= "Carqueja"
    imagem = {Carqueja} descricao="Como qualquer planta com reputação medicinal, a carquieja é uma das plantas
    mais estudada durante o século 20. O que os cientistas descobriram? Será que a carqueja tem realmente efeitos 
    medicinais? Descubra neste artigo." />

<TelaListaItems button={<ButtonComponent tela="Mirabilis" />} id="7"  title= "Maravilha"
    imagem = {Mirabilis} descricao="Há relatos na internet de que esta planta é usado popularmente 
    para tratar problemas como DST, herpes, chagas e outros. Será que isso é verdade? Nada mais pode informá-lo
    melhor do que pesquisar e aprender mais sobre esta planta. Leia uma breve introdução que escrevi neste artigo.
" />

<TelaListaItems button={<ButtonComponent tela="Ocimum" />} id="8"  title= "Alfavacão"
    imagem = {Alfavacao} descricao="Por minhares de anos a medicina era dominado pelo uso de plantas medicinais. O alfavacão
    é uma das plantas que era usado na época e até hoje é muito usado pelas populações. Será que esta planta tem realmente efeitos medicinais?
    Descubra neste artigo o que descobriram sobre esta planta." />

<TelaListaItems button={<ButtonComponent tela="Chanana" />} id="9"  title= "Chanana"
    imagem = {Chanana} descricao= "Qual é a origem desta planta? para que ela serve? o que as descobertas científicas dizem sobre esta planta? Descubra neste curto artigo sobre chanana." />

<TelaListaItems button={<ButtonComponent tela="Erva de são joão" />} id="10"  title="Erva de são João"
    imagem = {ErvaJoao} descricao="Mentrasto é o nome científico desta planta. Ela tem sido usada para o tratamento
    de sintomas de depressão leve e moderado. As flores desta planta contém vários compostos biologicamente ativos, incluindo a hipericina e a hiperforina. Ela também tem sido usada
    para tratamento da pele e alguns dizem que esta planta pode inibir o hiv. Mas o que a ciência descobriu sobre esta planta? descubra neste artigo." />
<View style={{height: 100, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
<Text style={estilos.strongLink} onPress={() => props.navigation.navigate('Política')}>
    Políticas de Privacidade
</Text>
</View>
</SafeAreaView>
</ScrollView>
)
}