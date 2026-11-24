import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { cores } from '../constants/theme';

// Faixa com listras verticais alternando uma cor e branco.
// Serve para a camisa do Náutico (Home) e para o par do cabo de cada tela.
export default function Listra({ cor, altura = 8, faixa = 10, arredondada = true, style }) {
  const { width } = useWindowDimensions();
  const quantidade = Math.ceil(width / faixa) + 2;

  return (
    <View
      accessible={false}
      importantForAccessibility="no-hide-descendants"
      style={[
        styles.faixa,
        { height: altura },
        arredondada && { borderRadius: altura / 2, borderWidth: 1, borderColor: cores.linha },
        style,
      ]}
    >
      {Array.from({ length: quantidade }, (_, i) => (
        <View
          key={i}
          style={{ width: faixa, height: '100%', backgroundColor: i % 2 === 0 ? cor : cores.branco }}
        />
      ))}
    </View>
  );
}

// "LED" pequeno: indicador quadrado de cor
export function Led({ cor, tamanho = 8, style }) {
  return (
    <View
      style={[
        { width: tamanho, height: tamanho, borderRadius: 2, backgroundColor: cor },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  faixa: { flexDirection: 'row', overflow: 'hidden', backgroundColor: cores.branco },
});
