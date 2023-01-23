import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import estilos from '../../assets/estilos/estilos';
import Boldo from '../../assets/images/boldo.png';
import NotaImportante from '../NotaImportante';

const TelaBoldo = () =>{
 
  return(

    <ScrollView>
    <SafeAreaView>
      <Image source={Boldo} style={estilos.myImage} />
      <View style={estilos.myContainer}>
        <Text  style={estilos.strong}>Nome: Boldo</Text>
        <Text style={estilos.strong}>Nome Científico: Plectranthus barbatus Andrews</Text>
        <Text  style={estilos.strong}>Familia: Lamiaceae</Text>

        <Text style={estilos.subtitulo}>Origem do Boldo</Text>
        <Text style={estilos.texto}>Planta de origem Africano, o boldo é muito usado na medicina tradicional para
        o tratamento por séculos e em todo o mundo.</Text>
        <Text style={estilos.texto}>Por ser muito usado no mundo, o boldo foi alvo de inúmeras pesquisas de estudos
        farmacológicos e químicos.</Text>
        <View accessible={true}>
          <Text style={estilos.subtitulo}>Usos do boldo</Text>
          <Text style={estilos.texto}>O boldo tem três usos: Culinária, ornamentação e medicinal.</Text>

          <Text style={estilos.subtitulo}>Uso medicinal</Text>
          <Text style={estilos.texto}>As folhas do boldo são arancadas, maceradas e consumidas. Elas são amargas
          , mas quando usados na dose certa e posologia adequado ajudam na secreção biliar e no tratamento do sistema 
          digestivo. Porem, quando tomados em dose altas  e por um periodo prologado, podem ser tóxicos e causar iritação no tubo digestivo.</Text>
          <Text style={estilos.subtitulo}>Parte a ser usada:</Text>
          <Text style={estilos.texto}>Folhas</Text>
          <Text style={estilos.subtitulo}>Constituição Química</Text>
          <Text style={estilos.texto}>Os seguintes são constituintes da planta: barbatusol, barbatol, barbatusina, 
          cariocal, ciclobutatusina, colenol, coleol, coliona, óleo essencial (rico em guaieno e fenchona), ferruginol, forskolina. 
          As folhas frescas contém 0,1% de óleo essencial e folhas secas ao ar 0,3%.</Text>

          <Text style={estilos.subtitulo}>Propriedades medicinais:</Text>
          <Text style={estilos.texto}>Para uma planta ser considerada medicinal, ela precisa ter Propriedades
          com ação medicinal. Veja a seguir quais as Propriedades desta planta: antidispéptica, anti-reumática, broncodilatadora, calmante, 
          cardioativa, carminativa, colagoga, colerética, estomáquica, hepática, hiposecretora gástrica, hipotensora, tônica.</Text>
          <Text style={estilos.subtitulo}>Problemas indicados para tratamento com boldo:</Text>
          <Text style={estilos.texto}>asma, bronquite, diarréia (extrato cru das folhas é antiviral), fadiga do fígado, distúrbios intestinais, 
          hepatite, cólica e congestão do fígado, obstipação, inapetência, cálculos biliares, debilidade orgânica, insônia, ressaca alcoólica.</Text>
        </View>
        <Text style={estilos.subtitulo}>Dose e posologia</Text>
        <Text style={estilos.texto}>Tintura: 20 g da planta fresca em 100 ml de álcool. Tomar 20 a 40 gotas até 3 vezes ao dia.</Text>
        <Text style={estilos.texto}>Sumo: amassar 2 folhas frescas em 1 copo e completar com água. Aguardar 5 horas e tomar (2 a 3 vezes ao dias).</Text>
        <Text style={estilos.texto}>Escalda pé: ferver algumas folhas. Esfriar e usar em banhos antes de dormir (insônia).</Text>
        <Text style={estilos.subtitulo}>Contraindicações e efeitos coraterais</Text>
        <Text style={estilos.texto}>É contraindicado para pessoas com úlceras ou gastrite.</Text>
        <Text style={estilos.texto}>Uso em doses altos ou prolongado pode causar irritação da mucosa gástrica.</Text>

        <NotaImportante />
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default TelaBoldo;