import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicio from "./component/TelaInicio";
import TelaAbacateiro from "./component/TelaAbacateiro";
import TelaAbobora from "./component/TelaAbobora";
import TelaBoldo from "./component/TelaBoldo";
import TelaPicaoPreto from "./component/TelaPicaoPreto";
import TelaPinhao from "./component/TelaPinhao";
import TelaCarqueja from "./component/TelaCarqueja";
import TelaMirabilis from "./component/TelaMirabilis";
import TelaOcimum from "./component/TelaOcimum";
import TelaChanana from "./component/TelaChanana";
import TelaErvaSaoJoao from "./component/TealaEvaSaoJoao";
import { StatusBar } from "expo-status-bar";



const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#3cb371" />
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#38BDF2'
        },
        headerTintColor: '#F0F0F0',
        headerTitleStyle: {
          fontWeight: '700',
        }
      }}
      >
        <Stack.Screen name="Início" component={TelaInicio} />
        <Stack.Screen name="Abacatéiro" component={TelaAbacateiro} />
        <Stack.Screen name='Abóbora' component={TelaAbobora}/>
        <Stack.Screen name='Boldo' component={TelaBoldo} />
        <Stack.Screen name='Picão Preto' component={TelaPicaoPreto} />
        <Stack.Screen name='Pixão' component={TelaPinhao} />
        <Stack.Screen name='Carqueja' component={TelaCarqueja} />
        <Stack.Screen name='Mirabilis' component={TelaMirabilis} />
        <Stack.Screen name='Ocimum' component={TelaOcimum} />
        <Stack.Screen name='Chanana' component={TelaChanana} 
         options={{ animationEnabled: false,}}/>
        <Stack.Screen name='Erva de são joão' component={TelaErvaSaoJoao} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


