import { View, Text, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tela, { Secao } from '../components/Tela';
import Superficie from '../components/Superficie';
import Pressionavel from '../components/Pressionavel';
import { Led } from '../components/Listra';
import { ListaTags } from '../components/Tag';
import { cores, pares, fontes } from '../constants/theme';
import { perfil, contatos, habilidades, tecnologiasDoApp } from '../data/perfil';

export default function Sobre() {
  return (
    <Tela titulo="Sobre mim" subtitulo={perfil.resumo} cor={pares.sobre}>
      <Text style={styles.nome}>{perfil.nome}</Text>
      <Text style={styles.meta}>
        {perfil.titulo}, {perfil.local}
      </Text>
      <Text style={styles.bio}>{perfil.bio}</Text>

      <Secao>Contato</Secao>
      <View style={styles.contatos}>
        {contatos.map((c, i) => (
          <Pressionavel
            key={c.nome}
            escala={0.98}
            onPress={() => Linking.openURL(c.url)}
            accessibilityRole="link"
            accessibilityLabel={`${c.nome}: ${c.valor}`}
            style={({ pressed }) => [
              styles.contato,
              i > 0 && styles.contatoDivisoria,
              pressed && styles.contatoPressionado,
            ]}
          >
            <Ionicons name={c.icone} size={22} color={cores.tinta} />
            <View style={styles.contatoTexto}>
              <Text style={styles.contatoNome}>{c.nome}</Text>
              <Text style={styles.contatoValor} numberOfLines={1}>
                {c.valor}
              </Text>
            </View>
            <Ionicons name="open-outline" size={16} color={cores.tintaSuave} />
          </Pressionavel>
        ))}
      </View>

      <Secao>Habilidades</Secao>
      {habilidades.map((h) => (
        <View key={h.grupo} style={styles.grupo}>
          <Text style={styles.grupoTitulo}>{h.grupo}</Text>
          <ListaTags itens={h.itens} />
        </View>
      ))}

      <Secao>Tecnologias usadas neste app</Secao>
      <Superficie listra={pares.sobre}>
        {tecnologiasDoApp.map((t, i) => (
          <View key={t.grupo} style={[styles.material, i > 0 && styles.materialDivisoria]}>
            <Text style={styles.grupoTitulo}>{t.grupo}</Text>
            <View style={styles.colunas}>
              {t.itens.map((item) => (
                <View key={item} style={styles.item}>
                  <Led cor={pares.sobre} tamanho={6} style={styles.itemLed} />
                  <Text style={styles.itemTexto}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Superficie>
    </Tela>
  );
}

const styles = StyleSheet.create({
  nome: { fontFamily: fontes.titulo, fontSize: 28, lineHeight: 32, color: cores.tinta },
  meta: { fontFamily: fontes.textoMedio, fontSize: 15, color: cores.tintaSuave, marginTop: 2 },
  bio: {
    fontFamily: fontes.texto,
    fontSize: 16,
    lineHeight: 25,
    color: cores.tinta,
    marginTop: 14,
    maxWidth: 600,
  },
  contatos: {
    backgroundColor: cores.branco,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: cores.linha,
    overflow: 'hidden',
  },
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    paddingHorizontal: 16,
  },
  contatoDivisoria: { borderTopWidth: 1, borderTopColor: cores.linha },
  contatoPressionado: { backgroundColor: cores.papel },
  contatoTexto: { flex: 1, marginLeft: 14, marginRight: 8 },
  contatoNome: { fontFamily: fontes.texto, fontSize: 13, color: cores.tintaSuave },
  contatoValor: { fontFamily: fontes.textoForte, fontSize: 16, color: cores.tinta },
  grupo: { marginBottom: 18 },
  grupoTitulo: {
    fontFamily: fontes.tituloMedio,
    fontSize: 19,
    lineHeight: 22,
    color: cores.tinta,
    marginBottom: 10,
  },
  material: { paddingBottom: 14 },
  materialDivisoria: { borderTopWidth: 1, borderTopColor: cores.linha, paddingTop: 16 },
  colunas: { flexDirection: 'row', flexWrap: 'wrap' },
  item: { width: '50%', flexDirection: 'row', alignItems: 'flex-start', paddingRight: 8, marginBottom: 8 },
  itemLed: { marginTop: 7, marginRight: 8 },
  itemTexto: { flex: 1, fontFamily: fontes.texto, fontSize: 14, lineHeight: 20, color: cores.tinta },
});
