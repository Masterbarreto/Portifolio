import type { Skill, Project, TimelineEvent, Certificate, Materia } from './types';
import GML from "../assets/GML.png"
import Robotica from "../assets/Robotica.jpg"
import WhtasApp from "../assets/WhtasApp.jpeg"
import trovadorismo from "../assets/trovadorismo .png"
import usAhug from "../assets/Us_Ahug.png"
import Artes from "../assets/Artes.png"
import EducacaoFisica from "../assets/EducacaoFisica.png"
import mat from "../assets/matematica.png";
import fisica from "../assets/fisica.png"
import SensorDeAr from "../assets/Sensor de ar.jpg"
import quimica from "../assets/ods.png"
import senamun from "../assets/senamun.jpg"
import ProjetoDeLei from "../assets/projetoDeLei.png"
import historia from "../assets/Historia.png"
import filosofia from "../assets/fiosofia.jpeg"
import urna from "../assets/urnaEletronica.jpg"
import progamação from "../assets/progamação.png"

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre Mim' },
  { href: '/curriculo', label: 'Currículo' },
  { href: '/materias', label: 'Matérias' },
];

export const MATERIAS: Materia[] = [
  {
    slug: 'linguagens',
    title: 'Linguagens',
    description: 'Nesta área entram as competências ligadas à comunicação, expressão, interpretação, cultura e corpo.',
    subjects: [
      {
        slug: 'portugues',
        title: 'Português',
        content: {
          title: 'Análise textual e leitura crítica (Revista LGG)',
          description: 'Leituras e práticas de interpretação textual, produção escrita e análise literária com foco em argumentação, gêneros textuais e variação linguística, a partir de trechos e artigos selecionados na Revista LGG.',
          imageUrl: trovadorismo,
          imageAlt: 'Revista LGG — Português',
          items: [
            'Leitura crítica de artigos: identificar tese, argumentos e recursos persuasivos.',
            'Gêneros textuais: características e estratégias de produção (editorial, resenha, ensaio).',
            'Análise literária: leitura de contos e crônicas; foco em narrador, tempo e ponto de vista.',
            'Ortografia e norma-padrão: revisão aplicada à produção de textos.',
            'Produção de texto argumentativo com base em fontes (síntese e citação).'
          ]
        }
      },
      {
        slug: 'ingles',
        title: 'Inglês',
        content: {
          title: 'US? a hug',
          description: 'Práticas de leitura em língua inglesa focadas em compreensão, vocabulário e interpretação aplicáveis a textos informativos e culturais.',
          imageUrl: usAhug,
          imageAlt: 'Reading & Communication',
          items: [
            'Every day during the break at SENAC, my friends and I have the same routine. We go to P1 to eat something, play truco, and enjoy other games. It’s not just about the food or the cards — it’s aboutthe laughs, the jokes, and thestories we share. Thesesimple moments becamespecial memories. Most ofthe time, it’s just me and theguys, talking abouteverything and nothing at thesame time.',
          ]
        }
      },
      {
        slug: 'artes',
        title: 'Artes',
        content: {
          title: 'Leitura de imagens e linguagem visual',
          description: 'Exploração de imagens e recursos visuais presentes na Revista LGG para trabalhar interpretação, linguagem simbólica e produção visual.',
          imageUrl:  Artes,
          imageAlt: 'Artes — imagem editorial',
          items: [
            'Análise de elementos visuais: cor, forma e composição.',
            'Interpretação de charge e ilustração editorial.',
            'Produção: criar uma peça visual que comunique uma ideia/argumento.'
          ]
        }
      },
      {
        slug: 'educacao-fisica',
        title: 'Educação Física',
        content: {
          title: 'Saúde e bem estar',
          description: 'Atividades práticas que relacionam movimento, saúde e trabalho em equipe.',
          imageUrl: EducacaoFisica,
          imageAlt: 'Educação Física',
          items: [
            'antioxidantes aliados ou vilões?',
            'uso consiente dos antioxidantes'
          ]
        }
      }
    ]
  },
  {
    slug: 'matematica',
    title: 'Matemática',
    description: 'Fundamentos de lógica, álgebra e resolução de problemas.',
    subjects: [
      {
        slug: 'matematica',
        title: 'Matemática',
        content: {
          title: 'Explorando Funções Trigonométricas',
          description: 'Uma visão geral sobre seno, cosseno e tangente, e como elas se aplicam em problemas do mundo real.',
          imageUrl: mat,
          imageAlt: 'Gráfico de funções trigonométricas',
          items: [
            'Definição do círculo trigonométrico e suas propriedades.',
            'Gráficos das funções seno, cosseno e tangente.',
            'Resolução de equações e inequações trigonométricas.',
            'Aplicações em física, como em movimentos harmônicos simples.'
          ]
        }
      }
    ]
  },
    {
        slug: 'ciencias-da-natureza',
        title: 'Ciências da Natureza',
        description: 'Estudo de biologia, física e química.',
        subjects: [
            {
              slug: 'biologia',
              title: 'Biologia',
              content: {
                title: 'Sensores de CO / CO2',
                description: 'Estudo dos princípios e aplicações de sensores de monóxido de carbono (CO) e dióxido de carbono (CO2): tipos de sensores, funcionamento, leitura de sinais, calibração e uso em monitoramento da qualidade do ar.',
                imageUrl: SensorDeAr,
                imageAlt: 'Sensor e monitoramento de CO2',
                items: [
                  'Princípios de detecção: diferença entre sensores eletroquímicos, semicondutores (MQ series) e NDIR para CO2.',
                  'Calibração e sensibilidade: como interpretar leituras e evitar falsos positivos/negativos.',
                  'Integração com microcontroladores: aquisições, leitura analógica/digital e transmissão de dados.',
                  'Aplicações práticas: monitoramento de qualidade do ar, segurança em ambientes fechados e uso em projetos de IoT.',
                  'Atividade laboratorial sugerida: montar um protótipo simples com um sensor MQ (CO) ou um módulo NDIR (CO2) e registrar variações em diferentes condições.'
                ]
              }
            },
            {
              slug: 'fisica',
              title: 'Física Moderna',
              content: {
                title: 'Física Moderna — fundamentos e aplicações',
                description: 'Estudo dos conceitos centrais da física do século XX: relatividade restrita, quantização de energia, dualidade onda-partícula e modelos atômicos, com foco em aplicações tecnológicas e experimentos históricos.',
                imageUrl: fisica,
                imageAlt: 'Conceitos de Física Moderna',
                items: [
                  'Efeito fotoelétrico: evidência da quantização da luz e introdução dos fótons.',
                  'Modelo atômico e níveis de energia (Bohr): transições eletrônicas e espectros.',
                  'Dualidade onda-partícula: conceitos básicos da mecânica quântica.',
                  'Relatividade restrita: transformações de Lorentz, dilatação do tempo e equivalência massa-energia (E=mc²).',
                  'Aplicações tecnológicas: semicondutores, lasers, espectroscopia e detectores.'
                ]
              }
            },
            {
              slug: 'quimica',
              title: 'Química',
              content: {
                title: 'Bancada Legislativa: ODS e Química Ambiental',
                description: 'Atividade integrada de Linguagens e Ciências da Natureza focada na elaboração de propostas legislativas baseadas nos Objetivos de Desenvolvimento Sustentável (ODS), com ênfase em Saúde e Bem-Estar (ODS 3) e combate ao abuso de substâncias químicas. Integra pesquisa científica, direitos humanos e produção textual.',
                imageUrl: quimica,
                imageAlt: 'ODS e Agenda 2030',
                items: [
                  'Identidade da bancada legislativa: criação de nome, logotipo e identidade visual baseada no ODS sorteado (com técnicas de Pop Art).',
                  'ODS 3 — Saúde e Bem-Estar: análise do item 3.5 (prevenção e tratamento do abuso de substâncias, drogas e álcool) e suas implicações químicas e sociais.',
                  'Química das substâncias: estudo de compostos químicos presentes em drogas e álcool, mecanismos de ação no organismo e efeitos neuroquímicos.',
                  'Proposta legislativa: elaboração de 1 projeto de lei baseado nas metas da Agenda 2030, articulando ciência, direitos humanos e políticas públicas.',
                  'Parceria global: criação de 1 proposta de colaboração internacional para reforçar a prevenção e tratamento do abuso de substâncias (ODS 3.5).',
                  'Campanha publicitária: divulgação do ODS por meio de vídeo de 30 segundos, slogans e propaganda em inglês.',
                  'Cartilha informativa: compilação de pesquisas, propostas, fontes bibliográficas e relatórios individuais de participação (ficha técnica).',
                  'Competências mobilizadas: pesquisa digital ética, linguagens científicas, análise crítica de informações, uso de TDIC e comunicação para públicos diversos.'
                ]
              }
            },
        ]
    },
    {
        slug: 'ciencias-humanas',
        title: 'Ciências Humanas',
        description: 'Análise de história, geografia, sociologia e filosofia.',
        subjects: [
            { 
                slug: 'historia', 
                title: 'História',
                content: {
                title: 'Dossiê Histórico — Guerra das Coreias (1950–1953)',
                description: 'Produza um dossiê sintético (1–2 páginas) sobre a Guerra das Coreias, articulando contexto histórico, atores internacionais, cronologia essencial e impactos geopolíticos, com base em fontes confiáveis. Inclua uma seção de análise crítica conectando os desdobramentos ao cenário asiático contemporâneo.',
                imageUrl: historia,
                imageAlt: 'Guerra das Coreias — contexto histórico',
                items: [
                  'Antecedentes: ocupação japonesa, divisão no paralelo 38, surgimento de dois Estados (Coreia do Norte e Coreia do Sul).',
                  'Atores e alianças: EUA/ONU, China, União Soviética — objetivos e estratégias militares.',
                  'Cronologia essencial: invasão inicial, contraofensivas, estabilização e armistício de 1953.',
                  'Impactos: militarização da península, fronteira desmilitarizada (DMZ), efeitos sobre civis e economia.',
                  'Fontes e evidências: mapas, resoluções da ONU, dados demográficos e testemunhos históricos.',
                  'Análise crítica: permanências e mudanças no Leste Asiático; conexões com segurança regional atual.',
                  'Entregáveis: dossiê de 1–2 páginas com referências; IA apenas como apoio à pesquisa/organização.'
                ]
                }
            },
            {
              slug: 'geografia',
              title: 'Geografia',
              content: {
                title: 'SenaMUN — Dossiê Geopolítico e Humanitário: Faixa de Gaza',
                description: 'Atividade da IV edição do SenaMUN focada em Geografia: produzir um dossiê curto (1–2 páginas) que sintetize o contexto territorial, os atores envolvidos e os desafios logísticos para a assistência humanitária na Faixa de Gaza, com propostas de ação viáveis.',
                imageUrl: senamun,
                imageAlt: 'Mapa geopolítico e logística humanitária',
                items: [
                  'Contexto territorial e demográfico: fronteiras, densidade populacional, infraestrutura crítica (água, energia, saúde).',
                  'Atores e interesses: Egito, Israel, Autoridade Palestina, ONU e ONGs — convergências e tensões.',
                  'Acesso e logística: corredores humanitários, pontos de passagem (ex.: Rafah), restrições e riscos de segurança.',
                  'Indicadores humanitários: disponibilidade de água, eletricidade, atendimento médico e deslocamentos (fontes: OCHA/UNICEF/WHO).',
                  'Panorama de resoluções e trégua: marcos recentes que impactam a entrada de ajuda e a proteção a civis.',
                  'País delegado: prioridades estratégicas, linhas vermelhas e possíveis alianças no comitê.',
                  'Propostas de ação: mecanismos de monitoramento, janelas de acesso, distribuição segura e coordenação logística com agências.',
                  'Entregáveis: dossiê de 1–2 páginas com mapa anotado e referências confiáveis; uso de IA permitido apenas como apoio de pesquisa/organização.'
                ]
              }
            },
            {
              slug: 'sociologia',
              title: 'Sociologia',
              content: {
                title: 'Simulação Legislativa — Miniprojeto de Lei (LC 95)',
                description: 'Em grupos de até 6 pessoas, elabore um esboço de proposta legislativa (1–2 páginas) seguindo a LC 95. Escolha um dos temas: Educação; Meio Ambiente, Clima e Sustentabilidade; Indústria, Comércio e Serviços; Saúde; Segurança e Gestão de Serviços Públicos; Regulação de Plataformas e Redes Sociais; Artistas e Direitos Autorais. Produto: esboço de Projeto de Lei conforme estrutura obrigatória.',
                imageUrl: ProjetoDeLei,
                imageAlt: 'Elaboração de projeto de lei em sala',
                items: [
                  'Formação de grupos: até 6 integrantes; escolha 1 tema da lista proposta.',
                  'Produto: esboço de Projeto de Lei (1–2 páginas) em PDF ou Word.',
                  'Estrutura obrigatória (LC 95): Ementa; Preâmbulo; Art. 1º (objetivo); Art. 2º (regras/direitos/deveres); Art. 3º (responsabilidades, fiscalização e sanções); Art. 4º (vigência).',
                  'Justificativa (8–12 linhas): explique o problema, o objetivo da proposta e responda “Como a lei ajuda a melhorar essa situação?”.',
                  'Critérios: clareza, fundamentação com fontes confiáveis, viabilidade e impacto social.',
                  'Diretrizes éticas: IA apenas como apoio à pesquisa/organização; texto final autoral e referenciado.',
                  'Referências: incluir fontes (leis, relatórios oficiais, artigos e notícias de credibilidade).',
                  'Dica — tema Segurança: proponha integração entre órgãos, protocolos de iluminação e vigilância urbana, canais de denúncia, proteção de dados, indicadores de avaliação e controle social, respeitando competências legais.'
                ]
              }
            },
            {
              slug: 'filosofia',
              title: 'Filosofia',
              content: {
                title: 'Roda Viva — Guerra Fria: ética, poder e liberdade',
                description: 'Atividade em formato de mesa redonda inspirada no programa Roda Viva. Em grupos, representem personagens/vozes da Guerra Fria para debater dilemas filosóficos: legitimidade do poder, liberdade vs. segurança, propaganda, verdade e responsabilidade moral dos Estados e indivíduos.',
                imageUrl: filosofia,
                imageAlt: 'Debate filosófico em mesa redonda',
                items: [
                  'Formação: grupos com papéis distintos (ex.: filósofo liberal, pensador marxista, diplomata, jornalista, cientista, cidadão).',
                  'Guias de questões: poder e legitimidade; liberdade vs. segurança; propaganda e verdade; ciência e ética; responsabilidade individual/coletiva.',
                  'Referências breves: Hobbes (soberania/segurança), Locke (direitos/liberdade), Mill (liberdade de expressão), Arendt (totalitarismo), Popper (sociedade aberta), Foucault (poder/saber).',
                  'Roteiro do debate: abertura com posições iniciais; rodada cruzada de perguntas; dilema ético aplicado (ex.: corrida armamentista, espionagem, censura).',
                  'Produto: síntese escrita de 1–2 páginas com as posições, argumentos centrais, pontos de convergência/divergência e referência às fontes.',
                  'Ética acadêmica: IA apenas como apoio à organização; texto final autoral e referenciado.',
                  'Opcional: anexar “ficha de personagem” (1 parágrafo) descrevendo visão de mundo e princípios do papel escolhido.'
                ]
              }
            },
        ]
    },
    {
        slug: 'iot',
        title: 'IOT',
        description: 'Projetos e aprendizados em Internet das Coisas.',
        subjects: [
            {
                slug: 'programacao',
                title: 'Programação',
                content: {
                    title: 'Desenvolvimento Web — Portfólio Pessoal',
                    description: 'Projeto full-stack de construção de site portfólio pessoal usando Next.js, TypeScript, React e Tailwind CSS. Inclui estruturação de componentes, navegação, integração com dados estáticos/dinâmicos, deploy e boas práticas de UI/UX.',
                    imageUrl: progamação,
                    imageAlt: 'Código de desenvolvimento web',
                    items: [
                        'Arquitetura: App Router (Next.js 15), estrutura de pastas em src/app, páginas dinâmicas com [slug]/[id].',
                        'Componentes reutilizáveis: header, footer, cards (projeto, matéria), timeline, formulário de contato.',
                        'Estilização: Tailwind CSS + Radix UI (accordion, dialog, tabs, tooltip).',
                        'Gerenciamento de dados: arrays tipados (TypeScript) em src/lib/data.ts; tipos em src/lib/types.ts.',
                        'Imagens: Next/Image com remotePatterns para hospedagem externa; imports locais de assets.',
                        'Deploy: Vercel com CI/CD via GitHub; configuração de domínios e analytics.',
                        'Entregáveis: repositório Git público, README com instruções de instalação/execução, screenshots e link do site ao vivo.'
                    ]
                }
            },
            {
                slug: 'hardware',
                title: 'Hardware e Eletrônica',
                content: {
                    title: 'Projetos: Robô Seguidor de Linha e Urna Eletrônica',
                    description: 'Resumo dos componentes e circuitos usados no robô seguidor de linha e proposta de protótipo de urna eletrônica com Arduino, botões, LEDs e validação de votos.',
                    imageUrl:urna,
                    imageAlt: 'Circuitos com Arduino',
                    items: [
                        'Urna: Matriz de botões (candidatos) e botão CONFIRMA; LEDs para feedback.',
                        'Urna: Display (LCD/I2C ou OLED) para mensagens de voto e resultado.',
                        'Urna: EEPROM para registrar votos; rotina de inicialização e apuração segura.',
                        'Urna: Regras de validação — um voto por ciclo, confirmação obrigatória, cancelamento (CORRIGE).',
                        'Urna: Diagrama de circuito e pseudocódigo: leitura de botões, debounce, estado da votação, persistência e apuração.'
                    ]
                }
            },
        ]
    }
]

