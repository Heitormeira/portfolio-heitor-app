import { View, Text, StyleSheet } from 'react-native';
import { cores, fontes } from '../constants/theme';

export default function Tag({ texto, sobreVermelho }) {
  return (
    <View style={[styles.tag, sobreVermelho && styles.tagVermelho]}>
      <Text style={[styles.texto, sobreVermelho && styles.textoVermelho]}>{texto}</Text>
    </View>
  );
}

export function ListaTags({ itens, sobreVermelho }) {
  return (
    <View style={styles.lista}>
      {itens.map((item) => (
        <Tag key={item} texto={item} sobreVermelho={sobreVermelho} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lista: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: {
    backgroundColor: cores.branco,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: cores.linha,
    paddingVertical: 4,
    paddingHorizontal: 9,
    marginRight: 6,
    marginBottom: 6,
  },
  tagVermelho: { backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.45)' },
  texto: { fontFamily: fontes.textoMedio, fontSize: 13, color: cores.tinta },
  textoVermelho: { color: cores.branco },
});
