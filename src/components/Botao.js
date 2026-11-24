import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Pressionavel from './Pressionavel';
import { cores, fontes } from '../constants/theme';

// variantes:
//  principal  -> fundo vermelho, texto branco
//  claro      -> fundo branco, texto tinta (usado sobre o vermelho)
//  texto      -> sem fundo, texto tinta
//  textoClaro -> sem fundo, texto branco (usado sobre o vermelho)
export default function Botao({
  texto,
  icone,
  onPress,
  variante = 'principal',
  disabled,
  largo,
  accessibilityLabel,
  accessibilityRole = 'button',
}) {
  const v = disabled ? variantes.desabilitado : variantes[variante];

  return (
    <Pressionavel
      onPress={onPress}
      disabled={disabled}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel ?? texto}
      accessibilityState={{ disabled: !!disabled }}
      estiloExterno={largo ? styles.largo : null}
      style={[styles.botao, v.caixa, largo && styles.largo]}
    >
      {icone && <Ionicons name={icone} size={18} color={v.cor} />}
      <Text style={[styles.texto, { color: v.cor }, icone && styles.comIcone]}>{texto}</Text>
    </Pressionavel>
  );
}

const variantes = {
  principal: { caixa: { backgroundColor: cores.vermelho }, cor: cores.branco },
  claro: { caixa: { backgroundColor: cores.branco }, cor: cores.tinta },
  texto: { caixa: { paddingHorizontal: 4 }, cor: cores.tinta },
  textoClaro: { caixa: { paddingHorizontal: 4 }, cor: cores.branco },
  desabilitado: { caixa: { backgroundColor: cores.linha }, cor: cores.tintaSuave },
};

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 18,
  },
  largo: { alignSelf: 'stretch' },
  texto: { fontFamily: fontes.textoForte, fontSize: 16 },
  comIcone: { marginLeft: 8 },
});
