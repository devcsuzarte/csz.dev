// i18n.jsx — Portuguese/English copy for the portfolio
const COPY = {
  pt: {
    nav: { about: 'Sobre', apps: 'Apps', skills: 'Skills', work: 'Trabalho', services: 'Serviços', contact: 'Contato' },
    hero: {
      status: 'Disponível para freelance',
      h1Pre: 'Crio apps mobile com ',
      h1Accent: 'Flutter',
      h1Post: ' que pessoas amam usar.',
      sub: 'Sou Claudio Suzarte, Mobile Developer. Há 5+ anos transformo ideias em produtos publicados na App Store e Google Play — do MVP ao app em produção atendendo milhares de usuários.',
      ctaPrimary: 'Conversar sobre projeto',
      ctaSecondary: 'Ver apps',
      meta: [
        { l: 'Baseado em', v: 'Brasil — Remoto' },
        { l: 'Apps publicados', v: '12+ projetos' },
        { l: 'Stack principal', v: 'Flutter · Dart · Firebase' },
      ],
    },
    sections: {
      about: { num: '01 / sobre', title: 'Um pouco sobre mim', sub: 'A pessoa por trás dos pixels e do código Dart.' },
      apps: { num: '02 / apps', title: 'Apps que eu construí', sub: 'Produtos próprios e clientes — clique para ver detalhes.' },
      skills: { num: '03 / skills', title: 'Stack & ferramentas', sub: 'Tecnologias que uso no dia a dia.' },
      work: { num: '04 / experiência', title: 'Trajetória profissional', sub: 'Onde já apliquei minha craft.' },
      services: { num: '05 / serviços', title: 'Trabalhe comigo', sub: 'Pacotes pensados para diferentes estágios de produto.' },
      testimonials: { num: '06 / depoimentos', title: 'O que dizem', sub: 'Feedback de quem já trabalhou comigo.' },
      contact: { num: '07 / contato', title: 'Vamos construir algo?', sub: 'Resposta em até 24h em dias úteis.' },
    },
    about: {
      tag: 'foto / 2025',
      paragraphs: [
        <>Olá! Sou <strong>Claudio Suzarte</strong>, desenvolvedor mobile especializado em <strong>Flutter</strong>. Trabalho na intersecção entre design e engenharia, criando apps com performance nativa e interfaces que respeitam o tempo do usuário.</>,
        <>Comecei programando ainda na adolescência por curiosidade e nunca mais parei. Hoje, além de manter meus próprios produtos publicados, ajudo startups e empresas a levarem suas ideias do Figma à App Store — com código limpo, arquitetura escalável e zero gambiarra.</>,
        <>Quando não estou codando, estou estudando o próximo padrão de arquitetura, contribuindo com a comunidade Flutter Brasil, ou explorando uma cidade nova.</>,
      ],
      stats: [
        { v: '5+', l: 'Anos com Flutter' },
        { v: '12+', l: 'Apps em produção' },
        { v: '4', l: 'Apps próprios' },
      ],
    },
    apps: [
      { name: 'Carrinho Fácil', desc: 'App inovador que usa reconhecimento de texto (OCR) para criar um carrinho de compras virtual a partir de etiquetas de mercado, somando o total em tempo real.', tags: ['Flutter', 'ML Kit', 'Firebase', 'OCR'], status: 'live', color: '#13B9FD' },
      { name: 'Auto Tech', desc: 'Plataforma completa para gerenciamento de centros automotivos — agendamentos, controle de OS, estoque e relatórios em uma única ferramenta.', tags: ['Flutter', 'Supabase', 'Riverpod'], status: 'live', color: '#FF6B35' },
      { name: 'Gym Buddy', desc: 'Companheiro de treino com planos personalizados, registro de séries e gráficos de evolução. Em desenvolvimento ativo.', tags: ['Flutter', 'Bloc', 'SQLite'], status: 'wip', color: '#22C55E' },
      { name: 'ClinFlow', desc: 'Sistema de gestão para clínicas: fila de atendimento, agenda compartilhada e prontuário eletrônico. Em desenvolvimento.', tags: ['Flutter', 'PostgreSQL', 'GraphQL'], status: 'wip', color: '#A855F7' },
    ],
    skills: [
      { cat: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android', 'Material 3', 'Cupertino'] },
      { cat: 'Arquitetura', items: ['Clean Arch', 'Bloc', 'Riverpod', 'Provider', 'GetX', 'MVVM'] },
      { cat: 'Backend & Infra', items: ['Firebase', 'Supabase', 'Node.js', 'REST', 'GraphQL', 'Docker'] },
      { cat: 'Tooling', items: ['Git', 'GitHub Actions', 'Fastlane', 'Sentry', 'Figma', 'Linear'] },
    ],
    work: [
      { when: '2023 — Atual', role: 'Mobile Developer Sênior', where: 'Freelance · Projetos próprios', desc: 'Liderando o desenvolvimento de Carrinho Fácil e Auto Tech, além de prestar consultoria Flutter para startups em early stage. Foco em arquitetura, qualidade de código e experiência do usuário.' },
      { when: '2021 — 2023', role: 'Desenvolvedor Flutter Pleno', where: 'Empresa de tecnologia · Brasil', desc: 'Atuação em time multidisciplinar criando apps B2C com milhares de usuários ativos. Implementação de CI/CD, migração para null-safety, redução de 40% no tempo de build.' },
      { when: '2019 — 2021', role: 'Desenvolvedor Mobile Júnior', where: 'Primeiros passos · Estágios e PJs', desc: 'Início da carreira mobile com projetos em React Native e Flutter, contribuições open source e construção de portfólio.' },
    ],
    services: [
      { name: 'MVP Express', price: 'R$ 8k', unit: '/ a partir', desc: 'Validação rápida da sua ideia: um app funcional em 3–4 semanas, pronto para usuários reais.', features: ['1 plataforma (iOS ou Android)', 'Até 5 telas principais', 'Integração com Firebase', 'Deploy nas lojas incluso', 'Suporte por 30 dias'], cta: 'Quero um MVP' },
      { name: 'Produto Completo', price: 'R$ 25k', unit: '/ a partir', desc: 'Para quem precisa de um app sério, com arquitetura escalável e crescimento sustentável.', features: ['iOS + Android (cross-platform)', 'Design system customizado', 'Backend e autenticação', 'Push notifications e analytics', 'CI/CD configurado', '3 meses de suporte'], cta: 'Conversar sobre escopo', featured: true },
      { name: 'Squad Aumentada', price: 'R$ 18k', unit: '/ mês', desc: 'Adicione um Flutter Dev sênior ao seu time. Code review, mentoria e entregas constantes.', features: ['40h semanais dedicadas', 'Daily com seu time', 'Pull requests e code review', 'Participação em planning', 'Stack flexível'], cta: 'Falar sobre alocação' },
    ],
    testimonials: [
      { name: 'Mariana Costa', role: 'Product Manager', text: 'Claudio entregou nosso MVP em metade do tempo que outros estimaram, e ainda subiu o nível técnico do nosso time com o code review dele. Recomendo demais.', color: '#13B9FD', initials: 'MC' },
      { name: 'Rafael Souza', role: 'Founder, fintech early-stage', text: 'Procurei vários devs Flutter antes de fechar com o Claudio. A diferença está no cuidado com arquitetura e UX. App rodando há 1 ano sem crashes críticos.', color: '#FF6B35', initials: 'RS' },
      { name: 'Juliana Reis', role: 'CTO, healthtech', text: 'Excelente comunicação, prazos honrados e código que envelhece bem. Foi consultor técnico em uma migração crítica e tirou nossa equipe do atoleiro.', color: '#A855F7', initials: 'JR' },
    ],
    contact: {
      kicker: 'Vamos trabalhar juntos',
      lede: 'Tem um projeto em mente, uma squad pra reforçar ou só uma pergunta técnica? Manda mensagem — leio todos os e-mails pessoalmente.',
      email: 'claudio@csz.dev',
      form: {
        name: 'Seu nome',
        email: 'E-mail',
        company: 'Empresa (opcional)',
        budget: 'Orçamento estimado',
        budgets: ['Selecione…', 'Até R$ 10k', 'R$ 10k – R$ 30k', 'R$ 30k – R$ 80k', 'Acima de R$ 80k', 'Ainda não sei'],
        message: 'Conta sobre seu projeto',
        messagePh: 'O que você quer construir, prazos, plataforma…',
        submit: 'Enviar mensagem',
        sent: 'Mensagem recebida — em breve retorno!',
      },
    },
    footer: {
      sig: '© 2026 · Claudio Suzarte · Feito com Flutter no coração',
      tagline: 'Mobile Developer · Disponível para freelance',
      colophon: 'Construído com cuidado · Hospedado em csz.dev',
    },
  },
  en: {
    nav: { about: 'About', apps: 'Apps', skills: 'Skills', work: 'Work', services: 'Services', contact: 'Contact' },
    hero: {
      status: 'Available for freelance',
      h1Pre: 'I build mobile apps with ',
      h1Accent: 'Flutter',
      h1Post: ' that people love using.',
      sub: "I'm Claudio Suzarte, a Mobile Developer. For 5+ years I've turned ideas into shipped products on the App Store and Google Play — from MVP to apps serving thousands of users.",
      ctaPrimary: "Let's talk",
      ctaSecondary: 'See apps',
      meta: [
        { l: 'Based in', v: 'Brazil — Remote' },
        { l: 'Apps shipped', v: '12+ projects' },
        { l: 'Primary stack', v: 'Flutter · Dart · Firebase' },
      ],
    },
    sections: {
      about: { num: '01 / about', title: 'A little about me', sub: 'The human behind the pixels and Dart code.' },
      apps: { num: '02 / apps', title: 'Apps I have built', sub: 'My own products and client work — click for details.' },
      skills: { num: '03 / skills', title: 'Stack & tools', sub: 'What I use day to day.' },
      work: { num: '04 / experience', title: 'Professional journey', sub: 'Where I have applied my craft.' },
      services: { num: '05 / services', title: 'Work with me', sub: 'Packages tailored to different product stages.' },
      testimonials: { num: '06 / testimonials', title: 'What people say', sub: 'Feedback from people I have worked with.' },
      contact: { num: '07 / contact', title: 'Shall we build something?', sub: 'Reply within 24h on weekdays.' },
    },
    about: {
      tag: 'photo / 2025',
      paragraphs: [
        <>Hi! I am <strong>Claudio Suzarte</strong>, a mobile developer specialized in <strong>Flutter</strong>. I work at the intersection of design and engineering, building apps with native performance and interfaces that respect the user's time.</>,
        <>I started coding as a teenager out of curiosity and never stopped. Today, beyond maintaining my own shipped products, I help startups and companies ship from Figma to the App Store — with clean code, scalable architecture, and zero hacks.</>,
        <>When I'm not coding, I'm studying the next architecture pattern, contributing to the Flutter Brazil community, or exploring a new city.</>,
      ],
      stats: [
        { v: '5+', l: 'Years with Flutter' },
        { v: '12+', l: 'Apps in production' },
        { v: '4', l: 'Personal apps' },
      ],
    },
    apps: [
      { name: 'Carrinho Fácil', desc: 'Innovative app using text recognition (OCR) to build a virtual shopping cart from grocery price tags, summing the total in real time.', tags: ['Flutter', 'ML Kit', 'Firebase', 'OCR'], status: 'live', color: '#13B9FD' },
      { name: 'Auto Tech', desc: 'Complete platform for managing auto service centers — appointments, work orders, inventory and reports in a single tool.', tags: ['Flutter', 'Supabase', 'Riverpod'], status: 'live', color: '#FF6B35' },
      { name: 'Gym Buddy', desc: 'Workout companion with personalized plans, set tracking and progress charts. Currently in active development.', tags: ['Flutter', 'Bloc', 'SQLite'], status: 'wip', color: '#22C55E' },
      { name: 'ClinFlow', desc: 'Clinic management system: patient queue, shared schedule and electronic health records. In development.', tags: ['Flutter', 'PostgreSQL', 'GraphQL'], status: 'wip', color: '#A855F7' },
    ],
    skills: [
      { cat: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android', 'Material 3', 'Cupertino'] },
      { cat: 'Architecture', items: ['Clean Arch', 'Bloc', 'Riverpod', 'Provider', 'GetX', 'MVVM'] },
      { cat: 'Backend & Infra', items: ['Firebase', 'Supabase', 'Node.js', 'REST', 'GraphQL', 'Docker'] },
      { cat: 'Tooling', items: ['Git', 'GitHub Actions', 'Fastlane', 'Sentry', 'Figma', 'Linear'] },
    ],
    work: [
      { when: '2023 — Present', role: 'Senior Mobile Developer', where: 'Freelance · Personal projects', desc: 'Leading development of Carrinho Fácil and Auto Tech, plus Flutter consulting for early-stage startups. Focused on architecture, code quality and user experience.' },
      { when: '2021 — 2023', role: 'Mid-level Flutter Developer', where: 'Tech company · Brazil', desc: 'Multidisciplinary team building B2C apps with thousands of active users. Implemented CI/CD, null-safety migration, 40% build time reduction.' },
      { when: '2019 — 2021', role: 'Junior Mobile Developer', where: 'Early career · Internships and contracts', desc: 'Started mobile career with React Native and Flutter projects, open source contributions, and portfolio building.' },
    ],
    services: [
      { name: 'MVP Express', price: '$1.6k', unit: '/ starting', desc: 'Quick validation for your idea: a working app in 3–4 weeks, ready for real users.', features: ['1 platform (iOS or Android)', 'Up to 5 main screens', 'Firebase integration', 'Store deployment included', '30 days of support'], cta: 'I want an MVP' },
      { name: 'Full Product', price: '$5k', unit: '/ starting', desc: 'For when you need a serious app, with scalable architecture and sustainable growth.', features: ['iOS + Android (cross-platform)', 'Custom design system', 'Backend and authentication', 'Push notifications and analytics', 'CI/CD configured', '3 months of support'], cta: 'Discuss scope', featured: true },
      { name: 'Embedded Squad', price: '$3.6k', unit: '/ month', desc: 'Add a senior Flutter dev to your team. Code review, mentorship and consistent delivery.', features: ['40h per week dedicated', 'Daily with your team', 'PRs and code review', 'Sprint planning participation', 'Flexible stack'], cta: 'Talk about allocation' },
    ],
    testimonials: [
      { name: 'Mariana Costa', role: 'Product Manager', text: 'Claudio shipped our MVP in half the time others estimated, and even leveled up our team with his code reviews. Highly recommend.', color: '#13B9FD', initials: 'MC' },
      { name: 'Rafael Souza', role: 'Founder, early-stage fintech', text: 'I interviewed several Flutter devs before hiring Claudio. The difference is in his care for architecture and UX. App has been running 1 year without critical crashes.', color: '#FF6B35', initials: 'RS' },
      { name: 'Juliana Reis', role: 'CTO, healthtech', text: 'Excellent communication, deadlines honored, and code that ages well. He was tech advisor on a critical migration and got our team unstuck.', color: '#A855F7', initials: 'JR' },
    ],
    contact: {
      kicker: "Let's work together",
      lede: 'Got a project in mind, a squad to reinforce, or just a technical question? Send a message — I read every email personally.',
      email: 'claudio@csz.dev',
      form: {
        name: 'Your name',
        email: 'Email',
        company: 'Company (optional)',
        budget: 'Estimated budget',
        budgets: ['Select…', 'Up to $2k', '$2k – $6k', '$6k – $16k', 'Above $16k', 'Not sure yet'],
        message: 'Tell me about your project',
        messagePh: 'What you want to build, timelines, platform…',
        submit: 'Send message',
        sent: 'Message received — talk soon!',
      },
    },
    footer: {
      sig: '© 2026 · Claudio Suzarte · Made with Flutter at heart',
      tagline: 'Mobile Developer · Available for freelance',
      colophon: 'Crafted with care · Hosted at csz.dev',
    },
  },
};

window.COPY = COPY;
