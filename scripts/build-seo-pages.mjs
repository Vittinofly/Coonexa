import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const siteUrl = "https://coonexa.netlify.app";
const outputDirectory = resolve(process.cwd(), "dist");
const siteName = "Coonexa";
const phone = "5564996956530";
const email = "victorhugo.slmb@gmail.com";
const socialImage = `${siteUrl}/img/coonexa-social.png`;

const servicePages = [
  {
    path: "/criacao-de-sites/",
    title: "Criação de Sites e Landing Pages | Coonexa",
    description: "Criação de sites e landing pages para pequenos negócios. Atendimento online em todo o Brasil e em São Luís de Montes Belos, Goiás.",
    keyword: "Criação de sites",
    service: "Criação de sites e landing pages",
    type: "service",
    h1: "Criação de sites que apresentam bem o seu negócio",
    intro: "Seu site precisa explicar o que você oferece, para quem trabalha e como começar uma conversa. A Coonexa cria sites institucionais e landing pages com estrutura alinhada ao objetivo e ao escopo do projeto.",
    paragraphs: [
      ["Um site pensado para quem precisa encontrar você", "Ajudamos empresas e profissionais que ainda dependem apenas das redes sociais, recebem perguntas repetidas sobre seus serviços ou precisam organizar melhor suas informações. A página apresenta o negócio com clareza, funciona em celulares e oferece caminhos de contato fáceis de encontrar."],
      ["O que pode fazer parte de um projeto", "Conforme a proposta, um projeto pode incluir landing page ou site institucional responsivo, apresentação de serviços, botões para WhatsApp, formulário de contato, estrutura inicial para mecanismos de busca e integração com os canais digitais já utilizados pela empresa. O conteúdo, o número de páginas, as revisões e as integrações são definidos antes do início."],
      ["Como funciona a criação do site", "Começamos entendendo os clientes da empresa, a área atendida, os serviços prioritários e os materiais existentes. Em seguida, apresentamos escopo, investimento, prazo estimado e responsabilidades. Depois das validações previstas, desenvolvemos, testamos em celular e computador e combinamos a publicação."],
      ["SEO responsável para o site", "Organizamos títulos, descrições, hierarquia de conteúdo, links internos, metadados e dados estruturados quando adequados. SEO ajuda buscadores a entender a página, mas não garante posições, tráfego ou vendas. O desempenho depende também da concorrência, do conteúdo, da reputação e de fatores externos."],
      ["Atendimento local e online", "A criação de sites pode ser feita online para clientes em todo o Brasil. A Coonexa também atende empresas de São Luís de Montes Belos e região, em Goiás. Hospedagem, domínio, ferramentas de terceiros e manutenção contínua ficam especificados separadamente quando se aplicam."]
    ],
    bullets: [
      "Landing pages para apresentar uma oferta ou serviço.",
      "Sites institucionais com informações e canais de contato.",
      "Integração com WhatsApp e Perfil da Empresa no Google.",
      "Melhorias de conteúdo, estrutura e experiência em sites existentes."
    ],
    faqs: [
      ["Quanto custa criar um site?", "O investimento depende do número de páginas, conteúdo, integrações e funcionalidades. A Coonexa apresenta uma proposta detalhada, com valores e limites, depois de entender o projeto."],
      ["O site vai aparecer no primeiro lugar do Google?", "Não é possível garantir uma posição. A Coonexa pode organizar fatores técnicos e conteúdo inicial, mas os resultados dependem de diversos fatores e da concorrência."],
      ["Preciso pagar hospedagem e domínio?", "Domínio e hospedagem são custos externos recorrentes quando utilizados. A proposta explica quem contrata e paga cada serviço."],
      ["A Coonexa faz sites para clientes de outros estados?", "Sim. Projetos de desenvolvimento web podem ser atendidos online em todo o Brasil."]
    ]
  },
  {
    path: "/perfil-da-empresa-no-google/",
    title: "Perfil da Empresa no Google | São Luís de Montes Belos | Coonexa",
    description: "Organize seu Perfil da Empresa no Google em São Luís de Montes Belos e região. Configuração cuidadosa, informações coerentes e sem promessa de posição.",
    keyword: "Perfil da Empresa no Google",
    service: "Configuração do Perfil da Empresa no Google",
    type: "service",
    h1: "Organize seu Perfil da Empresa no Google",
    intro: "Um perfil completo facilita encontrar informações sobre uma empresa na Pesquisa Google e no Maps. A Coonexa ajuda negócios elegíveis a organizar seus dados e canais digitais.",
    paragraphs: [
      ["O que é o Perfil da Empresa no Google", "É uma ferramenta do Google que permite a empresas elegíveis apresentar informações comerciais na Pesquisa Google e no Maps. Nome real, categoria, horário, serviços e área atendida precisam corresponder ao funcionamento verdadeiro do negócio."],
      ["Como é o serviço da Coonexa", "O trabalho pode envolver verificar se já existe um perfil, organizar categorias e serviços, revisar descrição e horário, adicionar contatos fornecidos pela empresa, orientar o processo de verificação e conectar o perfil ao site. O cliente continua responsável pelo negócio e mantém o controle do perfil; não solicitamos senhas pessoais."],
      ["Elegibilidade, verificação e resultados", "A criação do perfil não tem custo cobrado pelo Google. A configuração profissional, revisão e acompanhamento são serviços da Coonexa e podem ter orçamento próprio. A elegibilidade e o método de verificação são definidos pelo Google. Não garantimos aprovação, posição nos resultados ou quantidade de contatos."],
      ["Endereço e empresas de área de serviço", "Negócios que visitam clientes ou atendem pessoalmente em uma área podem, quando elegíveis conforme as políticas vigentes, configurar uma área de serviço e ocultar o endereço residencial. Não se deve cadastrar escritório virtual, endereço fictício ou área que a empresa não atende."],
      ["Atendimento na região", "A configuração local e o suporte presencial da Coonexa atendem São Luís de Montes Belos e região, em Goiás. Antes de qualquer alteração, verificamos o perfil existente para evitar duplicidades."]
    ],
    bullets: [
      "Verificação de perfis existentes antes da configuração.",
      "Revisão de categoria, serviços, horários e contatos.",
      "Orientação para verificação e solicitação ética de avaliações.",
      "Integração com site e canais de contato quando contratada."
    ],
    faqs: [
      ["Criar um Perfil da Empresa no Google é gratuito?", "A criação do perfil é gratuita no Google. A Coonexa cobra pelo trabalho profissional de organização, configuração e acompanhamento quando contratado."],
      ["A Coonexa consegue garantir a aprovação ou o primeiro lugar?", "Não. Aprovação, verificação, elegibilidade e classificação dependem dos critérios e sistemas do Google."],
      ["Posso ocultar meu endereço residencial?", "Empresas elegíveis que atendem clientes no local deles podem configurar uma área de serviço e ocultar o endereço residencial, conforme as políticas do Google."],
      ["Posso oferecer benefícios em troca de avaliações?", "Não é recomendável oferecer incentivo por avaliações. Peça feedback genuíno e imparcial, sem condicionar benefício ou recompensa."]
    ]
  },
  {
    path: "/marketing-digital-local/",
    title: "Marketing Digital Local para Pequenos Negócios | Coonexa",
    description: "Presença digital e marketing local para negócios de São Luís de Montes Belos e região, com planejamento realista, organização e comunicação clara.",
    keyword: "Marketing digital local",
    service: "Marketing digital local",
    type: "service",
    h1: "Marketing local que começa pela realidade do seu negócio",
    intro: "Estar presente na internet não significa estar em todos os canais. A Coonexa ajuda pequenos negócios a entender onde estão as oportunidades e a organizar os caminhos que aproximam clientes e empresa.",
    paragraphs: [
      ["O que significa marketing digital local", "É o conjunto de ações digitais voltadas a ajudar uma empresa a se apresentar e ser encontrada por pessoas da região que atende. Pode incluir organização das informações comerciais, conteúdo, Perfil da Empresa no Google, site e chamadas claras para contato."],
      ["Começar com um diagnóstico, não com promessas", "Analisamos o que existe, quais serviços são prioritários e como potenciais clientes encontram a empresa hoje. Com esse contexto, propomos atividades que cabem na rotina e na capacidade de entrega — sem prometer alcance, vendas ou crescimento garantido."],
      ["Um plano proporcional", "O escopo pode prever ajustes de informações comerciais, pautas úteis, publicações em canais contratados e acompanhamento de indicadores disponíveis. Gestão completa de redes sociais, campanhas pagas, produção contínua de conteúdo e custos de anúncios não são presumidos: devem constar explicitamente na proposta."],
      ["Acompanhar o que tem significado", "Visualizações não são a mesma coisa que vendas. Quando os dados estão disponíveis, observamos interações, visitas ao site e contatos iniciados para identificar hipóteses de melhoria. Interpretamos essas métricas no contexto da atividade e do período observado."],
      ["Atendimento em São Luís de Montes Belos e no Brasil", "O atendimento de marketing e organização da presença digital pode acontecer online para empresas em todo o Brasil e presencialmente conforme a necessidade em São Luís de Montes Belos e região."]
    ],
    bullets: [
      "Diagnóstico da presença digital e do público local.",
      "Organização do Perfil da Empresa no Google e do site.",
      "Planejamento de conteúdo de acordo com os serviços prioritários.",
      "Relatórios e propostas de próximos passos conforme o contrato."
    ],
    faqs: [
      ["Marketing digital inclui gestão das redes sociais?", "Somente se estiver descrita como entrega na proposta. Produção de conteúdo em grande volume e gestão completa podem ser orçadas separadamente."],
      ["É garantido que o marketing gere novos clientes?", "Não. Estratégias e conteúdo podem facilitar a descoberta e o contato, mas não garantem alcance, contatos ou vendas."],
      ["Vocês trabalham com anúncios pagos?", "Campanhas e investimento em mídia são definidos separadamente quando esse serviço estiver disponível e fizer parte do projeto."],
      ["O serviço é mensal?", "Pode ser pontual ou contínuo, conforme a necessidade. Entregas, limites, valores e condições são alinhados previamente."]
    ]
  },
  {
    path: "/suporte-de-informatica/",
    title: "Suporte e Formatação de Computadores | Coonexa",
    description: "Suporte de informática, formatação, limpeza e instalação de software em São Luís de Montes Belos e região. Consulte disponibilidade pelo WhatsApp.",
    keyword: "Suporte de informática",
    service: "Suporte de informática e manutenção de computadores",
    type: "service",
    h1: "Seu computador está lento ou apresentando problemas?",
    intro: "Antes de formatar, é importante entender o que está acontecendo e proteger os arquivos importantes. A Coonexa oferece suporte de informática em São Luís de Montes Belos e região, conforme diagnóstico, disponibilidade e escopo combinado.",
    paragraphs: [
      ["Diagnóstico antes de qualquer intervenção", "Computador lento, travamentos e falhas podem ter causas diferentes. Conversamos sobre os sintomas, o equipamento e as necessidades. Antes de serviços que possam alterar dados, explicamos o procedimento e a importância de verificar se existe backup."],
      ["Serviços que podem ser avaliados", "Conforme a capacidade técnica, o equipamento e o diagnóstico, a Coonexa pode atender limpeza e organização de computador, formatação e instalação de sistema, instalação de software, configuração de periféricos, organização de arquivos e backup. O atendimento e os componentes de terceiros são combinados previamente."],
      ["Segurança dos arquivos e programas", "O backup depende do acesso aos arquivos, do estado do equipamento e de haver espaço ou mídia de destino. A lista de programas, licenças, senhas de recuperação e instaladores deve ser confirmada com o cliente. Não inicie uma formatação sem confirmar previamente o que será preservado."],
      ["Atendimento presencial na região", "Este serviço de informática é direcionado a São Luís de Montes Belos e localidades próximas, em Goiás. Disponibilidade de deslocamento e tipo de atendimento são confirmados pelo WhatsApp antes do agendamento. No momento, não presumimos atendimento remoto para reparo físico."]
    ],
    bullets: [
      "Avaliação de computador lento ou travando.",
      "Limpeza e organização, conforme o equipamento.",
      "Formatação e instalação de software conforme diagnóstico.",
      "Orientação sobre backup e arquivos que precisam ser preservados."
    ],
    faqs: [
      ["Quanto custa formatar ou limpar um computador?", "O valor depende do equipamento, do diagnóstico e dos serviços solicitados. Consulte a Coonexa para confirmar disponibilidade e receber uma estimativa antes da execução."],
      ["Meus arquivos serão apagados na formatação?", "A formatação pode remover dados. Combine previamente quais arquivos devem ser preservados e confirme o backup antes de autorizar o procedimento."],
      ["A Coonexa atende em domicílio?", "A possibilidade e o local de atendimento presencial são confirmados caso a caso em São Luís de Montes Belos e região."],
      ["A Coonexa instala qualquer programa?", "A instalação depende da compatibilidade, da disponibilidade do instalador e de uma licença válida quando necessária."]
    ]
  },
  {
    path: "/solucoes-digitais-integradas/",
    title: "Site, Google e WhatsApp Integrados | Coonexa",
    description: "Conecte site, Perfil da Empresa no Google e WhatsApp para organizar sua presença digital. Atendimento online em todo o Brasil.",
    keyword: "Soluções digitais integradas",
    service: "Integração de site, Perfil da Empresa no Google e WhatsApp",
    type: "service",
    h1: "Site, Google e WhatsApp trabalhando juntos",
    intro: "Quando os canais apresentam informações consistentes e um próximo passo claro, fica mais simples para as pessoas conhecerem o negócio e iniciarem uma conversa.",
    paragraphs: [
      ["Uma solução conectada começa pela jornada do cliente", "A pessoa pode conhecer uma empresa na pesquisa local, abrir o site e chamar pelo WhatsApp. Se os horários, serviços ou telefones estiverem divergentes, essa experiência perde clareza. A Coonexa ajuda a organizar essa jornada conforme os canais que o negócio utiliza."],
      ["O que pode ser integrado", "Um escopo pode combinar criação ou atualização de site, revisão de links e informações comerciais, conexão com o Perfil da Empresa no Google e botões de WhatsApp com mensagens relevantes. Cada item depende de acessos e permissões apropriados, materiais aprovados e elegibilidade de cada plataforma."],
      ["Como planejar sem comprar ferramentas desnecessárias", "Primeiro identificamos os pontos de atrito e o que já funciona. Depois, priorizamos entregas que atendam às necessidades atuais. Sistemas, automações, plataformas pagas, anúncios e serviços de terceiros passam por avaliação e orçamento separados quando não estiverem incluídos."],
      ["Transparência sobre resultados", "A conexão técnica facilita encontrar informações e iniciar contato, mas não garante posições no Google, volumes de tráfego ou vendas. Quando contratado e tecnicamente disponível, o acompanhamento pode observar cliques e interações para orientar melhorias."],
      ["Atendimento", "Projetos digitais podem ser realizados online para empresas de todo o Brasil. A Coonexa também atua em São Luís de Montes Belos e região, Goiás."]
    ],
    bullets: [
      "Identificação dos caminhos entre busca, site e contato.",
      "Organização consistente de informações e canais.",
      "Definição de entregas, permissões e responsabilidades.",
      "Possibilidade de acompanhar métricas disponíveis no escopo."
    ],
    faqs: [
      ["Preciso contratar o site, o perfil do Google e o acompanhamento juntos?", "Não. Podemos avaliar os canais já existentes e sugerir os serviços que correspondem à sua necessidade. A proposta descreve cada entrega."],
      ["A integração melhora minha posição no Google?", "Não há garantia de posição. Manter dados coerentes e páginas úteis ajuda a experiência e a compreensão das informações, mas classificação depende de muitos fatores."],
      ["O WhatsApp pode receber uma mensagem pré-preenchida?", "Sim. O site pode abrir uma conversa com uma mensagem inicial. O visitante decide se deseja enviá-la."],
      ["Quanto custa uma solução integrada?", "O investimento é calculado a partir dos canais, serviços e escopo. Custos externos, mensais e itens não incluídos são apresentados separadamente."]
    ]
  }
];

