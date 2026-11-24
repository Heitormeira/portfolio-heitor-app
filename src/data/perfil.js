// Todo o conteúdo do portfólio fica aqui.
// As telas só leem estes dados: para mudar um texto, edite este arquivo.

export const perfil = {
  nome: 'Heitor Meira',
  titulo: 'Redes e Infraestrutura',
  local: 'Recife, Pernambuco',
  resumo:
    'Estagiário de Redes na UM Telecom (N2 – CMC) e estudante de Ciência da Computação na UNICAP.',
  bio:
    'Trabalho com provisionamento de clientes e configuração de equipamentos de operadora (MikroTik, Datacom, Huawei e Juniper): VLANs, endereçamento de gerência, upgrades de banda e correção de configurações. Comecei no suporte de TI do SINDHOSPE e hoje também desenvolvo sistemas web em Next.js e scripts em Python. Estou estudando para a CCNA 200-301 e mantenho laboratórios com Mininet, Docker e Wireshark. Fora do trabalho, sou torcedor do Clube Náutico Capibaribe.',
};

export const contatos = [
  { nome: 'E-mail', valor: 'heitormeira14@gmail.com', url: 'mailto:heitormeira14@gmail.com', icone: 'mail-outline' },
  { nome: 'LinkedIn', valor: 'in/heitormeira', url: 'https://linkedin.com/in/heitormeira/', icone: 'logo-linkedin' },
  { nome: 'GitHub', valor: 'Heitormeira', url: 'https://github.com/Heitormeira', icone: 'logo-github' },
  { nome: 'Portfólio web', valor: 'portfolio-heitormeira.vercel.app', url: 'https://portfolio-heitormeira.vercel.app/', icone: 'globe-outline' },
];

export const experiencias = [
  {
    cargo: 'Estagiário de Redes',
    area: 'N2 · CMC',
    empresa: 'UM Telecom',
    local: 'Recife/PE',
    periodo: 'Out 2026 – atual',
    atual: true,
    atividades: [
      'Provisionamento e configuração de serviços de clientes',
      'Manutenção de equipamentos de operadora',
      'Configuração de VLANs, portas e interfaces',
      'Ativação, bloqueio e cancelamento de clientes',
      'Upgrades e downgrades de banda com análise de viabilidade',
      'Migrações e correção de inconsistências de configuração',
      'Documentação das configurações',
    ],
  },
  {
    cargo: 'Estagiário de TI',
    area: 'Infraestrutura e suporte',
    empresa: 'SINDHOSPE',
    local: 'Recife/PE',
    periodo: '2026',
    atividades: [
      'Suporte a usuários e sistemas',
      'Diagnóstico de conectividade',
      'Análise de infraestrutura',
      'Tratamento de dados com Excel e Power BI',
      'Relatórios e documentação de rotina',
    ],
  },
  {
    cargo: 'Atendente',
    area: 'Experiência internacional',
    empresa: 'City Beach',
    local: 'Austrália',
    periodo: '2024',
    atividades: ['Atendimento ao cliente em inglês, em ambiente multicultural'],
  },
];

export const formacao = [
  {
    curso: 'Bacharelado em Ciência da Computação',
    instituicao: 'UNICAP',
    periodo: '2024.2 – 2028.2',
    detalhe: 'Cursando o 5º período',
    atual: true,
  },
  {
    curso: 'Cisco CCNA 200-301',
    instituicao: 'Certificação',
    periodo: 'Em preparação',
    atual: true,
  },
  {
    curso: 'Inglês avançado',
    instituicao: 'ILSC Australia',
    periodo: '2024',
  },
  {
    curso: 'Ensino médio',
    instituicao: 'Colégio Damas',
    periodo: '2021 – 2023',
  },
];

export const habilidades = [
  {
    grupo: 'Redes e telecom',
    itens: ['MikroTik RouterOS (WinBox)', 'Datacom', 'Huawei', 'Juniper', 'Cisco Packet Tracer', 'VLAN', 'TCP/IP', 'Roteamento', 'QoS', 'Zabbix', 'Mininet', 'Open vSwitch'],
  },
  {
    grupo: 'Análise e operação',
    itens: ['Wireshark', 'tcpdump', 'Scapy', 'MobaXterm', 'Provisionamento de clientes', 'Documentação técnica'],
  },
  {
    grupo: 'Sistemas e código',
    itens: ['Linux', 'Docker', 'Python', 'C', 'Java', 'JavaScript', 'Bash', 'Git'],
  },
];

