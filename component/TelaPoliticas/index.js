import React from 'react';
import { View, Text, Linking, ScrollView } from 'react-native';
import estilos from '../../assets/estilos/estilos';

export default function TelaPoliticas(){
    return(
        <ScrollView>
        <View accessible={true}
    accessibilityLabel={"Texto políticas de privacidade"} style={estilos.container}>
            <Text style={estilos.titulo}>Políticas de Privacidade</Text>

            <Text style={estilos.texto}>Lucas Manuel construiu o aplicativo Conheça Estas Plantas como
                 um aplicativo suportado por anúncios.
                 Este SERVIÇO é fornecido por Lucas Manuel sem nenhum custo e destina-se
                  a ser usado como está.</Text>
            <Text style={estilos.texto}>Esta página é usada para informar os visitantes sobre minhas políticas de coleta,
                 uso e divulgação de informações pessoais, caso alguém decida usar meu serviço.</Text>
            <Text style={estilos.texto}>
            Se você optar por usar meu serviço, concorda com a coleta e o uso de informações relacionadas
             a esta política. As Informações Pessoais que eu coleto são usadas para fornecer e melhorar o
              Serviço. Não usarei ou compartilharei suas informações com ninguém, exceto conforme descrito
               nesta Política de Privacidade.
            </Text>
            <Text style={estilos.texto}>
            Os termos utilizados nesta Política de Privacidade têm os mesmos significados que em nossos 
            Termos e Condições, que estão
             acessíveis em Conheça Estas Plantas, salvo disposição em contrário nesta Política de
              Privacidade.
            </Text>
            <Text style={estilos.subtitulo}>
            Coleta e uso de informações
            </Text>

            <Text style={estilos.texto}>
            Para uma melhor experiência, ao usar nosso Serviço, posso exigir que você nos forneça certas informações
             de identificação pessoal, incluindo, entre outras, Atividades Localização geográfica Informações 
             de emprego, Informações médicas, Informações educacionais, ID de pedido de comércio eletrônico,
              Cookie de endereço IP, Localização de ID dados,. As informações que solicito serão mantidas em 
              seu dispositivo e não serão coletadas por mim de forma alguma.
            </Text>
            <Text style={estilos.texto}>O aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo.</Text>
            <Text style={{color: '##00274E'}} onPress={()=>Linking.openURL('https://www.blogger.com/blog/post/edit/preview/5967161190367915043/4782896377028068248') }>Leia as nossas políticas em inglês para mais detalhes.</Text>
        </View>
        </ScrollView>

    )
}