const contentPages = [
  {
    path: "/servicos/",
    title: "Serviços de Tecnologia, Web e Marketing | Coonexa",
    description: "Conheça criação de sites, Perfil da Empresa no Google, marketing local, suporte de informática e soluções digitais integradas da Coonexa.",
    keyword: "Serviços digitais para pequenos negócios",
    type: "directory",
    h1: "Soluções digitais para as necessidades do seu negócio",
    intro: "A Coonexa une tecnologia, web e marketing para ajudar pequenos negócios, profissionais e pessoas físicas a organizar sua presença digital e resolver necessidades de informática.",
    paragraphs: [
      ["Serviços no tamanho da necessidade", "Cada projeto começa por entender o problema, o contexto e o que já existe. Em seguida, alinhamos entregas, investimento, prazo estimado e responsabilidades. Não é necessário contratar todos os serviços juntos."],
      ["Desenvolvimento web", "Sites institucionais e landing pages apresentam serviços e facilitam o contato. Os projetos incluem apenas páginas, funcionalidades e revisões descritas na proposta. Atendimento online em todo o Brasil."],
      ["Perfil da Empresa no Google e marketing local", "Ajudamos negócios elegíveis a organizar informações na Pesquisa Google e no Maps e planejamos melhorias de presença local. Verificação, classificação e exibição dependem do Google."],
      ["Suporte de informática", "Avaliamos limpeza, formatação, instalação de software e outras necessidades de computadores em São Luís de Montes Belos e região. O diagnóstico, disponibilidade e escopo são confirmados antes do serviço."]
    ],
    bullets: servicePages.map((page) => page.service),
    faqs: [
      ["Como escolho o serviço certo?", "Converse sobre o desafio atual e os canais existentes. A Coonexa avalia o que pode fazer sentido e apresenta uma proposta sem obrigação de contratar todos os serviços."],
      ["O atendimento é presencial ou online?", "Suporte de informática é presencial em São Luís de Montes Belos e região conforme disponibilidade. Serviços digitais podem ser realizados online para clientes de todo o Brasil."],
      ["Vocês informam os valores antes do início?", "Sim. A proposta define o investimento, entregas, itens adicionais e responsabilidades antes de o trabalho começar."]
    ]
  },
  {
    path: "/sobre/",
    title: "Sobre a Coonexa | Tecnologia, Web e Marketing",
    description: "Conheça a Coonexa, empresa de tecnologia, web e marketing em São Luís de Montes Belos, Goiás, com serviços digitais online para todo o Brasil.",
    keyword: "Sobre a Coonexa",
    type: "about",
    h1: "Coonexa: tecnologia para conectar negócios e pessoas",
    intro: "Coonexa reúne cooperação e conexão: trabalhamos com empresas e profissionais para aproximar negócios de pessoas, tecnologia e oportunidades.",
    paragraphs: [
      ["Nossa proposta", "A Coonexa está desenvolvendo uma operação de tecnologia, web e marketing para pequenos e médios negócios, profissionais autônomos e pessoas que precisam de suporte de informática. O foco é compreender o problema antes de sugerir uma solução."],
      ["Como trabalhamos", "Buscamos tornar cada projeto compreensível. Apresentamos escopo, investimento, limites, custos externos e responsabilidades antes do início; depois, executamos as entregas combinadas e explicamos próximos passos."],
      ["Soluções que se conectam", "Um site, o Perfil da Empresa no Google e o WhatsApp podem fazer parte de uma mesma jornada. Também avaliamos sistemas e automação por projeto e oferecemos suporte de informática local conforme disponibilidade."],
      ["Onde atendemos", "A Coonexa está em São Luís de Montes Belos, Goiás. Serviços de suporte presencial atendem a cidade e localidades próximas conforme disponibilidade. Desenvolvimento web e outros projetos digitais podem ser realizados online para clientes em todo o Brasil."],
      ["Compromisso com informações verdadeiras", "A empresa está em fase de desenvolvimento. Não publicamos números de clientes, depoimentos, avaliações, anos de mercado ou resultados que não tenham sido confirmados e autorizados."]
    ],
    bullets: ["Cooperação e comunicação próxima.", "Transparência sobre escopo e investimento.", "Tecnologia aplicada a necessidades reais.", "Evolução gradual e entregas responsáveis."],
    faqs: [
      ["O que significa o nome Coonexa?", "Coonexa expressa a combinação de cooperação e conexão: aproximar empresas, pessoas, tecnologia e oportunidades por meio do trabalho colaborativo."],
      ["A Coonexa é uma cooperativa?", "Não. Cooperação é um valor e uma ideia presente no nome da marca; a empresa não se apresenta como cooperativa formal."],
      ["Onde fica a Coonexa?", "A Coonexa está em São Luís de Montes Belos, Goiás, sem estabelecimento aberto ao público divulgado. O atendimento presencial é combinado conforme o serviço."]
    ]
  },
  {
    path: "/portfolio/",
    title: "Portfólio e Projetos da Coonexa",
    description: "Conheça o formato de apresentação dos projetos Coonexa. Cases e marcas de clientes só serão publicados com autorização.",
    keyword: "Portfólio Coonexa",
    type: "portfolio",
    h1: "Projetos com contexto, escopo e autorização",
    intro: "Um portfólio responsável descreve o problema, o trabalho realizado e as ferramentas usadas sem inventar resultados ou divulgar materiais sem autorização.",
    paragraphs: [
      ["Um case que respeita o cliente", "Quando um projeto é autorizado para divulgação, a apresentação informa o contexto, as entregas e os materiais aprovados pelo cliente. Resultados comerciais só são publicados quando existem dados verificáveis e autorização explícita."],
      ["La Rose Eventos", "Há referência a um site institucional desenvolvido para La Rose Eventos, com apresentação de marca, serviços, galeria e contatos. O case, o nome da empresa, capturas de tela, imagens e depoimentos só devem ser exibidos após confirmação da autorização do cliente."],
      ["Sem depoimentos inventados", "A Coonexa está construindo seu portfólio. Até que existam depoimentos e avaliações reais, autorizados para divulgação, não apresentamos citações, notas ou logotipos como prova social."],
      ["Apresente seu projeto", "Se você procura um site, uma integração ou suporte local, envie seu contexto e os objetivos pelo WhatsApp. A Coonexa conversará sobre possibilidade, escopo e próximos passos."]
    ],
    bullets: ["Contexto e objetivo combinados com o cliente.", "Entregas e limites do projeto.", "Mídias autorizadas e créditos corretos.", "Resultados documentados, nunca presumidos."],
    faqs: [
      ["Posso ver projetos publicados pela Coonexa?", "O portfólio público está sendo organizado. Projetos de clientes só serão exibidos quando houver autorização para publicação."],
      ["Por que ainda não há depoimentos?", "Depoimentos precisam ser reais e autorizados. A Coonexa prefere não publicar avaliações inventadas ou não verificadas."],
      ["Como solicito um projeto?", "Envie uma mensagem contando seu negócio, o que deseja resolver e a cidade. A conversa inicial ajuda a definir se o atendimento é compatível."]
    ]
  },
  {
    path: "/contato/",
    title: "Contato e Orçamento | Coonexa",
    description: "Converse com a Coonexa pelo WhatsApp, telefone ou e-mail. Atendimento em São Luís de Montes Belos e projetos digitais online em todo o Brasil.",
    keyword: "Contato Coonexa",
    type: "contact",
    h1: "Conte o que precisa mudar no seu negócio",
    intro: "Uma conversa clara ajuda a entender a necessidade antes de recomendar um serviço. Envie seu desafio e a Coonexa retorna para conversar sobre possibilidade, escopo e orçamento.",
    paragraphs: [
      ["Atendimento local e online", "A Coonexa está em São Luís de Montes Belos, Goiás. Serviços de suporte presencial são combinados conforme disponibilidade na região. Desenvolvimento web e outros projetos digitais podem ser conduzidos online para clientes de todo o Brasil."],
      ["O que incluir no primeiro contato", "Conte o que sua empresa faz, o que está dificultando o trabalho, o serviço que imagina precisar e a cidade onde está. Se já possui site ou perfil no Google, inclua o endereço público, sem enviar senhas."],
      ["Orçamento com escopo", "Depois de entender a necessidade, a proposta detalha entregas, prazo estimado, investimento, responsabilidades e custos externos quando se aplicam. Uma consulta pelo WhatsApp não cria obrigação de contratação."]
    ],
    bullets: ["WhatsApp: (64) 9 9695-6530.", "E-mail: victorhugo.slmb@gmail.com.", "Instagram: @coonexaweb.", "Atendimento informado: das 8h às 18h."],
    faqs: [
      ["O primeiro contato tem custo?", "A conversa inicial para entender a necessidade não cria compromisso de contratação. Serviços de diagnóstico ou execução pagos serão apresentados previamente."],
      ["Posso mandar minhas senhas pelo WhatsApp?", "Não envie senhas pessoais nem códigos de autenticação. A Coonexa solicita permissões apropriadas e necessárias para cada serviço."],
      ["A Coonexa atende presencialmente?", "A possibilidade de atendimento presencial depende do serviço, do local e da disponibilidade; confirme pelo WhatsApp antes de se deslocar."]
    ]
  },
  {
    path: "/blog/",
    title: "Blog Coonexa | Guias de Sites, Google e Informática",
    description: "Guias práticos da Coonexa sobre sites, Perfil da Empresa no Google, marketing local e informática para pequenos negócios.",
    keyword: "Guias de tecnologia para pequenos negócios",
    type: "blog",
    h1: "Conteúdo prático para decisões digitais melhores",
    intro: "Guias informativos e diretos para ajudar empresas e profissionais a entender sites, presença local e suporte de informática — sem promessas exageradas.",
    paragraphs: [
      ["Como usar estes guias", "Cada artigo explica conceitos, passos e cuidados para apoiar uma decisão. As orientações não substituem diagnóstico específico, as políticas do Google ou o atendimento de suporte técnico quando necessário."]
    ],
    bullets: []
  },
  {
    path: "/privacidade/",
    title: "Privacidade e Dados Pessoais | Coonexa",
    description: "Entenda como a Coonexa utiliza os dados enviados por formulários de contato e quais controles de analytics existem no site.",
    keyword: "Privacidade Coonexa",
    type: "privacy",
    h1: "Privacidade e dados pessoais",
    intro: "Esta página descreve, em linguagem simples, como os recursos atuais deste site podem tratar dados. Confirme que estes procedimentos correspondem à operação real antes de ativar formulários ou analytics em produção.",
    paragraphs: [
      ["Contato pelo WhatsApp ou e-mail", "Quando você escolhe abrir uma conversa, o WhatsApp ou o seu provedor de e-mail processa os dados necessários para prestar o serviço. O site não recebe automaticamente o conteúdo dessas conversas."],
      ["Formulário do site", "Quando o formulário é publicado e ativado, os campos enviados são recebidos por infraestrutura de formulários da Netlify e encaminhados à Coonexa para responder à solicitação. Informe somente dados necessários ao atendimento. A Coonexa não solicita senhas, dados bancários nem informações sensíveis pelo formulário."],
      ["Medição de audiência", "O Google Analytics 4 está desativado até que a Coonexa configure um identificador válido e o visitante aceite analytics pelo controle exibido no site. A recusa mantém o serviço de medição desativado. O Google pode tratar dados conforme suas políticas e configurações de região e retenção."],
      ["Solicitações sobre dados", "Para perguntar sobre uma mensagem ou solicitação enviada, escreva para victorhugo.slmb@gmail.com. A Coonexa avaliará a solicitação e o tratamento aplicável conforme o contexto e as obrigações legais."],
      ["Revisão deste aviso", "Antes de ativar o formulário e analytics, revise a base legal, o fluxo operacional, os prazos de guarda e as informações dos fornecedores. Atualize este aviso quando o funcionamento mudar."]
    ],
    bullets: [],
    faqs: [
      ["O Google Analytics funciona sem eu aceitar?", "Não. Neste site, a medição só é carregada depois da configuração do identificador GA4 e da escolha explícita de aceitar analytics."],
      ["Preciso informar senha ou código de acesso?", "Não. Não envie senhas, códigos de autenticação nem credenciais por formulários, e-mail ou WhatsApp."]
    ]
  }
];

