// Identidade "patch panel alvirrubro":
// listras vermelhas e brancas do Náutico + as listras dos pares de um cabo de rede (T568B).

export const cores = {
  papel: '#F2F3F5', // fundo do app
  branco: '#FFFFFF', // superfícies e listras brancas
  tinta: '#16202E', // texto e o "rack" (único bloco escuro)
  tintaSuave: '#5B6676', // texto secundário
  linha: '#D9DDE3', // divisórias finas
  vermelho: '#C8102E', // Náutico: Home, Jogo e ações principais

  // Texto claro, usado só sobre a Tinta (rack, placar) e sobre o vermelho
  sobreEscuro: '#FFFFFF',
  sobreEscuroSuave: '#A9B3C1',
  divisoriaEscura: 'rgba(255, 255, 255, 0.10)',
};

// Cores dos pares do cabo: SÓ em listras e LEDs, nunca como cor de texto
export const pares = {
  sobre: '#2F6FD6', // branco-azul
  academica: '#2E9E5B', // branco-verde
  profissional: '#E8772E', // branco-laranja
  projetos: '#8A5A3B', // branco-marrom
  jogo: cores.vermelho,
};

// LED de "em operação" (emprego atual)
export const ledLigado = '#2E9E5B';

// Nomes registrados no useFonts do _layout
export const fontes = {
  titulo: 'BarlowCondensed_700Bold',
  tituloMedio: 'BarlowCondensed_600SemiBold',
  texto: 'Barlow_400Regular',
  textoMedio: 'Barlow_500Medium',
  textoForte: 'Barlow_600SemiBold',
};

export const espaco = {
  p: 8,
  m: 16,
  g: 24,
  tela: 20,
};
