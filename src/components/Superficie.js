import { View, StyleSheet } from 'react-native';
import Listra from './Listra';
import { cores } from '../constants/theme';

// Superfície branca: só aparece quando agrupa algo de verdade.
// Com `listra`, ganha a faixa do par do cabo no topo.
export default function Superficie({ listra, children, style }) {
  return (
    <View style={[styles.superficie, style]}>
      {listra && <Listra cor={listra} altura={6} arredondada={false} />}
      <View style={styles.conteudo}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  superficie: {
    backgroundColor: cores.branco,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: cores.linha,
    overflow: 'hidden',
  },
  conteudo: { padding: 18 },
});