const articles = [
  {
    path: "/blog/como-criar-site-para-pequena-empresa/",
    title: "Como Criar um Site para Pequena Empresa: o que Planejar",
    description: "Entenda como definir objetivo, conteúdo, páginas e custos para planejar um site útil para sua pequena empresa.",
    keyword: "Como criar site para pequena empresa",
    type: "article",
    h1: "Como planejar um site para pequena empresa",
    intro: "Um site começa pela necessidade do cliente, não pela escolha de efeitos ou plataformas. Este roteiro ajuda a planejar uma presença digital clara antes de pedir orçamento.",
    paragraphs: [
      ["1. Defina a ação mais importante", "Decida o que você deseja que o visitante faça: conhecer um serviço, solicitar orçamento, marcar horário, consultar informações ou abrir uma conversa. Uma prioridade clara ajuda a organizar a página."],
      ["2. Reúna as informações confiáveis", "Prepare nome, descrição, serviços, área atendida, horários, contatos, perguntas frequentes e materiais visuais autorizados. Informações consistentes ajudam os clientes a compreender o que a empresa oferece."],
      ["3. Escolha páginas conforme a necessidade", "Um negócio que oferece poucos serviços pode começar com uma landing page ou página institucional. Mais categorias, conteúdos ou processos podem justificar uma estrutura maior. Não é necessário lançar todas as funcionalidades de uma vez."],
      ["4. Planeje contato e domínio", "Facilite a localização do telefone, WhatsApp e formulário. Combine quem contrata domínio, hospedagem e ferramentas de terceiros e em nome de quem as contas serão registradas."],
      ["5. Solicite uma proposta detalhada", "Peça um escopo com páginas, revisões, prazo estimado, conteúdo, itens não incluídos, investimento inicial e eventuais custos recorrentes. SEO inicial não garante uma posição ou quantidade de visitas."]
    ],
    bullets: ["Objetivo e público definidos.", "Conteúdo e imagens autorizadas.", "Escopo e responsabilidades combinados.", "Domínio, hospedagem e custos externos esclarecidos."],
    faqs: [
      ["Uma pequena empresa precisa de um site com muitas páginas?", "Não necessariamente. A estrutura adequada depende dos serviços, das dúvidas dos clientes e da ação que a empresa quer facilitar."],
      ["Quanto tempo leva para desenvolver?", "O prazo depende do escopo, materiais e aprovações. Combine uma estimativa por escrito antes de começar."],
      ["Criar um site garante clientes?", "Não. O site é uma ferramenta de apresentação e contato; vendas dependem de diversos fatores."]
    ]
  },
  {
    path: "/blog/perfil-empresa-google-guia-local/",
    title: "Perfil da Empresa no Google: Guia para Negócios Locais",
    description: "Saiba como manter informações corretas, evitar perfis duplicados e pedir avaliações legítimas no Perfil da Empresa no Google.",
    keyword: "Perfil da Empresa no Google para negócios locais",
    type: "article",
    h1: "Perfil da Empresa no Google: cuidados essenciais",
    intro: "Um perfil local útil começa com informações verdadeiras e uma empresa elegível. Este guia mostra o que revisar sem prometer posição ou aprovação.",
    paragraphs: [
      ["Verifique se o perfil já existe", "Pesquise o nome e a localização da empresa antes de criar outro perfil. Um cadastro duplicado pode confundir clientes e complicar a gestão."],
      ["Use informações que representam a empresa real", "Mantenha nome, categorias, telefone e horários coerentes. Não adicione palavras-chave ao nome comercial, localização fictícia ou serviços que a empresa não oferece."],
      ["Entenda endereço e área de atendimento", "Empresas elegíveis que visitam os clientes podem configurar uma área de serviço e ocultar o endereço residencial. Escritórios virtuais e endereços sem operação real não devem ser usados como localização."],
      ["Solicite avaliações imparciais", "Você pode convidar clientes a deixar uma avaliação honesta, mas não condicione recompensas, descontos ou pagamentos a uma avaliação positiva."],
      ["Acompanhe com expectativas realistas", "A verificação, elegibilidade, exibição e classificação são controladas pelo Google. Métricas de visualizações e ações podem dar contexto, mas não equivalem automaticamente a vendas."]
    ],
    bullets: ["Dados verdadeiros e atualizados.", "Sem perfil duplicado.", "Sem compra ou incentivo de avaliação.", "Cliente mantém controle e acesso ao perfil."],
    faqs: [
      ["O Perfil da Empresa no Google custa para criar?", "A criação do perfil é gratuita pelo Google. Serviços profissionais de configuração e gestão podem ter custo."],
      ["O perfil garante que a empresa apareça primeiro?", "Não. Não há garantia de posição, elegibilidade ou quantidade de contatos."],
      ["Posso cadastrar o endereço da minha casa?", "Só use o endereço conforme o tipo de operação e as políticas atuais do Google; empresas de área de serviço elegíveis podem ocultar seu endereço."]
    ]
  },
  {
    path: "/blog/marketing-digital-local-pequenos-negocios/",
    title: "Marketing Digital Local para Pequenos Negócios: por onde Começar",
    description: "Cinco passos para organizar canais, mensagens e informações de marketing digital local sem depender de promessas de vendas.",
    keyword: "Marketing digital local para pequenos negócios",
    type: "article",
    h1: "Marketing digital local: por onde começar",
    intro: "Uma estratégia local pode começar de forma simples: organizar o que já existe, tornar as informações consistentes e facilitar o próximo passo.",
    paragraphs: [
      ["1. Entenda como clientes encontram o negócio", "Converse com clientes e equipe para conhecer dúvidas frequentes, serviços procurados e canais que as pessoas realmente usam."],
      ["2. Organize a informação básica", "Revise nome comercial, descrição, serviços, horários, contatos e área atendida nos canais públicos. Corrija diferenças antes de ampliar a divulgação."],
      ["3. Escolha poucos canais prioritários", "Um perfil local, um site e um canal de contato podem ser mais úteis que manter muitas redes sociais sem tempo para atualizá-las."],
      ["4. Publique conteúdo que responda dúvidas", "Explique um serviço, suas etapas, requisitos e limites. Evite prometer resultados garantidos, usar avaliações compradas ou apresentar informação não confirmada."],
      ["5. Acompanhe contatos, não só visualizações", "Quando houver mensuração, observe interações e consultas recebidas e compare períodos com contexto. Um aumento de visualizações isolado não prova aumento de vendas."]
    ],
    bullets: ["A mensagem explica o serviço.", "O cliente sabe como entrar em contato.", "A equipe consegue manter os canais atualizados.", "O escopo e os indicadores são realistas."],
    faqs: [
      ["Preciso publicar todos os dias?", "A frequência deve ser compatível com a capacidade de criar conteúdo útil e correto. Não existe obrigação universal de publicar diariamente."],
      ["Mais visualizações significam mais vendas?", "Não necessariamente. Avalie contatos e resultados no contexto, distinguindo alcance de conversão."],
      ["Marketing local exige anúncios?", "Não. Anúncios pagos são uma opção separada e precisam de orçamento e objetivo definidos."]
    ]
  },
  {
    path: "/blog/computador-lento-o-que-fazer/",
    title: "Computador Lento ou Travando? O que Verificar com Segurança",
    description: "Cuidados iniciais para um computador lento: backup, espaço, atualizações e quando solicitar diagnóstico técnico.",
    keyword: "Computador lento ou travando",
    type: "article",
    h1: "Computador lento ou travando: primeiros cuidados",
    intro: "Lentidão pode ter diversas causas. Antes de apagar arquivos, instalar utilitários ou formatar, proteja os dados e observe quando o problema acontece.",
    paragraphs: [
      ["Anote quando a lentidão aparece", "Observe se o problema ocorre ao iniciar o computador, abrir um programa específico ou conectar um periférico. Uma descrição concreta ajuda a orientar o diagnóstico."],
      ["Confira o espaço e reinicie com segurança", "Pouco espaço disponível e processos temporários podem afetar o desempenho. Feche aplicativos, salve o trabalho e reinicie. Evite apagar pastas do sistema ou arquivos que você não reconhece."],
      ["Proteja seus arquivos", "Se o equipamento ainda consegue acessar os arquivos, faça uma cópia de segurança em um destino confiável. Se houver ruídos, falhas no disco ou arquivos importantes inacessíveis, evite insistir em operações que possam piorar a recuperação."],
      ["Mantenha sistema e programas atualizados", "Instale atualizações a partir das ferramentas oficiais do sistema e dos fabricantes. Evite programas desconhecidos que prometem acelerar o computador e solicitem acesso amplo."],
      ["Quando pedir ajuda", "Procure suporte técnico se o computador continuar travando, reiniciar sem motivo, apresentar mensagens de erro ou guardar dados que não podem ser perdidos. Antes de formatar, confirme o backup, as licenças e os programas que serão necessários."]
    ],
    bullets: ["Observe os sintomas antes de fazer alterações.", "Faça backup de arquivos importantes.", "Evite utilitários desconhecidos e apagamentos manuais do sistema.", "Confirme os dados antes de autorizar uma formatação."],
    faqs: [
      ["Devo formatar meu computador quando fica lento?", "Nem sempre. A lentidão pode ter causas diferentes; um diagnóstico pode evitar perda de dados e trabalho desnecessário."],
      ["Uma formatação apaga arquivos?", "Pode apagar dados. Faça e verifique uma cópia de segurança antes de autorizar a formatação."],
      ["A Coonexa atende computadores em São Luís de Montes Belos?", "A Coonexa oferece suporte presencial na cidade e região conforme o tipo de serviço e a disponibilidade combinada."]
    ]
  },
  {
    path: "/blog/seo-local-sem-promessa-primeiro-lugar/",
    title: "SEO Local: o que Pode Melhorar e o que Não Dá para Garantir",
    description: "Entenda como site, conteúdo e informações locais ajudam o SEO e por que ninguém pode garantir primeiro lugar no Google.",
    keyword: "SEO local para pequenas empresas",
    type: "article",
    h1: "SEO local sem promessas de primeiro lugar",
    intro: "SEO organiza sinais e conteúdo para que buscadores compreendam uma página. Ele pode melhorar a qualidade técnica e informativa do site, mas não controla toda a pesquisa.",
    paragraphs: [
      ["Comece com informações consistentes", "Nome e contatos devem ser corretos nos canais da empresa. Uma área atendida precisa representar o serviço realmente prestado."],
      ["Crie páginas que atendam uma necessidade", "Uma página útil descreve serviços, etapas, limites, perguntas frequentes e como começar. Páginas repetidas com troca automática do nome de cidades não oferecem informação diferenciada."],
      ["Organize elementos técnicos", "Títulos únicos, metadados, links internos, experiência móvel, segurança e sitemap ajudam a estruturar a página. A indexação pode levar tempo e não é garantida."],
      ["Fortaleça a reputação legitimamente", "Mantenha perfis autênticos, solicite avaliações sem incentivo e busque menções relevantes de associações ou parceiros com relações reais."],
      ["Meça e revise", "Search Console informa consultas e páginas encontradas no Google. Analytics pode ajudar a medir interações com consentimento e configuração adequada. Nenhuma ferramenta transforma visualizações em receita garantida."]
    ],
    bullets: ["Páginas úteis e originais.", "Dados comerciais verdadeiros.", "Sitemap e Search Console configurados.", "Avaliações e links conquistados sem incentivos artificiais."],
    faqs: [
      ["Quanto tempo demora para aparecer no Google?", "O tempo de rastreamento e indexação varia. O envio do sitemap não garante indexação nem define prazo."],
      ["SEO local garante mais clientes?", "Não. SEO pode melhorar descoberta e apresentação, mas resultados comerciais dependem de muitos fatores."],
      ["Posso criar uma página para cada cidade próxima?", "Somente quando cada página representar um serviço realmente oferecido e tiver informação própria e útil, sem duplicação artificial."]
    ]
  }
];

