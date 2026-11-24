import { useState } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import Tela from '../components/Tela';
import Dado from '../components/Dado';
import Botao from '../components/Botao';
import Listra, { Led } from '../components/Listra';
import useReduzirMovimento from '../hooks/useReduzirMovimento';
import { cores, pares, fontes } from '../constants/theme';

const TOTAL_RODADAS = 5;

function sortear() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Jogo() {
  const [rodada, setRodada] = useState(1);
  const [vez, setVez] = useState(1);
  const [dadosJ1, setDadosJ1] = useState([1, 1]);
  const [dadosJ2, setDadosJ2] = useState([1, 1]);
  const [resultado, setResultado] = useState('');
  const [pontosJ1, setPontosJ1] = useState(0);
  const [pontosJ2, setPontosJ2] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [fim, setFim] = useState(false);

  function jogarJogador1() {
    setDadosJ1([sortear(), sortear()]);
    setResultado('');
    setVez(2);
  }

  function jogarJogador2() {
    const novos = [sortear(), sortear()];
    setDadosJ2(novos);

    const soma1 = dadosJ1[0] + dadosJ1[1];
    const soma2 = novos[0] + novos[1];

    if (soma1 > soma2) {
      setResultado(`Rodada ${rodada}: Jogador 1 venceu (${soma1} x ${soma2})`);
      setPontosJ1(pontosJ1 + 1);
    } else if (soma2 > soma1) {
      setResultado(`Rodada ${rodada}: Jogador 2 venceu (${soma1} x ${soma2})`);
      setPontosJ2(pontosJ2 + 1);
    } else {
      setResultado(`Rodada ${rodada}: Empate (${soma1} x ${soma2})`);
      setEmpates(empates + 1);
    }

    if (rodada === TOTAL_RODADAS) {
      setFim(true);
    } else {
      setRodada(rodada + 1);
      setVez(1);
    }
  }

  function jogarNovamente() {
    setRodada(1);
    setVez(1);
    setDadosJ1([1, 1]);
    setDadosJ2([1, 1]);
    setResultado('');
    setPontosJ1(0);
    setPontosJ2(0);
    setEmpates(0);
    setFim(false);
  }

  let mensagemFinal = 'Empate geral!';
  if (pontosJ1 > pontosJ2) mensagemFinal = 'Jogador 1 venceu a partida!';
  if (pontosJ2 > pontosJ1) mensagemFinal = 'Jogador 2 venceu a partida!';

  // rodadas já disputadas (para os 5 marcadores do placar)
  const disputadas = fim ? TOTAL_RODADAS : rodada - 1;

  return (
    <Tela
      titulo="Jogo de Dados"
      subtitulo="2 jogadores · 5 rodadas · vence a maior soma dos dois dados."
      cor={pares.jogo}
    >
      {/* Placar de estádio */}
      <View style={styles.placar} accessible accessibilityLabel={`Placar: Jogador 1 ${pontosJ1}, Jogador 2 ${pontosJ2}. Empates: ${empates}. ${fim ? 'Fim de jogo' : `Rodada ${rodada} de ${TOTAL_RODADAS}`}`}>
        <View style={styles.placarLinha}>
          <View style={styles.time}>
            <Text style={styles.timeNome}>Jogador 1</Text>
            <Text style={styles.pontos}>{pontosJ1}</Text>
          </View>
          <Text style={styles.versus}>x</Text>
          <View style={[styles.time, styles.timeDireita]}>
            <Text style={styles.timeNome}>Jogador 2</Text>
            <Text style={styles.pontos}>{pontosJ2}</Text>
          </View>
        </View>

        <View style={styles.placarRodape}>
          <Text style={styles.rodada}>
            {fim ? 'Fim de jogo' : `Rodada ${rodada} de ${TOTAL_RODADAS}`}
          </Text>
          <View style={styles.marcadores}>
            {Array.from({ length: TOTAL_RODADAS }, (_, i) => (
              <View
                key={i}
                style={[
                  styles.marcador,
                  i < disputadas && styles.marcadorFeito,
                  !fim && i === rodada - 1 && styles.marcadorAtual,
                ]}
              />
            ))}
          </View>
        </View>
        <Text style={styles.empates}>Empates: {empates}</Text>
      </View>

      {resultado !== '' && (
        <View style={styles.resultado} accessibilityLiveRegion="polite">
          <Text style={styles.resultadoTexto}>{resultado}</Text>
        </View>
      )}

      {fim && (
        <View style={styles.final} accessibilityLiveRegion="polite">
          <Listra cor={cores.vermelho} altura={28} faixa={14} arredondada={false} />
          <View style={styles.finalCorpo}>
            <Text style={styles.finalTitulo}>{mensagemFinal}</Text>
            <View style={styles.finalBotao}>
              <Botao icone="refresh" texto="Jogar Novamente" onPress={jogarNovamente} largo />
            </View>
          </View>
        </View>
      )}

      <Jogador nome="Jogador 1" dados={dadosJ1} ativo={vez === 1 && !fim} onJogar={jogarJogador1} />
      <Jogador nome="Jogador 2" dados={dadosJ2} ativo={vez === 2 && !fim} onJogar={jogarJogador2} />
    </Tela>
  );
}

