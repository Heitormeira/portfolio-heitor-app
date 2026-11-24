import { View, Text, StyleSheet } from 'react-native';
import Tela from '../components/Tela';
import { cores, pares, fontes } from '../constants/theme';
import { formacao } from '../data/perfil';

export default function Academica() {
  return (
    <Tela titulo="Experiência Acadêmica" subtitulo="Formação, certificações e idiomas." cor={pares.academica}>
      {formacao.map((f, i) => {
        const ultimo = i === formacao.length - 1;
        return (
          <View key={f.curso} style={styles.marco}>
            <Text style={styles.periodo}>{f.periodo}</Text>

            <View style={styles.trilho}>
              <View style={[styles.marcador, f.atual && styles.marcadorAtual]} />
              {!ultimo && <View style={styles.linha} />}
            </View>

            <View style={[styles.conteudo, ultimo && styles.conteudoUltimo]}>
              <Text style={styles.curso}>{f.curso}</Text>
              <Text style={styles.instituicao}>{f.instituicao}</Text>
              {f.detalhe && <Text style={styles.detalhe}>{f.detalhe}</Text>}
            </View>
          </View>
        );
      })}
    </Tela>
  );
}

const styles = StyleSheet.create({
  marco: { flexDirection: 'row' },
  periodo: {
    width: 84,
    fontFamily: fontes.tituloMedio,
    fontSize: 16,
    lineHeight: 20,
    color: cores.tinta,
    paddingTop: 3,
  },
  trilho: { width: 28, alignItems: 'center' },
  marcador: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: pares.academica,
    backgroundColor: cores.papel,
    marginTop: 5,
  },
  marcadorAtual: { backgroundColor: pares.academica },
  linha: { flex: 1, width: 2, backgroundColor: pares.academica, opacity: 0.35, marginVertical: 4 },
  conteudo: { flex: 1, paddingLeft: 8, paddingBottom: 32 },
  conteudoUltimo: { paddingBottom: 0 },
  curso: { fontFamily: fontes.tituloMedio, fontSize: 23, lineHeight: 26, color: cores.tinta },
  instituicao: { fontFamily: fontes.textoMedio, fontSize: 15, color: cores.tintaSuave, marginTop: 3 },
  detalhe: { fontFamily: fontes.texto, fontSize: 15, lineHeight: 22, color: cores.tinta, marginTop: 6 },
});
