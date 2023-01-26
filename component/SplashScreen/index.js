import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 9000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Início');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View accessible={true}
    accessibilityHint={"Aguarde um pouco, estamos trabalhando para abrir a tela iniciar"}
    accessibilityLabel={"Splash screen"} style={styles.root}>
      <LottieView
        autoPlay
        style={{
          flex: 1,
          backgroundColor: '#0E2600',
        }}
        source={require('../../assets/splash.json')}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;