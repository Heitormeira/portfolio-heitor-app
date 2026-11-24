import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Listra from './Listra';
import { cores, fontes, espaco } from '../constants/theme';

// Container das telas internas: título grande + listra do par do cabo da seção
export default function Tela({ titulo, subtitulo, cor, children }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={[styles.conteudo, { paddingBottom: insets.bottom + 40 }]}
    >
      {titulo && (
        <View style={styles.cabecalho}>
          <Text style={styles.titulo} accessibilityRole="header">
            {titulo}
          </Text>
          {subtitulo && <Text style={styles.subtitulo}>{subtitulo}</Text>}
          <Listra cor={cor} style={styles.listra} />
        </View>
      )}
      {children}
    </ScrollView>
  );
}

// Título de seção dentro de uma tela
export function Secao({ children, style }) {
  return (
    <Text style={[styles.secao, style]} accessibilityRole="header">
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: cores.papel },
  conteudo: { paddingHorizontal: espaco.tela, paddingTop: 4 },
  cabecalho: { marginBottom: 28 },
  titulo: { fontFamily: fontes.titulo, fontSize: 40, lineHeight: 44, color: cores.tinta },
  subtitulo: {
    fontFamily: fontes.texto,
    fontSize: 16,
    lineHeight: 24,
    color: cores.tintaSuave,
    marginTop: 6,
    maxWidth: 560,
  },
  listra: { marginTop: 18 },
  secao: {
    fontFamily: fontes.titulo,
    fontSize: 26,
    lineHeight: 30,
    color: cores.tinta,
    marginTop: 36,
    marginBottom: 14,
  },
});