const allPages = [
  ...servicePages,
  ...contentPages,
  ...articles
];

const routeHref = (route) => route === "/" ? "/" : route;
const whatsappHref = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[character]);

function serviceCards() {
  return servicePages.map((page) => `
    <article class="seo-service-card" data-reveal>
      <p class="seo-service-card__eyebrow">${esc(page.keyword)}</p>
      <h2><a href="${routeHref(page.path)}">${esc(page.service)}</a></h2>
      <p>${esc(page.intro)}</p>
      <a class="text-link" href="${routeHref(page.path)}">Conhecer o serviço <span aria-hidden="true">↗</span></a>
    </article>`).join("\n");
}

function articleCards() {
  return articles.map((page, index) => `
    <article class="seo-article-card" data-reveal>
      <span class="seo-article-card__number">${String(index + 1).padStart(2, "0")}</span>
      <div><p class="eyebrow"><span class="eyebrow__dot eyebrow__dot--blue"></span> Guia Coonexa</p>
      <h2><a href="${routeHref(page.path)}">${esc(page.h1)}</a></h2>
      <p>${esc(page.description)}</p>
      <a class="text-link" href="${routeHref(page.path)}">Ler o guia <span aria-hidden="true">↗</span></a></div>
    </article>`).join("\n");
}

