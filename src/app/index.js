import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Listra, { Led } from '../components/Listra';
import Pressionavel from '../components/Pressionavel';
import { cores, pares, fontes, espaco, ledLigado } from '../constants/theme';
import { perfil, experiencias, projetos } from '../data/perfil';

const atual = experiencias.find((e) => e.atual);

// Cada item é uma "porta" do patch panel, com o LED do par do cabo da seção
const portas = [
  { rota: '/sobre', titulo: 'Sobre', descricao: 'Quem sou e tecnologias do app', cor: pares.sobre },
  { rota: '/academica', titulo: 'Acadêmica', descricao: 'Formação e estudos', cor: pares.academica },
  {
    rota: '/profissional',
    titulo: 'Profissional',
    descricao: 'Experiência de trabalho',
    cor: pares.profissional,
    contagem: experiencias.length,
  },
  {
    rota: '/projetos',
    titulo: 'Projetos',
    descricao: 'O que já desenvolvi',
    cor: pares.projetos,
    contagem: projetos.length,
  },
  { rota: '/jogo', titulo: 'Jogo', descricao: 'Jogo de dados para 2 jogadores', cor: pares.jogo },
];

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
    >
      {/* Faixa alvirrubra (camisa do Náutico) com a foto encaixada */}
      <Listra
        cor={cores.vermelho}
        altura={170 + insets.top}
        faixa={26}
        arredondada={false}
      />
      <View style={styles.corpo}>
        <Image
          source={require('../../assets/foto.jpg')}
          style={styles.foto}
          accessibilityLabel={`Foto de ${perfil.nome}`}
        />

        <Text style={styles.nome} accessibilityRole="header">
          {perfil.nome}
        </Text>
        <Text style={styles.cargo}>{perfil.titulo}</Text>
        <View style={styles.linhaLocal}>
          <Ionicons name="location-outline" size={16} color={cores.tintaSuave} />
          <Text style={styles.local}>{perfil.local}</Text>
        </View>

        {atual && (
          <View style={styles.status}>
            <Led cor={ledLigado} />
            <Text style={styles.statusTexto}>
              {atual.cargo} na {atual.empresa}
            </Text>
          </View>
        )}

        <Text style={styles.resumo}>{perfil.resumo}</Text>

        {/* Patch panel: o menu de navegação */}
        <View style={styles.rack}>
          {portas.map((p, i) => (
            <Pressionavel
              key={p.rota}
              escala={0.98}
              onPress={() => router.push(p.rota)}
              accessibilityRole="button"
              accessibilityLabel={
                p.contagem ? `${p.titulo}, ${p.contagem} itens. ${p.descricao}` : `${p.titulo}. ${p.descricao}`
              }
              style={({ pressed }) => [
                styles.porta,
                i > 0 && styles.portaDivisoria,
                pressed && styles.portaPressionada,
              ]}
            >
              <View style={[styles.conector, { borderColor: p.cor }]}>
                <View style={[styles.conectorLed, { backgroundColor: p.cor }]} />
              </View>
              <View style={styles.portaTexto}>
                <Text style={styles.portaTitulo}>{p.titulo}</Text>
                <Text style={styles.portaDescricao}>{p.descricao}</Text>
              </View>
              {p.contagem != null && <Text style={styles.contagem}>{p.contagem}</Text>}
              <Ionicons name="chevron-forward" size={20} color={cores.sobreEscuroSuave} />
            </Pressionavel>
          ))}
        </View>

        <Text style={styles.rodape}>Feito com React Native + Expo Router</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: cores.papel },
  corpo: { paddingHorizontal: espaco.tela },
  foto: {
    width: 128,
    height: 128,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: cores.papel,
    marginTop: -64,
    marginBottom: 18,
  },
  nome: { fontFamily: fontes.titulo, fontSize: 54, lineHeight: 56, color: cores.tinta },
  cargo: { fontFamily: fontes.textoForte, fontSize: 19, color: cores.tinta, marginTop: 2 },
  linhaLocal: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  local: { fontFamily: fontes.texto, fontSize: 15, color: cores.tintaSuave, marginLeft: 4 },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: cores.branco,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: cores.linha,
  },
  statusTexto: { fontFamily: fontes.textoMedio, fontSize: 14, color: cores.tinta, marginLeft: 10 },
  resumo: {
    fontFamily: fontes.texto,
    fontSize: 17,
    lineHeight: 26,
    color: cores.tinta,
    marginTop: 18,
    maxWidth: 560,
  },
  rack: {
    backgroundColor: cores.tinta,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginTop: 32,
  },
  porta: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 72,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  portaDivisoria: { borderTopWidth: 1, borderTopColor: cores.divisoriaEscura },
  portaPressionada: { backgroundColor: 'rgba(255, 255, 255, 0.06)' },
  conector: {
    width: 26,
    height: 22,
    borderRadius: 3,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 3,
    marginRight: 14,
  },
  conectorLed: { width: 10, height: 4, borderRadius: 1 },
  portaTexto: { flex: 1 },
  portaTitulo: { fontFamily: fontes.tituloMedio, fontSize: 22, lineHeight: 26, color: cores.sobreEscuro },
  portaDescricao: { fontFamily: fontes.texto, fontSize: 14, color: cores.sobreEscuroSuave, marginTop: 1 },
  contagem: {
    fontFamily: fontes.titulo,
    fontSize: 22,
    color: cores.sobreEscuro,
    marginRight: 10,
  },
  rodape: {
    fontFamily: fontes.texto,
    fontSize: 13,
    color: cores.tintaSuave,
    marginTop: 24,
  },
});