function Jogador({ nome, dados, ativo, onJogar }) {
  const reduzirMovimento = useReduzirMovimento();
  const [giro] = useState(() => new Animated.Value(0));

  function jogar() {
    if (!reduzirMovimento) {
      giro.setValue(0);
      const passo = (valor, duracao) =>
        Animated.timing(giro, {
          toValue: valor,
          duration: duracao,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        });
      Animated.sequence([passo(1, 60), passo(-1, 70), passo(0.5, 60), passo(0, 80)]).start();
    }
    onJogar();
  }

  const rotacao = giro.interpolate({ inputRange: [-1, 1], outputRange: ['-14deg', '14deg'] });

  return (
    <View style={[styles.jogador, ativo ? styles.jogadorAtivo : styles.jogadorEspera]}>
      <View style={styles.jogadorTopo}>
        <View style={styles.jogadorNomeLinha}>
          <Led cor={ativo ? cores.vermelho : cores.linha} style={styles.jogadorLed} />
          <Text style={styles.jogadorNome}>{nome}</Text>
        </View>
        <Text style={styles.soma}>Soma: {dados[0] + dados[1]}</Text>
      </View>

      <Animated.View style={[styles.dados, { transform: [{ rotate: rotacao }] }]}>
        <Dado valor={dados[0]} />
        <Dado valor={dados[1]} />
      </Animated.View>

      <Botao
        icone="dice"
        texto={`Jogar (${nome})`}
        onPress={jogar}
        disabled={!ativo}
        largo
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placar: {
    backgroundColor: cores.tinta,
    borderRadius: 8,
    padding: 20,
    marginBottom: 14,
  },
  placarLinha: { flexDirection: 'row', alignItems: 'flex-end' },
  time: { flex: 1 },
  timeDireita: { alignItems: 'flex-end' },
  timeNome: { fontFamily: fontes.textoMedio, fontSize: 15, color: cores.sobreEscuroSuave },
  pontos: { fontFamily: fontes.titulo, fontSize: 72, lineHeight: 76, color: cores.sobreEscuro },
  versus: {
    fontFamily: fontes.tituloMedio,
    fontSize: 28,
    color: cores.sobreEscuroSuave,
    paddingBottom: 14,
    paddingHorizontal: 12,
  },
  placarRodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: cores.divisoriaEscura,
    paddingTop: 14,
    marginTop: 8,
  },
  rodada: { fontFamily: fontes.tituloMedio, fontSize: 20, color: cores.sobreEscuro },
  marcadores: { flexDirection: 'row', gap: 6 },
  marcador: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  marcadorFeito: { backgroundColor: cores.branco, borderColor: cores.branco },
  marcadorAtual: { backgroundColor: cores.vermelho, borderColor: cores.vermelho },
  empates: { fontFamily: fontes.texto, fontSize: 14, color: cores.sobreEscuroSuave, marginTop: 6 },

  resultado: {
    backgroundColor: cores.branco,
    borderLeftWidth: 5,
    borderLeftColor: cores.vermelho,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  resultadoTexto: { fontFamily: fontes.textoForte, fontSize: 16, color: cores.tinta },

  final: {
    backgroundColor: cores.branco,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: cores.linha,
    overflow: 'hidden',
    marginBottom: 14,
  },
  finalCorpo: { padding: 20, alignItems: 'center' },
  finalTitulo: {
    fontFamily: fontes.titulo,
    fontSize: 30,
    lineHeight: 34,
    color: cores.tinta,
    textAlign: 'center',
  },
  finalBotao: { alignSelf: 'stretch', marginTop: 18 },

  jogador: {
    backgroundColor: cores.branco,
    borderRadius: 8,
    borderWidth: 2,
    padding: 18,
    marginBottom: 14,
  },
  jogadorAtivo: { borderColor: cores.vermelho },
  jogadorEspera: { borderColor: cores.linha, opacity: 0.7 },
  jogadorTopo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  jogadorNomeLinha: { flexDirection: 'row', alignItems: 'center' },
  jogadorLed: { marginRight: 10 },
  jogadorNome: { fontFamily: fontes.tituloMedio, fontSize: 24, color: cores.tinta },
  soma: { fontFamily: fontes.textoMedio, fontSize: 15, color: cores.tintaSuave },
  dados: { flexDirection: 'row', justifyContent: 'center', marginVertical: 18 },
});
