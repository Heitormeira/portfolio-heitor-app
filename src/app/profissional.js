import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tela from '../components/Tela';
import Superficie from '../components/Superficie';
import { Led } from '../components/Listra';
import { cores, pares, fontes, ledLigado } from '../constants/theme';
import { experiencias } from '../data/perfil';

export default function Profissional() {
  return (
    <Tela
      titulo="Experiência Profissional"
      subtitulo="Onde estou colocando a teoria em prática."
      cor={pares.profissional}
    >
      {experiencias.map((e, i) =>
        e.atual ? (
          <Superficie key={e.empresa} listra={pares.profissional} style={styles.atual}>
            <Experiencia e={e} destaque />
          </Superficie>
        ) : (
          <View key={e.empresa} style={[styles.passada, i > 0 && styles.divisoria]}>
            <Experiencia e={e} />
          </View>
        ),
      )}
    </Tela>
  );
}

function Experiencia({ e, destaque }) {
  return (
    <>
      <Text style={[styles.empresa, destaque && styles.empresaDestaque]} accessibilityRole="header">
        {e.empresa}
      </Text>
      <Text style={styles.cargo}>{e.cargo}</Text>
      <Text style={styles.area}>{e.area}</Text>

      <View style={styles.meta}>
        {e.atual && <Led cor={ledLigado} style={styles.metaLed} />}
        <Text style={styles.metaTexto}>{e.periodo}</Text>
        <Ionicons name="location-outline" size={15} color={cores.tintaSuave} style={styles.metaIcone} />
        <Text style={styles.metaTexto}>{e.local}</Text>
      </View>

      {e.atividades.map((a) => (
        <View key={a} style={styles.atividade}>
          <Led cor={pares.profissional} tamanho={7} style={styles.marcador} />
          <Text style={styles.atividadeTexto}>{a}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  atual: { marginBottom: 12 },
  passada: { paddingVertical: 24 },
  divisoria: { borderTopWidth: 1, borderTopColor: cores.linha },
  empresa: { fontFamily: fontes.titulo, fontSize: 30, lineHeight: 33, color: cores.tinta },
  empresaDestaque: { fontSize: 38, lineHeight: 41 },
  cargo: { fontFamily: fontes.textoForte, fontSize: 17, color: cores.tinta, marginTop: 4 },
  area: { fontFamily: fontes.texto, fontSize: 15, color: cores.tintaSuave, marginTop: 1 },
  meta: { flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 14 },
  metaLed: { marginRight: 8 },
  metaIcone: { marginLeft: 14, marginRight: 3 },
  metaTexto: { fontFamily: fontes.textoMedio, fontSize: 14, color: cores.tinta },
  atividade: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9 },
  marcador: { marginTop: 8, marginRight: 12 },
  atividadeTexto: { flex: 1, fontFamily: fontes.texto, fontSize: 16, lineHeight: 23, color: cores.tinta },
});
