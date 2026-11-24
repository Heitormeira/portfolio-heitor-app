import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { Barlow_400Regular, Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { BarlowCondensed_600SemiBold, BarlowCondensed_700Bold } from '@expo-google-fonts/barlow-condensed';
import { cores, fontes } from '../constants/theme';

// Segura a splash até as fontes carregarem (chamado fora do componente, como pede a doc)
SplashScreen.preventAutoHideAsync();

// Navegação principal do app (Expo Router + Stack)
export default function Layout() {
  const [carregou, erro] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    BarlowCondensed_600SemiBold,
    BarlowCondensed_700Bold,
    ...Ionicons.font,
  });

  useEffect(() => {
    if (carregou || erro) {
      SplashScreen.hide();
    }
  }, [carregou, erro]);

  if (!carregou && !erro) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: cores.papel },
          headerTintColor: cores.tinta,
          headerTitleStyle: { fontFamily: fontes.tituloMedio },
          headerShadowVisible: false,
          headerBackTitle: 'Voltar',
          headerBackTitleStyle: { fontFamily: fontes.textoMedio },
          title: '',
          contentStyle: { backgroundColor: cores.papel },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sobre" />
        <Stack.Screen name="academica" />
        <Stack.Screen name="profissional" />
        <Stack.Screen name="projetos" />
        <Stack.Screen name="jogo" />
      </Stack>
    </>
  );
}