export const SKILLS: Skill[] = [
  // Backend
  { name: 'Node.js', category: 'Linguagens e Frameworks', proficiency: 'Experiência principal em APIs REST, integração e automação.', icon: 'SiNodedotjs' },
  { name: 'TypeScript', category: 'Linguagens e Frameworks', proficiency: 'Usado para desenvolvimento backend com Node.js.', icon: 'SiTypescript' },
  { name: 'Python', category: 'Linguagens e Frameworks', proficiency: 'Usado para scripts de automação e projetos de robótica.', icon: 'SiPython' },
  { name: 'Spring Boot', category: 'Linguagens e Frameworks', proficiency: 'Conhecimento em desenvolvimento de APIs.', icon: 'SiSpringboot' },
  
  // Frontend
  { name: 'React.js', category: 'Linguagens e Frameworks', proficiency: 'Construção de interfaces para projetos pessoais e acadêmicos.', icon: 'SiReact' },
  { name: 'React Native', category: 'Linguagens e Frameworks', proficiency: 'Desenvolvimento de aplicativos mobile com Expo.', icon: 'SiReact' },
  { name: 'JavaScript', category: 'Linguagens e Frameworks', proficiency: 'Linguagem principal para desenvolvimento web.', icon: 'SiJavascript' },
  
  // Database
  { name: 'PostgreSQL', category: 'Bancos de Dados', proficiency: 'Banco de dados principal para projetos backend.', icon: 'SiPostgresql' },
  { name: 'MySQL', category: 'Bancos de Dados', proficiency: 'Experiência em ambientes acadêmicos e projetos.', icon: 'SiMysql' },
  
  // DevOps & Infra
  { name: 'Docker', category: 'DevOps e CI/CD', proficiency: 'Containerização de aplicações Node.js para desenvolvimento e deploy.', icon: 'SiDocker' },
  { name: 'GitHub Actions', category: 'DevOps e CI/CD', proficiency: 'Criação de pipelines de CI/CD para automação de testes e deploy.', icon: 'SiGithubactions' },
  { name: 'Vercel', category: 'DevOps e CI/CD', proficiency: 'Deploy de aplicações frontend React/Next.js.', icon: 'SiVercel' },

  // Ferramentas
  { name: 'Visual Studio Code', category: 'Ferramentas', proficiency: 'Editor de código principal.', icon: 'SiVisualstudiocode' },
  { name: 'Git', category: 'Ferramentas', proficiency: 'Versionamento de código.', icon: 'SiGit' },
  { name: 'GitHub', category: 'Ferramentas', proficiency: 'Plataforma de colaboração e CI/CD.', icon: 'SiGithub' },
  { name: 'Figma', category: 'Ferramentas', proficiency: 'Prototipagem e design de interfaces.', icon: 'SiFigma' },
  { name: 'Expo', category: 'Ferramentas', proficiency: 'Framework para desenvolvimento de apps React Native.', icon: 'SiExpo' },
];