function renderFaq(page) {
  if (!page.faqs?.length) return "";
  return `
    <section class="section section--paper" id="duvidas">
      <div class="container faq-layout">
        <div class="faq-intro">
          <p class="eyebrow"><span class="eyebrow__dot eyebrow__dot--blue"></span> Respostas diretas</p>
          <h2>Dúvidas frequentes sobre <span>${esc(page.keyword)}</span></h2>
          <p>Quer entender se esse serviço combina com sua necessidade? Conte seu contexto à Coonexa.</p>
          <a class="text-link" href="${whatsappHref(`Olá! Tenho uma dúvida sobre ${page.keyword}.`)}" target="_blank" rel="noopener noreferrer">Tire sua dúvida pelo WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div class="faq-list" data-accordion>
          ${page.faqs.map(([question, answer], index) => `
            <article class="faq-item">
              <h3><button class="faq-question" id="faq-question-${index + 1}" type="button" aria-expanded="false" aria-controls="faq-answer-${index + 1}">${esc(question)}<span class="faq-question__icon" aria-hidden="true"></span></button></h3>
              <div class="faq-answer" id="faq-answer-${index + 1}" role="region" aria-labelledby="faq-question-${index + 1}" hidden><p>${esc(answer)}</p></div>
            </article>`).join("\n")}
        </div>
      </div>
    </section>`;
}

