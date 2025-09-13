import type { Skill, Project, TimelineEvent, Certificate } from './types';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre Mim' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
  { href: '/skills', label: 'Skills' },
];

export const SKILLS: Skill[] = [
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 'Experiência principal em APIs REST, integração e automação.' },
  { name: 'Python', category: 'Backend', proficiency: 'Usado para scripts de automação e projetos de IA.' },
  { name: 'Spring Boot', category: 'Backend', proficiency: 'Conhecimento básico a intermediário de projetos acadêmicos.' },
  
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 'Construção de interfaces para projetos pessoais e acadêmicos.' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 'Banco de dados principal para projetos backend.' },
  { name: 'MySQL', category: 'Database', proficiency: 'Experiência em ambientes acadêmicos e projetos.' },
  { name: 'MongoDB', category: 'Database', proficiency: 'Utilizado em projetos que requerem flexibilidade NoSQL.' },
  { name: 'Oracle DB', category: 'Database', proficiency: 'Fundamentos adquiridos através de certificação e estudos.' },
  
  // DevOps & Infra
  { name: 'Docker', category: 'DevOps & Infra', proficiency: 'Containerização de aplicações Node.js para desenvolvimento e deploy.' },
  { name: 'GitHub Actions', category: 'DevOps & Infra', proficiency: 'Criação de pipelines de CI/CD para automação de testes e deploy.' },
  { name: 'Firebase', category: 'DevOps & Infra', proficiency: 'Utilizado para hosting e funções serverless em projetos rápidos.' },
  { name: 'Vercel', category: 'DevOps & Infra', proficiency: 'Deploy de aplicações frontend React/Next.js.' },
  { name: 'Google Cloud', category: 'DevOps & Infra', proficiency: 'Exploração de serviços de nuvem para projetos de IA e infra.' },

  // Other
  { name: 'APIs', category: 'Other', proficiency: 'Design e integração de APIs RESTful e webhooks.' },
  { name: 'UX/UI Design', category: 'Other', proficiency: 'Prototipagem e design de interfaces com foco na experiência do usuário.' },
  { name: 'Integração de Sistemas', category: 'Other', proficiency: 'Conexão entre CRMs, ERPs e outras plataformas.' },
];

export const PROJECTS: Project[] = [
  {
    id: 'guarda-meu-lanche',
    title: 'Guarda Meu Lanche',
    description: 'App de otimização de compras em lanchonete escolar.',
    longDescription: 'O "Guarda Meu Lanche" foi um projeto desenvolvido entre 2023 e 2025 para resolver o problema das longas filas e da gestão de pedidos na lanchonete da escola. A solução envolve um backend robusto que gerencia usuários, produtos e pedidos, otimizando o fluxo e permitindo que os alunos comprem com antecedência. O projeto recebeu mentoria no Centro de Inovação Tecnológica do SENAC.',
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
    stack: ['C++', 'Hardware', 'Robótica'],
    imageUrl: 'https://picsum.photos/seed/seguidor-de-linha/600/400',
    imageHint: 'robot line',
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
        year: '2025 - Atual',
        title: 'Estagiário de Backend',
        institution: 'Yamamotto',
        description: 'Foco em integrações de APIs (CRM, ERP), automação com webhooks e prototipagem de agentes de IA para atendimento.',
    },
    {
        year: '2023 - 2025',
        title: 'Técnico em Internet das Coisas (IoT)',
        institution: 'SENAC',
        description: 'Formação completa passando por hardware (1º ano), redes (2º ano) e programação (3º ano), com ênfase em projetos práticos.',
    },
    {
        year: '2024',
        title: 'Participação em Olimpíadas',
        institution: 'OBI & OBA',
        description: 'Participação na Olimpíada Brasileira de Informática (OBI) e na Olimpíada Brasileira de Astronomia e Astronáutica (OBA), desenvolvendo habilidades de lógica e resolução de problemas.',
    },
    {
        year: '2023',
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
    date: 'Jun de 2025',
    credentialUrl: '#'
  },
  {
    title: 'Fundamentos de Banco de Dados',
    issuer: 'Senac São Paulo',
    date: 'Jun de 2025',
  },
  {
    title: 'AWS Educate Introduction to Generative AI',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Mar de 2025',
    credentialUrl: '#'
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