export const PROJECTS: Project[] = [
  {
    id: 'guarda-meu-lanche',
    title: 'Guarda Meu Lanche',
    description: 'App de otimização de compras em lanchonete escolar.',
    longDescription: 'Desenvolvimento de um aplicativo para otimizar o tempo dos alunos nas filas das lanchonetes. O projeto envolveu gerenciamento, arquitetura, criação de regras de serviço, implementação de APIs, uso de banco de dados PostgreSQL, conteinerização com Docker e design de UX/UI. Recebeu mentoria do Centro de Inovação Tecnológica do SENAC.',
    stack: ['Node.js', 'PostgreSQL', 'REST API', 'Docker', 'UX/UI Design'],
    imageUrl: GML,
    imageHint: 'mobile app food',
    githubUrl: 'https://github.com/MasterBarreto/Guarda-Meu-Lanche'
  },
  {
    id: 'seguidor-de-linha',
    title: 'Seguidor de Linha Robótica',
    description: 'Protótipo em C++ com sensores para competição de robótica.',
    longDescription: 'Este projeto foi desenvolvido para competições de robótica, onde o desafio era criar um robô autônomo capaz de seguir uma linha preta em uma pista branca. O protótipo foi construído utilizando C++ para a programação do microcontrolador e sensores de infravermelho para a detecção da linha, com foco em otimização de velocidade e precisão.',
    stack: ['C++', 'Hardware', 'Robótica', 'Arduino'],
    imageUrl: Robotica,
    imageHint: 'robot car arduino',
    githubUrl: 'https://github.com/MasterBarreto/seguidor-de-linha'
  },
  {
    id: 'bots-ia-whatsapp',
    title: 'Bots de IA para WhatsApp',
    description: 'Experimentos com automação de atendimento via WhatsApp.',
    longDescription: 'Uma série de experimentos e projetos focados na criação de bots de atendimento para WhatsApp utilizando Node.js e diversas APIs de inteligência artificial. O objetivo era explorar as possibilidades de automação de conversas, triagem de clientes e respostas a perguntas frequentes, visando melhorar a eficiência do atendimento digital.',
    stack: ['Node.js', 'IA', 'APIs', 'WhatsApp'],
    imageUrl: WhtasApp,
    imageHint: 'chat bubbles',
    githubUrl: 'https://github.com/MasterBarreto/whatsapp-bots'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: 'Ago 2025 - Atual',
    title: 'Estagiário de Backend',
    institution: 'Yamamoto',
    description: 'Atuo no desenvolvimento de soluções voltadas para integração de APIs, automação de fluxos e criação de agentes inteligentes para atendimento via WhatsApp e outras plataformas. Minha rotina envolve: Suporte no desenvolvimento e manutenção de integrações entre sistemas (CRM, ERP, mensageria etc.); Implementação de fluxos com webhooks e automações; Apoio na prototipagem e testes de agentes de IA para empresas clientes; Colaboração na documentação técnica e melhoria contínua das soluções. Estou inserido em um projeto estratégico de inovação em IA aplicada a atendimento e automação, dentro de um ambiente startup com cultura de aprendizado, colaboração e experimentação constante.',
  },
  {
      year: '2023 - 2026',
      title: 'Ensino Médio Técnico em IoT',
      institution: 'Senac São Paulo',
      description: 'Formação Técnica no SENAC (janeiro de 2023 - Janeiro de 2025): 1º Ano: Técnico em Assistência de Computadores, 2º Ano: Técnico em Redes e Infraestrutura, 3º Ano: Programação.',
  },
  {
      year: '2025',
      title: 'Participação em Olimpíadas',
      institution: 'OBI, OBA & MOBFOG',
      description: 'Participação na Olimpíada Brasileira de Informática (OBI), na Olimpíada Brasileira de Astronomia e Astronáutica (OBA) e na Mostra Brasileira de Foguetes (MOBFOG).',
  },
  {
      year: '2023 - 2025',
      title: 'Atividades Extracurriculares',
      institution: 'Robótica, Teatro, Oficina de Foguetes',
      description: 'Engajamento em diversas atividades que estimularam a criatividade, o trabalho em equipe e a aplicação prática de conhecimentos técnicos.',
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    title: 'NLW Agents - Avançado',
    issuer: 'Rocketseat',
    date: 'Jul de 2025',
    credentialUrl: 'https://app.rocketseat.com.br/certificates/8adbd58b-fae6-4ddb-9e49-600c44333046'
  },
  {
    title: 'Database Foundations',
    issuer: 'Oracle',
    date: 'Jun de 2025'
  },
  {
    title: 'Fundamentos de Banco de Dados',
    issuer: 'Senac São Paulo',
    date: 'Jun de 2025',
  },
  {
    title: 'AWS Educate Introduction to Generative AI',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Mar de 2025'
  },
  {
    title: 'NLW Pocket: Mobile - React Native',
    issuer: 'Rocketseat',
    date: 'Dez de 2024',
    credentialUrl: 'https://app.rocketseat.com.br/certificates/d07f404c-8107-4c14-a885-37a09d2d6266'
  },
  {
    title: 'NLW Pocket: Javascript - Full-stack Intermediário',
    issuer: 'Rocketseat',
    date: 'Set de 2024',
    credentialUrl: 'https://app.rocketseat.com.br/certificates/13dbdef1-771f-4d8b-bb6f-6abb06f2fdca'
  },
  {
    title: 'Empreendedorismo Tecnológico: Startups de Base Tecnológica',
    issuer: 'Samsung Ocean',
    date: 'Ago de 2024',
    credentialUrl: 'https://www.samsungocean.com/certificates/clzni0bcq0000l708ccqil60m_4346'
  },
  {
    title: 'Introdução a Teste com ênfase no Remote Test Lab',
    issuer: 'Samsung Ocean',
    date: 'Ago de 2024',
    credentialUrl: 'https://www.samsungocean.com/certificates/cm0lc3s7y000pl608micmrsq3_5268'
  },
  {
    title: 'UX/UI Design',
    issuer: 'Grupo Voitto',
    date: 'Jul de 2024',
    credentialUrl: 'https://www.voitto.com.br/certificado/UkE9NTI3OCtSQj02Mzg0NTQ='
  }
];