function renderContactForm() {
  return `
    <section class="section section--light">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow"><span class="eyebrow__dot eyebrow__dot--blue"></span> Solicitação inicial</p>
          <h2 class="section-heading__title">Envie seu contexto e receba uma resposta.</h2>
          <p>Os campos com asterisco são necessários para entendermos a solicitação. Não envie senhas, informações bancárias ou dados sensíveis.</p>
          <p>Os dados enviados serão recebidos pela Coonexa para responder à sua solicitação. Leia o <a href="/privacidade/">aviso de privacidade</a>.</p>
          <a class="button button--light" href="${whatsappHref("Olá! Quero conversar com a Coonexa sobre meu negócio.")}" target="_blank" rel="noopener noreferrer"><span>Prefiro falar pelo WhatsApp</span><span class="button__arrow" aria-hidden="true">↗</span></a>
        </div>
        <form class="contact-form" name="contato-coonexa" method="POST" action="/obrigado/" data-netlify="true" netlify-honeypot="campo-filtro">
          <input type="hidden" name="form-name" value="contato-coonexa">
          <p class="contact-form__honeypot" aria-hidden="true"><label>Não preencha este campo: <input name="campo-filtro" tabindex="-1" autocomplete="off"></label></p>
          <label for="nome">Seu nome *</label>
          <input id="nome" name="nome" type="text" autocomplete="name" required maxlength="100">
          <label for="email">E-mail *</label>
          <input id="email" name="email" type="email" autocomplete="email" required maxlength="254">
          <label for="whatsapp">WhatsApp (opcional)</label>
          <input id="whatsapp" name="whatsapp" type="tel" autocomplete="tel" inputmode="tel" maxlength="25">
          <label for="servico">O que você precisa?</label>
          <select id="servico" name="servico">
            <option value="">Selecione uma opção</option>
            <option>Criação de site ou landing page</option>
            <option>Perfil da Empresa no Google</option>
            <option>Marketing digital local</option>
            <option>Suporte de informática</option>
            <option>Solução digital integrada</option>
            <option>Outro assunto</option>
          </select>
          <label for="mensagem">Conte brevemente sobre a necessidade *</label>
          <textarea id="mensagem" name="mensagem" rows="5" required maxlength="2000"></textarea>
          <label class="contact-form__consent"><input name="consentimento" type="checkbox" value="aceito" required><span>Autorizo o uso destes dados para receber resposta a esta solicitação. Li o <a href="/privacidade/">aviso de privacidade</a>. *</span></label>
          <button class="button button--submit" type="submit"><span>Enviar solicitação</span><span class="button__arrow" aria-hidden="true">↗</span></button>
          <p class="contact-form__note">O envio utiliza o processamento de formulários da Netlify. Enviar a solicitação não cria obrigação de contratação.</p>
        </form>
      </div>
    </section>`;
}

