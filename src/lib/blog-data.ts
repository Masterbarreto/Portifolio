import type { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'mentoria-entrevista',
    title: 'Simulação de Entrevista e Case Técnico',
    date: '15 de Março de 2025',
    summary: 'Participei de uma simulação de entrevista com minha mentora, abordando perguntas comportamentais e um case técnico de arquitetura de microservices.',
    imageUrl: 'https://picsum.photos/seed/mentorship-interview/600/400',
    imageHint: 'interview meeting',
    content: `
      <p>Nos dias 13/02/25 e 15/03/25, tive a oportunidade de participar de uma simulação de entrevista de emprego com minha mentora Natália Souza, que foi fundamental para meu crescimento profissional!</p>
      <h3 class="font-bold text-lg mt-4 mb-2">Dia 1: Feedback Construtivo</h3>
      <p>No primeiro dia, fiz minha apresentação pessoal e passei por perguntas comportamentais desafiadoras. No final, recebi um feedback super construtivo, que me ajudou a estruturar melhor minhas respostas e destacar minhas experiências.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">Dia 2: Desafio Técnico</h3>
      <p>Já no segundo dia, apresentei um case técnico desafiador, no qual propus uma arquitetura escalável em microservices, utilizando padrões como BFF (Backend For Frontend) e Strategy Pattern. Além disso, desenvolvi um plano sólido de segurança e observabilidade, explorando ferramentas como Prometheus e Grafana para monitoramento e desempenho.</p>
      <p>Como parte desse case, também realizei um desafio de código, no qual implementei uma simulação de tela de pagamento aplicando o Strategy Pattern. A abordagem garantiu uma estrutura flexível e modular, permitindo a adaptação dinâmica a diferentes métodos de pagamento de forma eficiente.</p>
      <p>Aprofundei meus conhecimentos em boas práticas de segurança, incluindo criptografia de dados sensíveis, tokens de segurança, autenticação e autorização, e reforcei a importância da modularização dos serviços seguindo DDD (Domain-Driven Design).</p>
      <h3 class="font-bold text-lg mt-4 mb-2">Conclusão</h3>
      <p>Foi uma experiência transformadora! Percebi o quanto uma mentoria pode acelerar o aprendizado e proporcionar insights valiosos. Só tenho a agradecer à Natália por toda a dedicação e pelos feedbacks enriquecedores!</p>
    `,
    links: [
        { label: 'Repositório do Desafio', url: 'https://github.com/MasterBarreto/loan-simulation' }
    ]
  },
  {
    id: 'evento-senac',
    title: 'Evento Interno da Rede Senac Nacional',
    date: '23 de Maio de 2025',
    summary: 'Participei de um evento com diretores de todos os Senac do Brasil, onde compartilhei minha jornada como aluno e apresentei projetos da equipe de robótica.',
    imageUrl: 'https://picsum.photos/seed/senac-event/600/400',
    imageHint: 'corporate event',
    content: `
      <p>Ontem, dia 23/05/25, tive a oportunidade de participar de um evento interno da rede Senac nacional, onde tivemos a visita de diretores de todos os Senac espalhados pelo Brasil no campus onde estudo!</p>
      <p>Haviam projetos incríveis de diversas áreas do conhecimento, além do time de robótica que participo. Além disso, pude compartilhar um pouco da minha jornada para os diretores e contar um pouco de como é ser um aluno no Senac.</p>
      <p>Foi incrível, pude me conectar com pessoas incríveis!!</p>
    `
  },
  {
    id: 'sistema-substituicao-aulas',
    title: 'Sistema de Substituição de Aulas',
    date: '10 de Abril de 2025',
    summary: 'Desenvolvi um sistema full-stack para otimizar a gestão de aulas substitutivas, com dashboard administrativo, CRUD completo e relatórios dinâmicos.',
    imageUrl: 'https://picsum.photos/seed/class-system/600/400',
    imageHint: 'dashboard analytics',
    content: `
      <p>Recentemente tive a oportunidade de desenvolver um sistema completo de substituição de aulas que otimiza a organização escolar e facilita a vida dos professores e coordenadores.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">Funcionalidades Implementadas:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Dashboard administrativo com métricas em tempo real e gráficos interativos</li>
        <li>Sistema de upload com validação de tipos de arquivo e compressão</li>
        <li>CRUD completo para gerenciamento de aulas, professores e substituições</li>
        <li>Relatórios dinâmicos com filtros por data, curso, turma e matéria</li>
        <li>Interface responsiva otimizada para desktop e mobile</li>
        <li>Sistema de autenticação para diferentes níveis de acesso</li>
      </ul>
      <h3 class="font-bold text-lg mt-4 mb-2">Stack Tecnológica:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Frontend:</strong> React.js com design responsivo e componentes reutilizáveis</li>
        <li><strong>Backend:</strong> Node.js com Express para API RESTful</li>
        <li><strong>Banco de Dados:</strong> Integração para persistência de dados</li>
        <li><strong>UI/UX:</strong> Prototipado no Figma com interface dark mode moderna</li>
      </ul>
       <h3 class="font-bold text-lg mt-4 mb-2">Colaboração:</h3>
      <p>Este projeto só foi possível graças à colaboração excepcional com Natália Souza, Juliana Sales, Vitor e Aloísio Terra Nova Neto.</p>
    `,
    links: [
        { label: 'Frontend no GitHub', url: 'https://github.com/MasterBarreto/Class-sync' },
        { label: 'Backend no GitHub', url: 'https://github.com/MasterBarreto/Class-sync-backend' },
        { label: 'Design no Figma', url: 'https://www.figma.com/design/VFT3jA5O8s2f3Z4q2n8Y1A/Substitui%C3%A7%C3%A3o-de-Aula?node-id=0-1' }
    ]
  },
  {
    id: 'palestra-robotica',
    title: 'Palestra de Robótica no Evento "Casa Aberta"',
    date: '20 de Março de 2025',
    summary: 'Ministrei uma palestra sobre Robótica com LEGO SPIKE, apresentei os troféus da equipe RealBot SENAC e compartilhei a paixão pela inovação.',
    imageUrl: 'https://picsum.photos/seed/robotics-lecture/600/400',
    imageHint: 'robotics presentation',
    content: `
      <p>Ontem, tive a oportunidade de participar do evento #CasaAberta no Senac, onde ministrei uma palestra sobre Robótica e o funcionamento da programação dos robôs LEGO SPIKE. Foi incrível poder compartilhar esse conhecimento e mostrar um pouco da mágica por trás da construção e programação desses robôs.</p>
      <p>Além disso, foi um orgulho apresentar os troféus conquistados pelo time RealBot SENAC, equipe de robótica fundada em 2018, da qual eu e minha equipe participamos. Desde a nossa criação, conseguimos grandes feitos, incluindo classificações importantes como uma vaga para a etapa estadual da #OBR (Olimpíada Brasileira de Robótica).</p>
      <p>A robótica, além de ser uma paixão, é uma área que nos desafia a pensar de forma inovadora, a trabalhar em equipe e a buscar soluções criativas. Seguimos com a meta de alcançar ainda mais conquistas e inspirar novos talentos!</p>
    `
  }
];