export const projetos = [
  {
    titulo: 'Jogo de Dados',
    descricao: 'Jogo para 2 jogadores em 5 rodadas, rodando nativamente neste app. Vence quem tirar a maior soma.',
    tags: ['React Native', 'Expo', 'useState'],
    github: 'https://github.com/Heitormeira/jogo-dados21',
    rota: '/jogo',
  },
  {
    titulo: 'Portal SINDHOSPE',
    descricao: 'Dashboard CNES/DATASUS para associados consultarem leitos, serviços e habilitações, comparando com dados municipais e estaduais.',
    tags: ['Next.js', 'Node.js', 'Express', 'Firebase'],
    demo: 'https://sindhospe-frontend.vercel.app',
    github: 'https://github.com/Heitormeira/sindhospe-backend',
  },
  {
    titulo: 'Laboratório de rede corporativa',
    descricao: 'Rede simulada com 3 switches e 7 hosts, rotas estáticas, controle de banda e latência e testes de vazão.',
    tags: ['Mininet', 'Open vSwitch', 'Docker', 'Python'],
    github: 'https://github.com/Heitormeira/lab-mininet-docker-networking',
  },
  {
    titulo: 'Análise de tráfego',
    descricao: 'Capturas guiadas em 8 cenários de protocolos e um analisador em Python que detecta SYN flood, RST e ARP spoofing.',
    tags: ['tcpdump', 'Wireshark', 'Scapy'],
    github: 'https://github.com/Heitormeira/wireshark-traffic-analysis',
  },
  {
    titulo: 'Gestão de Sócios CNC',
    descricao: 'Sistema de gestão de sócios em Java com persistência e lógica concorrente. Projeto em equipe.',
    tags: ['Java', 'POO', 'Threads'],
    github: 'https://github.com/joaodafontequeiroz/gestao-socios-cnc',
  },
  {
    titulo: 'HashGuard System',
    descricao: 'Sistema de verificação de integridade em C com tabela hash e manipulação direta de memória. Projeto em equipe.',
    tags: ['C', 'Tabela hash', 'Algoritmos'],
    github: 'https://github.com/joaodafontequeiroz/projeto-Tabela-Hash-estrutura-de-dados-',
  },
  {
    titulo: 'Meu Perfil',
    descricao: 'Meu primeiro app em Expo: nome, foto e mini bio, publicado com EAS Update.',
    tags: ['React Native', 'Expo'],
    github: 'https://github.com/Heitormeira/meu-perfil',
  },
];

// Tecnologias usadas para construir ESTE app (exigência da tela Sobre)
export const tecnologiasDoApp = [
  { grupo: 'Base', itens: ['React Native 0.88', 'React 19', 'JavaScript (ES6+)', 'Expo SDK 58'] },
  { grupo: 'Navegação', itens: ['Expo Router', 'Stack Navigator', 'react-native-screens', 'react-native-safe-area-context', 'expo-linking', 'expo-constants'] },
  { grupo: 'Interface', itens: ['StyleSheet', 'View, Text, Image', 'ScrollView', 'Pressable', '@expo/vector-icons (Ionicons)', 'expo-status-bar', 'useWindowDimensions'] },
  { grupo: 'Fontes e abertura', itens: ['expo-font (useFonts)', '@expo-google-fonts/barlow', '@expo-google-fonts/barlow-condensed', 'expo-splash-screen'] },
  { grupo: 'Animação e acessibilidade', itens: ['Animated (toque e dados)', 'Easing', 'AccessibilityInfo (reduzir movimento)', 'Rótulos de acessibilidade'] },
  { grupo: 'Lógica', itens: ['Hooks (useState, useEffect)', 'Hook próprio (useReduzirMovimento)', 'Componentes reutilizáveis', 'Props', 'Math.random (jogo)', 'Linking (abrir links)'] },
  { grupo: 'Publicação e ferramentas', itens: ['EAS CLI', 'EAS Update (over-the-air)', 'expo-updates', 'Expo Go', 'Git e GitHub', 'VS Code', 'Node.js e npm'] },
];