function renderSections(page) {
  if (page.type === "success") {
    return `
      <section class="section section--light success-next">
        <div class="container">
          <div class="success-next__card">
            <p class="eyebrow"><span class="eyebrow__dot eyebrow__dot--blue"></span> O que acontece agora</p>
            <div class="success-next__steps">
              <div class="success-next__step"><span>01</span><p>Vamos revisar as informações que você enviou.</p></div>
              <div class="success-next__step"><span>02</span><p>A Coonexa responderá pelo contato informado na solicitação.</p></div>
            </div>
            <p class="success-next__note">Se quiser complementar sua mensagem, fale diretamente com a gente pelo WhatsApp.</p>
            <a class="text-link" href="${whatsappHref("Olá! Enviei uma solicitação pelo site da Coonexa e gostaria de acrescentar uma informação.")}" target="_blank" rel="noopener noreferrer">Continuar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>`;
  }

  if (page.type === "directory") {
    return `
      <section class="section section--light">
        <div class="container"><div class="seo-service-grid">${serviceCards()}</div></div>
      </section>
      ${renderContactCallout()}`;
  }

  if (page.type === "blog") {
    return `
      <section class="section section--light">
        <div class="container seo-article-list">${articleCards()}</div>
      </section>
      ${renderContactCallout()}`;
  }

  if (page.type === "contact") {
    return `${renderContactForm()}${renderFaq(page)}`;
  }

  if (page.type === "portfolio") {
    return `
      <section class="section section--light">
        <div class="container portfolio-disclaimer">
          <span class="portfolio-disclaimer__mark" aria-hidden="true">i</span>
          <p>Não publicamos marcas, capturas de tela ou depoimentos de clientes sem autorização. Estamos organizando materiais aprovados antes de apresentar cases públicos.</p>
          <a class="text-link" href="${whatsappHref("Olá! Quero conversar sobre um projeto para meu negócio.")}" target="_blank" rel="noopener noreferrer">Conversar sobre um projeto <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      ${renderContactCallout()}`;
  }

  if (page.type === "privacy") {
    return `
      <section class="section section--light">
        <div class="container privacy-actions">
          <button class="text-link privacy-actions__button" type="button" data-reset-analytics-consent>Alterar minha escolha de analytics</button>
          <p>O controle aparece quando a medição GA4 estiver configurada. Se não visualizar a opção, a medição está desativada neste site.</p>
        </div>
      </section>`;
  }

  const content = page.paragraphs.map(([heading, body]) => `
    <section class="content-block" data-reveal>
      <h2>${esc(heading)}</h2>
      <p>${esc(body)}</p>
    </section>`).join("\n");
  const bullets = page.bullets?.length ? `
    <section class="content-highlights" data-reveal>
      <h2>${page.type === "article" ? "Checklist rápido" : "O que considerar"}</h2>
      <ul>${page.bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
    </section>` : "";
  const cta = renderContactCallout();
  const faq = renderFaq(page);

  return `
    <section class="section section--light">
      <div class="container content-layout">
        <article class="content-article">${content}${bullets}</article>
        <aside class="content-aside">
          <p class="eyebrow"><span class="eyebrow__dot eyebrow__dot--blue"></span> Vamos conversar?</p>
          <h2>Seu próximo passo começa entendendo a necessidade.</h2>
          <p>A Coonexa explica possibilidades, escopo, investimento e itens adicionais antes de começar.</p>
          <a class="button button--light" href="${whatsappHref(`Olá! Quero conversar sobre ${page.keyword}.`)}" target="_blank" rel="noopener noreferrer"><span>Fale com a Coonexa</span><span class="button__arrow" aria-hidden="true">↗</span></a>
        </aside>
      </div>
    </section>
    ${faq}
    ${cta}`;
}

function renderContactCallout() {
  return `
    <section class="seo-contact-callout">
      <div class="container">
        <p class="eyebrow eyebrow--light"><span class="eyebrow__dot"></span> Um próximo passo, sem complicação</p>
        <h2>Converse sobre o que seu negócio realmente precisa.</h2>
        <p>Conte seu cenário. A Coonexa conversa sobre possibilidades, escopo e investimento com clareza.</p>
        <a class="button button--light" href="${whatsappHref("Olá! Vim pelo site da Coonexa e quero conversar sobre meu negócio.")}" target="_blank" rel="noopener noreferrer"><span>Converse pelo WhatsApp</span><span class="button__arrow" aria-hidden="true">↗</span></a>
      </div>
    </section>`;
}

function renderFaqSchema(page) {
  if (!page.faqs?.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}${page.path}#faq`,
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
}

