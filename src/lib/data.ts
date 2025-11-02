import type { Skill, Project, TimelineEvent, Certificate, Materia } from './types';

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
                    title: 'Análise de "Dom Casmurro"',
                    description: 'Um estudo aprofundado sobre a obra de Machado de Assis, explorando a narrativa não confiável de Bentinho e o mistério de Capitu.',
                    imageUrl: 'https://picsum.photos/seed/dom-casmurro/1080/720',
                    imageAlt: 'Livro antigo',
                    items: [
                        'Contexto histórico e literário do Realismo no Brasil.',
                        'Análise dos personagens principais: Bentinho, Capitu e Escobar.',
                        'O papel do ciúme e da dúvida como elementos centrais da trama.',
                        'Discussão sobre as diferentes interpretações do final da obra.'
                    ]
                }
            },
            { slug: 'ingles', title: 'Inglês' },
            { slug: 'artes', title: 'Artes' },
            { slug: 'educacao-fisica', title: 'Educação Física' }
        ]
    },
    {
        slug: 'matematica',
        title: 'Matemática',
        description: 'Fundamentos de lógica, álgebra e resolução de problemas.',
        subjects: [
            { 
                slug: 'matematica-1', 
                title: 'Matemática I',
                content: {
                    title: 'Explorando Funções Trigonométricas',
                    description: 'Uma visão geral sobre seno, cosseno e tangente, e como elas se aplicam em problemas do mundo real.',
                    imageUrl: 'https://picsum.photos/seed/trigonometry/1080/720',
                    imageAlt: 'Gráfico de funções trigonométricas',
                    items: [
                        'Definição do círculo trigonométrico e suas propriedades.',
                        'Gráficos das funções seno, cosseno e tangente.',
                        'Resolução de equações e inequações trigonométricas.',
                        'Aplicações em física, como em movimentos harmônicos simples.'
                    ]
                }
            },
            { slug: 'matematica-2', title: 'Matemática II' },
        ]
    },
    {
        slug: 'ciencias-da-natureza',
        title: 'Ciências da Natureza',
        description: 'Estudo de biologia, física e química.',
        subjects: [
            { slug: 'biologia', title: 'Biologia' },
            { 
                slug: 'fisica', 
                title: 'Física',
                content: {
                    title: 'Leis de Newton',
                    description: 'Os princípios fundamentais da mecânica clássica que descrevem o movimento dos corpos.',
                    imageUrl: 'https://picsum.photos/seed/newton-laws/1080/720',
                    imageAlt: 'Maçã caindo de uma árvore',
                    items: [
                        'Primeira Lei de Newton: O princípio da inércia.',
                        'Segunda Lei de Newton: A relação entre força, massa e aceleração (F=ma).',
                        'Terceira Lei de Newton: O princípio da ação e reação.',
                        'Aplicações práticas em problemas de dinâmica e estática.'
                    ]
                }
            },
            { slug: 'quimica', title: 'Química' },
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
                    title: 'A Revolução Francesa',
                    description: 'Um marco na história ocidental que abalou as estruturas do absolutismo e deu início à Idade Contemporânea.',
                    imageUrl: 'https://picsum.photos/seed/french-revolution/1080/720',
                    imageAlt: 'Pintura da Revolução Francesa',
                    items: [
                        'Contexto social, político e econômico da França pré-revolucionária.',
                        'As fases da revolução: Assembleia Nacional, Convenção e Diretório.',
                        'O legado da revolução: direitos humanos, cidadania e o fim do Antigo Regime.',
                        'A ascensão de Napoleão Bonaparte e suas consequências.'
                    ]
                }
            },
            { slug: 'geografia', title: 'Geografia' },
            { slug: 'sociologia', title: 'Sociologia' },
            { slug: 'filosofia', title: 'Filosofia' },
        ]
    },
    {
        slug: 'iot',
        title: 'IOT',
        description: 'Projetos e aprendizados em Internet das Coisas.',
        subjects: [
            { slug: 'redes', title: 'Redes e Infraestrutura' },
            { slug: 'programacao', title: 'Programação' },
            { 
                slug: 'hardware', 
                title: 'Hardware e Eletrônica',
                content: {
                    title: 'Anotações da Aula de Eletrônica',
                    description: 'Um resumo sobre os componentes e circuitos utilizados no projeto do robô seguidor de linha.',
                    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwY2lyY3VpdHxlbnwwfHx8fDE3NjIxODAzNTV8MA&ixlib=rb-4.1.0&fm=jpg&w=1080&h=720&fit=crop',
                    imageAlt: 'Circuito Arduino',
                    items: [
                        'Arduino Uno: O cérebro do robô, responsável por processar os dados dos sensores e controlar os motores.',
                        'Sensor de Infravermelho (TCRT5000): Utilizado para detectar a linha preta no chão. Ele emite luz infravermelha e mede a reflexão.',
                        'Driver de Motor (Ponte H L298N): Controla a direção e a velocidade dos dois motores DC.',
                        'Motores DC com Caixa de Redução: Fornecem o movimento para as rodas do robô.'
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
    imageUrl: 'https://picsum.photos/seed/guarda-meu-lanche/600/400',
    imageHint: 'mobile app food',
    githubUrl: 'https://github.com/MasterBarreto/Guarda-Meu-Lanche'
  },
  {
    id: 'seguidor-de-linha',
    title: 'Seguidor de Linha Robótica',
    description: 'Protótipo em C++ com sensores para competição de robótica.',
    longDescription: 'Este projeto foi desenvolvido para competições de robótica, onde o desafio era criar um robô autônomo capaz de seguir uma linha preta em uma pista branca. O protótipo foi construído utilizando C++ para a programação do microcontrolador e sensores de infravermelho para a detecção da linha, com foco em otimização de velocidade e precisão.',
    stack: ['C++', 'Hardware', 'Robótica', 'Arduino'],
    imageUrl: 'https://picsum.photos/seed/real-robot/600/400',
    imageHint: 'robot car arduino',
    githubUrl: 'https://github.com/MasterBarreto/seguidor-de-linha'
  },
  {
    id: 'bots-ia-whatsapp',
    title: 'Bots de IA para WhatsApp',
    description: 'Experimentos com automação de atendimento via WhatsApp.',
    longDescription: 'Uma série de experimentos e projetos focados na criação de bots de atendimento para WhatsApp utilizando Node.js e diversas APIs de inteligência artificial. O objetivo era explorar as possibilidades de automação de conversas, triagem de clientes e respostas a perguntas frequentes, visando melhorar a eficiência do atendimento digital.',
    stack: ['Node.js', 'IA', 'APIs', 'WhatsApp'],
    imageUrl: 'https://picsum.photos/seed/bots-ia-whatsapp/600/400',
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