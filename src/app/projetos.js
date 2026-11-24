import { View, Text, Linking, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Tela from '../components/Tela';
import Botao from '../components/Botao';
import Listra, { Led } from '../components/Listra';
import { ListaTags } from '../components/Tag';
import { cores, pares, fontes } from '../constants/theme';
import { projetos } from '../data/perfil';

const destaque = projetos.find((p) => p.rota);
const demais = projetos.filter((p) => p !== destaque);

export default function Projetos() {
  return (
    <Tela titulo="Projetos" subtitulo="Redes, sistemas web e projetos da faculdade." cor={pares.projetos}>
      {destaque && (
        <View style={styles.destaque}>
          <Listra cor={cores.vermelho} altura={10} faixa={14} arredondada={false} />
          <View style={styles.destaqueCorpo}>
            <Text style={styles.destaqueTitulo} accessibilityRole="header">
              {destaque.titulo}
            </Text>
            <Text style={styles.destaqueDescricao}>{destaque.descricao}</Text>
            <ListaTags itens={destaque.tags} sobreVermelho />
            <View style={styles.botoes}>
              <Botao
                variante="claro"
                icone="play"
                texto="Jogar"
                onPress={() => router.push(destaque.rota)}
                accessibilityLabel={`Jogar ${destaque.titulo}`}
              />
              {destaque.github && (
                <Botao
                  variante="textoClaro"
                  icone="logo-github"
                  texto="GitHub"
                  accessibilityRole="link"
                  accessibilityLabel={`Código de ${destaque.titulo} no GitHub`}
                  onPress={() => Linking.openURL(destaque.github)}
                />
              )}
            </View>
          </View>
        </View>
      )}

      {demais.map((p, i) => (
        <View key={p.titulo} style={[styles.projeto, i > 0 && styles.divisoria]}>
          <View style={styles.tituloLinha}>
            <Led cor={pares.projetos} style={styles.led} />
            <Text style={styles.titulo} accessibilityRole="header">
              {p.titulo}
            </Text>
          </View>
          <Text style={styles.descricao}>{p.descricao}</Text>
          <ListaTags itens={p.tags} />

          <View style={styles.botoes}>
            {p.demo && (
              <Botao
                variante="texto"
                icone="open-outline"
                texto="Demo"
                accessibilityRole="link"
                accessibilityLabel={`Abrir demo de ${p.titulo}`}
                onPress={() => Linking.openURL(p.demo)}
              />
            )}
            {p.github && (
              <Botao
                variante="texto"
                icone="logo-github"
                texto="GitHub"
                accessibilityRole="link"
                accessibilityLabel={`Código de ${p.titulo} no GitHub`}
                onPress={() => Linking.openURL(p.github)}
              />
            )}
          </View>
        </View>
      ))}
    </Tela>
  );
}

const styles = StyleSheet.create({
  destaque: {
    backgroundColor: cores.vermelho,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  destaqueCorpo: { padding: 20 },
  destaqueTitulo: { fontFamily: fontes.titulo, fontSize: 36, lineHeight: 39, color: cores.branco },
  destaqueDescricao: {
    fontFamily: fontes.texto,
    fontSize: 16,
    lineHeight: 24,
    color: cores.branco,
    marginTop: 6,
    marginBottom: 14,
  },
  botoes: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginTop: 10 },
  projeto: { paddingVertical: 24 },
  divisoria: { borderTopWidth: 1, borderTopColor: cores.linha },
  tituloLinha: { flexDirection: 'row', alignItems: 'center' },
  led: { marginRight: 10 },
  titulo: { flex: 1, fontFamily: fontes.tituloMedio, fontSize: 25, lineHeight: 28, color: cores.tinta },
  descricao: {
    fontFamily: fontes.texto,
    fontSize: 16,
    lineHeight: 24,
    color: cores.tinta,
    marginTop: 6,
    marginBottom: 12,
    maxWidth: 600,
  },
});