function renderBreadcrumbSchema(page) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}${page.path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
      ...(page.path === "/blog/"
        ? [{ "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog/` }]
        : page.path.startsWith("/blog/")
          ? [
            { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog/` },
            { "@type": "ListItem", position: 3, name: page.h1, item: `${siteUrl}${page.path}` }
          ]
          : [{ "@type": "ListItem", position: 2, name: page.h1, item: `${siteUrl}${page.path}` }])
    ]
  };
}

function renderStructuredData(page) {
  const nodes = [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/img/coonexa-mark.png`,
      image: socialImage,
      description: "Tecnologia, web e marketing para pequenos negócios em São Luís de Montes Belos e região. Projetos digitais online para todo o Brasil.",
      telephone: "+5564996956530",
      email,
      sameAs: ["https://www.instagram.com/coonexaweb/"],
      areaServed: [
        { "@type": "City", name: "São Luís de Montes Belos", containedInPlace: { "@type": "State", name: "Goiás" } },
        { "@type": "AdministrativeArea", name: "Região de São Luís de Montes Belos" },
        { "@type": "Country", name: "Brasil" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteName,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}${page.path}#webpage`,
      url: `${siteUrl}${page.path}`,
      name: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${siteUrl}${page.path}#breadcrumb` },
      about: { "@id": `${siteUrl}/#organization` }
    }
  ];

  if (page.type === "service") {
    nodes.push({
      "@type": "Service",
      "@id": `${siteUrl}${page.path}#service`,
      name: page.service,
      serviceType: page.service,
      description: page.description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: page.path === "/suporte-de-informatica/" || page.path === "/perfil-da-empresa-no-google/"
        ? "São Luís de Montes Belos e região, Goiás"
        : ["São Luís de Montes Belos e região, Goiás", "Brasil, com atendimento online"]
    });
  }

  if (page.type === "article") {
    nodes.push({
      "@type": "Article",
      "@id": `${siteUrl}${page.path}#article`,
      headline: page.h1,
      description: page.description,
      image: socialImage,
      inLanguage: "pt-BR",
      mainEntityOfPage: { "@id": `${siteUrl}${page.path}#webpage` },
      publisher: { "@id": `${siteUrl}/#organization` }
    });
  }

  nodes.push(renderBreadcrumbSchema(page));
  const faq = renderFaqSchema(page);
  if (faq) nodes.push(faq);
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 2);
}

function renderBreadcrumbs(page) {
  const crumbs = page.path.startsWith("/blog/")
    ? [{ label: "Blog", href: "/blog/" }, ...(page.type === "article" ? [{ label: page.h1 }] : [])]
    : [{ label: page.h1 }];

  return `<nav class="breadcrumbs" aria-label="Trilha de navegação"><a href="/">Início</a>${crumbs.map((crumb) => `<span aria-hidden="true">/</span>${crumb.href ? `<a href="${crumb.href}">${esc(crumb.label)}</a>` : `<span aria-current="page">${esc(crumb.label)}</span>`}`).join("")}</nav>`;
}

function renderPage(page) {
  const canonical = `${siteUrl}${page.path}`;
  const imageAlt = `${siteName} — Tecnologia, Web e Marketing. Conectando negócios. Criando possibilidades.`;
  const isArticle = page.type === "article";
  const dateModified = new Date().toISOString().slice(0, 10);
  const pageBody = renderSections(page);
  const pageHero = page.type === "success" ? renderSuccessHero(page) : `
      <section class="page-hero" id="pagina">
        <div class="page-hero__orb" aria-hidden="true"></div>
        <div class="container page-hero__inner">
          ${renderBreadcrumbs(page)}
          <p class="eyebrow eyebrow--light"><span class="eyebrow__dot"></span>${esc(page.keyword)}</p>
          <h1>${esc(page.h1)}</h1>
          <p class="page-hero__intro">${esc(page.intro)}</p>
          <a class="button button--light" href="${whatsappHref(`Olá! Quero conversar sobre ${page.keyword}.`)}" target="_blank" rel="noopener noreferrer"><span>Converse com a Coonexa</span><span class="button__arrow" aria-hidden="true">↗</span></a>
        </div>
      </section>`;

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0b1e39">
    <meta name="description" content="${esc(page.description)}">
    <link rel="canonical" href="${canonical}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta property="og:type" content="${isArticle ? "article" : "website"}">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(page.title)}">
    <meta property="og:description" content="${esc(page.description)}">
    <meta property="og:image" content="${socialImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(imageAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(page.title)}">
    <meta name="twitter:description" content="${esc(page.description)}">
    <meta name="twitter:image" content="${socialImage}">
    <meta name="twitter:image:alt" content="${esc(imageAlt)}">
    <title>${esc(page.title)}</title>
    <link rel="icon" href="/img/coonexa-mark.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
    <script src="/script.js" defer></script>
    <script src="/analytics-config.js" defer></script>
    <script src="/analytics.js" defer></script>
    <script type="application/ld+json">${renderStructuredData(page)}</script>
    ${isArticle ? `<meta property="article:section" content="${esc(page.keyword)}"><meta property="article:modified_time" content="${dateModified}">` : ""}
  </head>
  <body>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    ${renderHeader()}
    <main id="conteudo">
      ${pageHero}
      ${pageBody}
    </main>
    ${renderFooter()}
    ${renderAnalyticsConsent()}
  </body>
</html>
`;
}

function renderSuccessHero(page) {
  return `
      <section class="page-hero success-hero" id="pagina">
        <div class="page-hero__orb" aria-hidden="true"></div>
        <div class="container page-hero__inner success-hero__inner">
          <span class="success-hero__check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.5 4.5L19 7"></path></svg></span>
          <p class="eyebrow eyebrow--light"><span class="eyebrow__dot"></span> Solicitação enviada</p>
          <h1>${esc(page.h1)}</h1>
          <p class="page-hero__intro">${esc(page.intro)}</p>
          <div class="success-hero__actions">
            <a class="button button--light" href="/"><span>Voltar ao início</span><span class="button__arrow" aria-hidden="true">↗</span></a>
            <a class="text-link text-link--light" href="${whatsappHref("Olá! Enviei uma solicitação pelo site da Coonexa.")}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>`;
}

function renderHeader() {
  return `<header class="site-header" data-header>
    <div class="container header__inner">
      <a class="brand" href="/" aria-label="Coonexa — início"><img class="brand__mark" src="/img/coonexa-mark.png" alt="" width="50" height="42"><span class="brand__wordmark"><strong>COONEXA</strong><span>TECNOLOGIA · WEB · MARKETING</span></span></a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-menu" data-menu-toggle><span></span><span></span></button>
      <nav class="site-nav" id="site-menu" aria-label="Navegação principal" data-menu>
        <a href="/servicos/">Soluções</a><a href="/#processo">Como trabalhamos</a><a href="/sobre/">Sobre</a><a href="/blog/">Guias</a><a href="/#duvidas">Dúvidas</a>
        <a class="header-cta" href="${whatsappHref("Olá! Vim pelo site da Coonexa e quero conversar sobre meu negócio.")}" target="_blank" rel="noopener noreferrer"><span>Vamos conversar</span><span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand"><a class="brand brand--footer" href="/" aria-label="Coonexa — voltar ao início"><img class="brand__mark" src="/img/coonexa-mark.png" alt="" width="46" height="39"><span class="brand__wordmark"><strong>COONEXA</strong><span>TECNOLOGIA · WEB · MARKETING</span></span></a><p>Conectando negócios.<br>Criando possibilidades.</p></div>
        <div class="footer-column"><p class="footer-column__title">SERVIÇOS</p><a href="/servicos/">Todas as soluções</a><a href="/criacao-de-sites/">Criação de sites</a><a href="/perfil-da-empresa-no-google/">Perfil no Google</a><a href="/marketing-digital-local/">Marketing local</a><a href="/suporte-de-informatica/">Suporte de informática</a></div>
        <div class="footer-column"><p class="footer-column__title">CONTATO</p><a href="${whatsappHref("Olá! Vim pelo site da Coonexa.")}" target="_blank" rel="noopener noreferrer">WhatsApp · (64) 9 9695-6530</a><a href="mailto:${email}">${email}</a><a href="https://www.instagram.com/coonexaweb/" target="_blank" rel="noopener noreferrer">@coonexaweb ↗</a><a href="/contato/">Solicitar orçamento</a><a href="/privacidade/">Privacidade</a></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Coonexa. Todos os direitos reservados.</span><span>São Luís de Montes Belos · Goiás</span><span class="footer-bottom__signature">Tecnologia feita para aproximar.</span></div>
    </div>
  </footer>
  <a class="whatsapp-float" href="${whatsappHref("Olá! Vim pelo site da Coonexa.")}" target="_blank" rel="noopener noreferrer" aria-label="Converse com a Coonexa pelo WhatsApp"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1-4.2a8.5 8.5 0 1 1 16-4.1Z"></path><path d="M8.5 8.7c.4 2.4 2.4 4.4 4.8 4.8"></path></svg><span>Fale com a gente</span></a>`;
}

function renderAnalyticsConsent() {
  return `<section class="analytics-consent" data-analytics-consent hidden aria-labelledby="analytics-consent-title">
    <div class="analytics-consent__copy"><h2 id="analytics-consent-title">Controle de analytics</h2><p>Se desejar, podemos usar o Google Analytics para medir visitas e cliques. A medição só será ativada após seu consentimento.</p><a href="/privacidade/">Leia o aviso de privacidade</a></div>
    <div class="analytics-consent__actions"><button class="analytics-consent__accept" type="button" data-analytics-accept>Aceitar analytics</button><button class="analytics-consent__decline" type="button" data-analytics-decline>Recusar</button></div>
  </section>`;
}

async function main() {
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });

  for (const file of ["index.html", "style.css", "script.js", "analytics.js", "analytics-config.js", "_headers"]) {
    await cp(resolve(process.cwd(), file), resolve(outputDirectory, file));
  }
  const imageDirectory = resolve(outputDirectory, "img");
  await mkdir(imageDirectory, { recursive: true });
  for (const file of ["coonexa-mark.png", "coonexa-social.png"]) {
    await cp(resolve(process.cwd(), "img", file), resolve(imageDirectory, file));
  }

  for (const page of allPages) {
    const outputPath = resolve(outputDirectory, `.${page.path}`, "index.html");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderPage(page), "utf8");
  }

  const urls = [
    "/",
    ...allPages.map((page) => page.path)
  ];
  const lastModified = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${lastModified}</lastmod></url>`).join("\n")}
</urlset>
`;
  await writeFile(resolve(process.cwd(), "sitemap.xml"), sitemap, "utf8");
  await writeFile(resolve(outputDirectory, "sitemap.xml"), sitemap, "utf8");
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
  await writeFile(
    resolve(outputDirectory, "robots.txt"),
    robots,
    "utf8"
  );
  await writeFile(resolve(process.cwd(), "robots.txt"), robots, "utf8");
  const successPagePath = resolve(outputDirectory, "obrigado/index.html");
  await mkdir(dirname(successPagePath), { recursive: true });
  await writeFile(successPagePath, renderSuccessPage(), "utf8");
  process.stdout.write(`Generated ${allPages.length + 1} SEO pages and ${urls.length} sitemap URLs in dist/.\n`);
}

function renderSuccessPage() {
  const page = {
    path: "/obrigado/",
    title: "Solicitação recebida | Coonexa",
    description: "Sua mensagem foi enviada à Coonexa. Veja os próximos passos da sua solicitação.",
    keyword: "Contato Coonexa",
    type: "success",
    h1: "Recebemos sua mensagem.",
    intro: "Obrigado por contar o que você precisa. A equipe Coonexa vai analisar sua solicitação e responder pelo contato informado.",
    faqs: []
  };
  return renderPage({
    ...page,
    description: page.description
  }).replace('name="robots" content="index, follow, max-image-preview:large"', 'name="robots" content="noindex, follow"');
}

await main();
