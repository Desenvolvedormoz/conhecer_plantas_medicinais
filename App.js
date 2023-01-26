import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import SplashScreen from "./component/SplashScreen";
import TelaPoliticas from "./component/TelaPoliticas";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App(){
  
  return(
  <GestureHandlerRootView style={{ flex: 1 }}>
    
    <NavigationContainer>
      <StatusBar backgroundColor="#001200" />
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0E2600'
        },
        headerTintColor: '#F0F0F0',
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}
      >
        <Stack.Screen name="splash" component={SplashScreen} options={{
          headerShown: false,
        }} />
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
        <Stack.Screen name="Política" component={TelaPoliticas} />
         
      </Stack.Navigator>
      <StatusBar backgroundColor="#001200" />
    </NavigationContainer>
   
    </GestureHandlerRootView>
  )
}


