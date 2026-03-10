import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata = createMetadata({
  title: "Termos de Uso",
  description:
    "Termos de uso do Yorubs. Leia nossos termos e condições de serviço para uso do aplicativo móvel educacional de língua Yorùbá.",
  path: "/terms",
})

const sections = [
  { id: "aceitacao", label: "1. Aceitação dos Termos" },
  { id: "descrição", label: "2. Descrição do Serviço" },
  { id: "conta", label: "3. Conta do Usuário" },
  { id: "planos", label: "4. Planos e Pagamentos" },
  { id: "teste", label: "5. Período de Teste Gratuito" },
  { id: "gems", label: "6. Moeda Virtual (Gems)" },
  { id: "propriedade", label: "7. Propriedade Intelectual" },
  { id: "ia", label: "8. Conteudo Gerado por IA" },
  { id: "uso-aceitavel", label: "9. Uso Aceitavel" },
  { id: "dispositivos", label: "10. Vinculação de Dispositivos" },
  { id: "responsabilidade", label: "11. Limitação de Responsabilidade" },
  { id: "indenização", label: "12. Indenização" },
  { id: "cancelamento", label: "13. Cancelamento e Encerramento" },
  { id: "disputas", label: "14. Resolução de Disputas" },
  { id: "lei", label: "15. Lei Aplicável" },
  { id: "gerais", label: "16. Disposições Gerais" },
  { id: "contato", label: "17. Contato" },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-4">
              Termos de Uso
            </h1>
            <p className="text-sm text-text-muted mb-2">
              Ultima atualizacao: 1 de marco de 2026
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Estes Termos de Uso (&quot;Termos&quot;) regem o acesso e uso do
              aplicativo móvel Yorubs (&quot;App&quot;, &quot;Serviço&quot;,
              &quot;nos&quot;, &quot;nosso&quot;). Ao utilizar o Yorubs, você
              declara ter lido, compreendido e concordado integralmente com
              estes Termos.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mt-10 mb-12 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, #D4A853 0%, transparent 100%)",
            }}
          />

          {/* Two-column layout: TOC sidebar + content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky Sidebar TOC — desktop only */}
            <aside className="hidden lg:block lg:w-64 shrink-0">
              <nav
                aria-label="Indice dos Termos de Uso"
                style={{
                  position: "sticky",
                  top: "6rem",
                  maxHeight: "calc(100vh - 8rem)",
                  overflowY: "auto",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: "#D4A853" }}
                >
                  Indice
                </p>
                <ul className="space-y-1.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-text-muted hover:text-text-primary transition-colors py-1 border-l-2 border-transparent hover:border-gold pl-3"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 max-w-3xl space-y-10 text-text-secondary leading-relaxed">
              {/* 1. Aceitação dos Termos */}
              <section id="aceitacao">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  1. Aceitação dos Termos
                </h2>
                <p className="mb-3">
                  Ao baixar, instalar, acessar ou utilizar o aplicativo Yorubs,
                  você concorda em ficar vinculado a estes Termos de Uso, a
                  nossa{" "}
                  <a
                    href="/privacy"
                    className="underline underline-offset-2"
                    style={{ color: "#D4A853" }}
                  >
                    Politica de Privacidade
                  </a>{" "}
                  e a quaisquer termos adicionais aplicáveis a funcionalidades
                  específicas do Serviço.
                </p>
                <p className="mb-3">
                  Se você não concordar com qualquer parte destes Termos, você
                  não deve instalar nem utilizar o Yorubs. O uso continuado do
                  App apos quaisquer alterações nos Termos constitui aceitacao
                  dessas alterações.
                </p>
                <p>
                  Reservamo-nos o direito de modificar estes Termos a qualquer
                  momento. Alterações significativas serão comunicadas por meio
                  de notificação no App ou por e-mail com pelo menos 15 (quinze)
                  dias de antecedencia. A versão mais recente estara sempre
                  disponível nesta página, com a data da última atualização
                  claramente indicada.
                </p>
              </section>

              {/* 2. Descrição do Serviço */}
              <section id="descrição">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  2. Descrição do Serviço
                </h2>
                <p className="mb-3">
                  O Yorubs é um aplicativo móvel educacional gamificado para o
                  ensino da lingua Yorùbá, disponível para dispositivos iOS e
                  Android. O Serviço inclui, entre outras funcionalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    <strong>Lições interativas</strong> — 13 tipos de exercícios
                    gamificados, incluindo quizzes, flashcards com audio,
                    construção de frases, prática de pronúncia e discriminação
                    tonal;
                  </li>
                  <li>
                    <strong>Tutor de inteligência artificial &quot;Àróbá&quot;</strong>{" "}
                    (O Ancião) — um assistente conversacional educacional
                    baseado em IA generativa, que auxilia no aprendizado
                    contextual da lingua Yorùbá;
                  </li>
                  <li>
                    <strong>Provérbio Diário</strong> — uma coleção de 358
                    provérbios Yorùbá com explicações culturais e exercícios
                    associados;
                  </li>
                  <li>
                    <strong>Biblioteca Sagrada</strong> — conteúdo cultural sobre
                    19 Òrìṣà, com vocabulário, cânticos, oríkì, ervas sagradas,
                    objetos rituais e oferendas;
                  </li>
                  <li>
                    <strong>Sistema de gamificação</strong> — XP (pontos de
                    experiencia), níveis, sequências (streaks), ligas
                    competitivas, conquistas e moeda virtual (Gems);
                  </li>
                  <li>
                    <strong>Arquitetura offline-first</strong> — o App funciona
                    sem conexão à internet, sincronizando dados automaticamente
                    quando a conexão é restabelecida.
                  </li>
                </ul>
                <p>
                  Podemos, a nosso criterio, adicionar, modificar ou descontinuar
                  funcionalidades do Serviço a qualquer momento, com ou sem aviso
                  previo, desde que funcionalidades essenciais do plano contratado
                  sejam mantidas durante o período de assinatura vigente.
                </p>
              </section>

              {/* 3. Conta do Usuário */}
              <section id="conta">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  3. Conta do Usuário
                </h2>
                <p className="mb-3">
                  <strong>Idade minima:</strong> Você deve ter pelo menos 13
                  (treze) anos de idade para criar uma conta e utilizar o
                  Yorubs. Se você tiver entre 13 e 18 anos, devera ter o
                  consentimento de um responsável legal. Usuários menores de 13
                  anos não estão autorizados a usar o Serviço, em conformidade
                  com a Lei Geral de Proteção de Dados (LGPD) e legislacoes
                  internacionais de proteção de menores.
                </p>
                <p className="mb-3">
                  <strong>Registro e verificacao:</strong> Para acessar todas as
                  funcionalidades do App, você deverá criar uma conta fornecendo
                  um endereço de e-mail válido e uma senha segura. A verificação
                  de e-mail e obrigatoria para ativar a conta. Você concorda em
                  fornecer informações verdadeiras, precisas e atualizadas
                  durante o registro.
                </p>
                <p className="mb-3">
                  <strong>Segurança da conta:</strong> Você é integralmente
                  responsável por manter a confidencialidade de suas credenciais
                  de acesso (e-mail e senha) e por todas as atividades
                  realizadas em sua conta. Você concorda em nos notificar
                  imediatamente, pelo e-mail suporte@yorubs.com, sobre
                  qualquer uso não autorizado de sua conta ou qualquer violação
                  de segurança de que tenha conhecimento.
                </p>
                <p>
                  <strong>Uma conta por pessoa:</strong> Cada pessoa fisica deve
                  possuir apenas uma conta no Yorubs. A criação de multiplas
                  contas para obter vantagens indevidas (como multiplicas
                  períodos de teste gratuito) e expressamente proibida e pode
                  resultar no encerramento de todas as contas associadas.
                </p>
              </section>

              {/* 4. Planos e Pagamentos */}
              <section id="planos">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  4. Planos e Pagamentos
                </h2>
                <p className="mb-3">
                  O Yorubs oferece dois níveis de acesso:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    <strong>Plano Gratuito:</strong> Acesso limitado a lições
                    básicas, provérbio diário, funcionalidades essenciais de
                    gamificação e anuncios;
                  </li>
                  <li>
                    <strong>Plano Pro:</strong> Acesso completo a todas as
                    funcionalidades, incluindo Biblioteca Sagrada completa,
                    tutor IA ilimitado, sem anúncios, vinculação de até 3
                    dispositivos e conteúdo exclusivo. Disponível por{" "}
                    <strong>R$ 19,90/mes</strong> (plano mensal) ou{" "}
                    <strong>R$ 149,90/ano</strong> (plano anual, equivalente a
                    R$ 12,49/mes).
                  </li>
                </ul>
                <p className="mb-3">
                  <strong>Processamento de pagamentos:</strong> Todos os
                  pagamentos são processados exclusivamente pela Apple App Store
                  (iOS) ou Google Play Store (Android), conforme a plataforma
                  utilizada. O Yorubs não coleta, armazena nem processa dados
                  de cartão de crédito ou informações financeiras diretamente.
                </p>
                <p className="mb-3">
                  <strong>Renovação automática:</strong> As assinaturas do Plano
                  Pro são renovadas automaticamente ao final de cada período de
                  cobranca (mensal ou anual), pelo mesmo valor, salvo se
                  canceladas pelo usuário com pelo menos 24 (vinte e quatro)
                  horas antes do termino do período vigente.
                </p>
                <p className="mb-3">
                  <strong>Alterações de preco:</strong> Reservamo-nos o direito
                  de alterar os preços dos planos pagos. Alterações de preco
                  não afetarão o período de assinatura em vigor e serao
                  comunicadas com antecedencia minima de 30 (trinta) dias.
                </p>
                <p>
                  <strong>Reembolsos:</strong> As políticas de reembolsosão
                  regidas pelas regras da loja de aplicativos pela qual a
                  compra foi realizada (Apple App Store ou Google Play Store).
                  Para solicitar reembolso, você deverá entrar em contato
                  diretamente com a respectiva loja. O Yorubs não processa
                  reembolsos diretamente.
                </p>
              </section>

              {/* 5. Período de Teste Gratuito */}
              <section id="teste">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  5. Período de Teste Gratuito
                </h2>
                <p className="mb-3">
                  O Yorubs pode oferecer um período de teste gratuito de 7
                  (sete) dias para o Plano Pro, sujeito a disponibilidade e a
                  criterio do Yorubs. O período de teste oferece acesso completo
                  a todas as funcionalidades do Plano Pro.
                </p>
                <p className="mb-3">
                  <strong>Conversão automatica:</strong> Ao final do período de
                  teste gratuito, sua assinatura será automaticamente convertida
                  em uma assinatura paga do Plano Pro (mensal ou anual, conforme
                  selecionado no momento da ativação do teste), salvo se você
                  cancelar a assinatura com pelo menos 24 (vinte e quatro) horas
                  antes do termino do período de teste.
                </p>
                <p className="mb-3">
                  <strong>Elegibilidade:</strong> O período de teste gratuito
                  está disponível apenas para novos assinantes do Plano Pro.
                  Cada usuário tem direito a apenas um período de teste
                  gratuito. Tentativas de obter multiplos períodos de teste
                  (por exemplo, criando novas contas) constituem violação
                  destes Termos.
                </p>
                <p>
                  <strong>Cancelamento durante o teste:</strong> Se você
                  cancelar durante o período de teste, mantera acesso as
                  funcionalidades Pro até o final dos 7 dias, sem cobrança.
                  O cancelamento deve ser realizado pela App Store ou Google
                  Play Store.
                </p>
              </section>

              {/* 6. Moeda Virtual (Gems) */}
              <section id="gems">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  6. Moeda Virtual (Gems)
                </h2>
                <p className="mb-3">
                  O Yorubs possui um sistema de moeda virtual denominado
                  &quot;Gems&quot; (Gemas), que funciona exclusivamente dentro
                  do ecossistema do App. Os Gems podem ser obtidos de diversas
                  formas, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>Conclusao de lições (10 Gems por licao);</li>
                  <li>Manutenção de sequências de estudo (5 Gems);</li>
                  <li>Login diario (3 Gems);</li>
                  <li>Conquistas especiais (25 Gems);</li>
                  <li>Bonus de boas-vindas ao criar a conta (50 Gems).</li>
                </ul>
                <p className="mb-3">
                  Os Gems podem ser utilizados para adquirir itens virtuais
                  dentro do App, como congelamento de sequência (streak freeze),
                  vidas extras e períodos de XP em dobro. Os valores em Gems de
                  cada item estão disponíveis na Loja do App.
                </p>
                <p className="mb-3">
                  <strong>Sem valor monetário:</strong> Os Gems não possuem
                  valor monetário real e não podem ser trocados por dinheiro,
                  créditos ou qualquer outra forma de compensação financeira.
                </p>
                <p className="mb-3">
                  <strong>Intransferibilidade:</strong> Os Gemssão
                  intransferíveis e não podem ser vendidos, doados, trocados ou
                  transferidos entre contas de usuários, por qualquer meio.
                </p>
                <p>
                  <strong>Modificação e extinção:</strong> Reservamo-nos o
                  direito de modificar o sistema de Gems, incluindo valores de
                  aquisicao, custos de itens e mecanicas de obtencao, a
                  qualquer momento. Em caso de descontinuação do sistema de
                  Gems, os usuários serão notificados com antecedência razoável.
                </p>
              </section>

              {/* 7. Propriedade Intelectual */}
              <section id="propriedade">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  7. Propriedade Intelectual
                </h2>
                <p className="mb-3">
                  Todo o conteúdo disponível no Yorubs, incluindo, sem
                  limitação, textos, lições, exercícios, ilustrações, ícones,
                  audio, gravações de voz, design de interface, código-fonte,
                  logotipos e marcas, e protegido por direitos autorais, marcas
                  registradas e demais leis de propriedade intelectual
                  aplicáveis.
                </p>
                <p className="mb-3">
                  <strong>Licenca limitada:</strong> Concedemos a você uma
                  licença pessoal, não exclusiva, intransferível, revogável e
                  limitada para acessar e utilizar o App e seu conteúdo
                  exclusivamente para fins educacionais pessoais enão
                  comerciais, de acordo com estes Termos.
                </p>
                <p className="mb-3">
                  <strong>Restrições:</strong> Você não pode copiar, reproduzir,
                  distribuir, transmitir, exibir publicamente, modificar, criar
                  obras derivadas, vender, licenciar ou explorar comercialmente
                  qualquer parte do conteúdo do Yorubs sem nossa autorizacao
                  previa por escrito.
                </p>
                <p>
                  <strong>Conteudo cultural Yorùbá:</strong> Reconhecemos que a
                  lingua Yorùbá, seus provérbios, cânticos, oríkì e tradições
                  culturais pertencem ao patrimonio cultural do povo Yorùbá. O
                  Yorubs utiliza e apresenta esse conteúdo cultural com o máximo
                  respeito, para fins exclusivamente educacionais e de
                  preservação cultural. O material pedagógico, as adaptações, a
                  curadoria é a organização desse conteúdo no contexto do App
                  são de titularidade do Yorubs.
                </p>
              </section>

              {/* 8. Conteudo Gerado por IA */}
              <section id="ia">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  8. Conteudo Gerado por Inteligencia Artificial
                </h2>
                <p className="mb-3">
                  O Yorubs utiliza tecnologia de inteligência artificial
                  generativa para diversas funcionalidades, incluindo o tutor
                  virtual &quot;Àróbá&quot; (O Ancião), geração de exercícios,
                  analise de pronúncia e sugestoes de aprendizado
                  personalizadas.
                </p>
                <p className="mb-3">
                  <strong>Natureza educacional:</strong> As respostas e o
                  conteúdo gerados por IA no Yorubs tem carater exclusivamente
                  educacional e informativo. O Àróbá é um assistente virtual de
                  aprendizado e não substitui professores qualificados,
                  linguistas, historiadores, lideranças religiosas ou qualquer
                  outro profissional especializado.
                </p>
                <p className="mb-3">
                  <strong>Ausencia de garantia de precisao:</strong> Embora nos
                  esforcemos para garantir a qualidade e a precisão do conteúdo
                  gerado por IA, não garantimos que todas as respostas,
                  traduções, explicações culturais ou avaliações de pronúncia
                  estejam livres de erros. Conteudo gerado por IA pode conter
                  imprecisoes, e recomendamos que os usuários busquem fontes
                  complementares para validacao, especialmente em contextos
                  acadêmicos ou profissionais.
                </p>
                <p className="mb-3">
                  <strong>Conteudo cultural e religioso:</strong> As informações
                  sobre Òrìṣà, rituais, ervas sagradas e práticas culturais
                  apresentadas no App são de natureza educacional enão
                  constituem orientação religiosa, espiritual, médica ou
                  terapêutica. O Yorubs não se responsabiliza pelo uso prático
                  dessas informações fora do contexto educacional do App.
                </p>
                <p>
                  <strong>Limites de uso:</strong> O uso das funcionalidades de
                  IA está sujeito a limites diários de requisições, que podem
                  variar conforme o plano do usuário (Gratuito ou Pro).
                </p>
              </section>

              {/* 9. Uso Aceitavel */}
              <section id="uso-aceitavel">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  9. Uso Aceitavel
                </h2>
                <p className="mb-3">
                  Ao utilizar o Yorubs, você concorda em não:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    <strong>Engenharia reversa:</strong> Descompilar,
                    desmontar, realizar engenharia reversa ou tentar derivar o
                    código-fonte do App, no todo ou em parte;
                  </li>
                  <li>
                    <strong>Abuso de sistemas:</strong> Explorar bugs, falhas ou
                    vulnerabilidades do App para obter vantagens indevidas,
                    incluindo manipulação de XP, Gems, níveis, ligas ou
                    qualquer outro sistema de gamificação;
                  </li>
                  <li>
                    <strong>Automação não autorizada:</strong> Utilizar bots,
                    scripts, raspadores (scrapers), ferramentas de automação ou
                    qualquer meio artificial para interagir com o App de forma
                    automatizada;
                  </li>
                  <li>
                    <strong>Discurso de odio:</strong> Enviar, por meio do chat
                    com o Àróbá ou qualquer outro canal do App, conteúdo que
                    seja ofensivo, difamatorio, discriminatorio, que incite
                    violencia ou odio contra qualquer pessoa ou grupo com base
                    em raça, etnia, religião, gênero, orientação sexual,
                    deficiencia ou qualquer outra caracteristica protegida;
                  </li>
                  <li>
                    <strong>Uso ilegal:</strong> Utilizar o App para qualquer
                    finalidade ilicita, fraudulenta ou que viole direitos de
                    terceiros;
                  </li>
                  <li>
                    <strong>Interferencia no servico:</strong> Tentar
                    sobrecarregar, desabilitar ou comprometer a integridade,
                    o desempenho ou a segurança dos servidores, redes ou
                    infraestrutura do Yorubs;
                  </li>
                  <li>
                    <strong>Contornar restricoes:</strong> Utilizar VPNs,
                    proxies ou qualquer outro meio para contornar restricoes
                    geográficas, limitações de conta ou mecanismos de
                    segurança do App;
                  </li>
                  <li>
                    <strong>Compartilhamento de conta:</strong> Compartilhar
                    suas credenciais de acesso com terceiros ou permitir que
                    terceiros utilizem sua conta.
                  </li>
                </ul>
                <p>
                  A violação de qualquer uma dessas regras pode resultar na
                  suspensão temporaria ou no encerramento permanente de sua
                  conta, a nosso exclusivo criterio, sem direito a reembolso de
                  valores já pagos ou de Gems acumulados.
                </p>
              </section>

              {/* 10. Vinculação de Dispositivos */}
              <section id="dispositivos">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  10. Vinculação de Dispositivos
                </h2>
                <p className="mb-3">
                  O Yorubs utiliza um sistema de vinculação de dispositivos para
                  proteger a segurança das contas e prevenir o uso não
                  autorizado. Os limites de dispositivos vinculados são:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    <strong>Plano Gratuito:</strong> 1 (um) dispositivo
                    vinculado simultaneamente;
                  </li>
                  <li>
                    <strong>Plano Pro:</strong> Ate 3 (tres) dispositivos
                    vinculados simultaneamente.
                  </li>
                </ul>
                <p className="mb-3">
                  A vinculação e automatica no primeiro acesso de cada
                  dispositivo. Para vincular um novo dispositivo além do
                  limite do seu plano, você deverá primeiro desvincular um
                  dispositivo existente, o que pode ser realizado nas
                  configurações do App ou entrando em contato com nosso suporte.
                </p>
                <p>
                  A funcionalidade de vinculação de dispositivos não coleta
                  dados pessoais do dispositivo além de um identificador único
                  anonimo, necessário exclusivamente para o gerenciamento dos
                  limites acima descritos.
                </p>
              </section>

              {/* 11. Limitação de Responsabilidade */}
              <section id="responsabilidade">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  11. Limitação de Responsabilidade
                </h2>
                <p className="mb-3">
                  O Yorubs é fornecido &quot;no estado em que se encontra&quot;
                  (&quot;as is&quot;) e &quot;conforme disponível&quot;
                  (&quot;as available&quot;), sem garantias de qualquer
                  natureza, expressas ou implícitas, incluindo, mas não se
                  limitando a, garantias de comercialização, adequacao a um
                  propósito específico, não violação, disponibilidade contínua
                  ou ausencia de erros.
                </p>
                <p className="mb-3">
                  <strong>Nos não garantimos que:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    O Serviço estara disponível de forma ininterrupta, segura
                    ou livre de erros;
                  </li>
                  <li>
                    Os resultados de aprendizado atenderao suas expectativas
                    ou necessidades específicas;
                  </li>
                  <li>
                    Todo conteúdo, incluindo traduções, pronúncias e
                    informações culturais, estara livre de imprecisoes;
                  </li>
                  <li>
                    Eventuais defeitos ou erros no App serão corrigidos em
                    prazo determinado.
                  </li>
                </ul>
                <p className="mb-3">
                  <strong>Limite monetário:</strong> Na maxima extensao
                  permitida pela legislação aplicável, nossa responsabilidade
                  total perante você, por quaisquer danos decorrentes do uso ou
                  da impossibilidade de uso do Serviço, ficara limitada ao
                  menor valor entre: (a) o montante total efetivamente pago por
                  você ao Yorubs nos 12 (doze) meses imediatamente anteriores
                  ao evento que deu origem a reclamação; ou (b) R$ 500,00
                  (quinhentos reais).
                </p>
                <p>
                  <strong>Exclusao de danos indiretos:</strong> Em nenhuma
                  hipotese seremos responsaveis por danos indiretos,
                  incidentais, especiais, consequênciais ou punitivos,
                  incluindo perda de dados, perda de lucros, interrupção de
                  negocios ou danos morais, ainda que tenhamos sido informados
                  da possibilidade de tais danos.
                </p>
              </section>

              {/* 12. Indenização */}
              <section id="indenização">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  12. Indenização
                </h2>
                <p className="mb-3">
                  Você concorda em indenizar, defender e isentar o Yorubs, seus
                  diretores, funcionarios, agentes, parceiros e prestadores de
                  serviço de quaisquer reclamacoes, demandas, perdas, danos,
                  custos, despesas e honorarios advocaticios decorrentes de ou
                  relacionados a:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>Seu uso do Serviço em violação a estes Termos;</li>
                  <li>
                    Violação de qualquer lei, regulamento ou direito de
                    terceiros por você;
                  </li>
                  <li>
                    Conteudo enviado ou transmitido por você por meio do App;
                  </li>
                  <li>
                    Uso indevido de sua conta por terceiros decorrente de sua
                    negligencia na proteção de suas credenciais.
                  </li>
                </ul>
                <p>
                  Esta obrigação de indenização sobrevivera ao encerramento
                  destes Termos e da sua conta no Yorubs.
                </p>
              </section>

              {/* 13. Cancelamento e Encerramento */}
              <section id="cancelamento">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  13. Cancelamento e Encerramento
                </h2>
                <p className="mb-3">
                  <strong>Cancelamento pelo usuário:</strong> Você pode cancelar
                  sua assinatura do Plano Pro a qualquer momento, diretamente
                  pelas configurações da App Store (iOS) ou Google Play Store
                  (Android). Apos o cancelamento, você mantera acesso a todas as
                  funcionalidades do Plano Pro até o final do período de
                  cobrança já pago. Não há cobrança de multa ou taxa de
                  cancelamento.
                </p>
                <p className="mb-3">
                  <strong>Exclusao de conta:</strong> Você pode solicitar a
                  exclusão completa de sua conta e dados pessoais a qualquer
                  momento, diretamente nas configurações do App (seção Perfil)
                  ou enviando um e-mail para suporte@yorubs.com. A exclusão
                  será processada em até 15 (quinze) dias úteis e resultara na
                  perda irreversível de todo o progresso de aprendizado, Gems
                  acumulados, conquistas e demais dados associados a conta.
                </p>
                <p className="mb-3">
                  <strong>Encerramento por nos:</strong> Reservamo-nos o direito
                  de suspender ou encerrar sua conta, com ou sem aviso previo,
                  caso constatemos violação destes Termos, conduta fraudulenta,
                  abuso dos sistemas ou qualquer atividade que comprometa a
                  segurança ou a integridade do Serviço. Em caso de
                  encerramento por violação, não haverá direito a reembolso.
                </p>
                <p>
                  <strong>Efeitos do encerramento:</strong> Apos o encerramento
                  de sua conta, por qualquer motivo, sua licença de uso do App
                  será automaticamente revogada, e você deverá desinstalar o
                  aplicativo de todos os seus dispositivos. Disposições
                  relativas a propriedade intelectual, limitação de
                  responsabilidade, indenização e resolução de disputas
                  sobreviveraco ao encerramento.
                </p>
              </section>

              {/* 14. Resolução de Disputas */}
              <section id="disputas">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  14. Resolução de Disputas
                </h2>
                <p className="mb-3">
                  <strong>Negociação amigável:</strong> Em caso de qualquer
                  controvérsia, disputa ou reclamação decorrente de ou
                  relacionada a estes Termos ou ao uso do Serviço, as partes
                  deverao, em primeiro lugar, buscar uma solução amigável por
                  meio de negociação direta, pelo prazo mínimo de 30 (trinta)
                  dias, contados a partir da notificação formal da parte
                  reclamante.
                </p>
                <p className="mb-3">
                  <strong>Mediação:</strong> Caso a negociação amigávelnão
                  resulte em acordo, as partes poderao recorrer a mediacao,
                  conduzida por mediador independente mutuamente aceito, antes
                  de iniciar qualquer procedimento judicial ou arbitral.
                </p>
                <p className="mb-3">
                  <strong>Arbitragem:</strong> Não sendo a disputa resolvida por
                  mediacao no prazo de 60 (sessenta) dias, qualquer das partes
                  podera submete-la a arbitragem, conforme as regras da Camara
                  de Arbitragem aplicável, sendo a decisao arbitral definitiva e
                  vinculante para ambas as partes.
                </p>
                <p>
                  <strong>Excecao:</strong> Nada nesta clausula impede que
                  qualquer das partes busque medidas de urgencia ou cautelares
                  perante o Poder Judiciario, quando necessário para prevenir
                  dano irreparavel. Adicionalmente, os direitos do consumidor
                  previstos no Código de Defesa do Consumidor (Lei n.
                  8.078/1990) são irrenunciáveis, e o usuário poderá sempre
                  recorrer aos órgãos de defesa do consumidor e ao Poder
                  Judiciario.
                </p>
              </section>

              {/* 15. Lei Aplicável */}
              <section id="lei">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  15. Lei Aplicável
                </h2>
                <p className="mb-3">
                  Estes Termos serão regidos e interpretados de acordo com as
                  leis da República Federativa do Brasil, em particular:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3 pl-2">
                  <li>
                    <strong>Código de Defesa do Consumidor</strong> (Lei n.
                    8.078/1990) — que assegura direitos irrenunciáveis ao
                    consumidor brasileiro, incluindo proteção contra clausulas
                    abusivas, direito a informação clara e adequada, e inversão
                    do onus da prova quando verossimil a alegacao;
                  </li>
                  <li>
                    <strong>Lei Geral de Proteção de Dados</strong> (Lei n.
                    13.709/2018 — LGPD) — que rege o tratamento de dados
                    pessoais, conforme detalhado em nossa Politica de
                    Privacidade;
                  </li>
                  <li>
                    <strong>Marco Civil da Internet</strong> (Lei n.
                    12.965/2014) — que estabelece principios, garantias,
                    direitos e deveres para o uso da internet no Brasil;
                  </li>
                  <li>
                    <strong>Código Civil Brasileiro</strong> (Lei n.
                    10.406/2002) — aplicável supletivamente.
                  </li>
                </ul>
                <p>
                  <strong>Foro:</strong> Para quaisquer questoes judiciais
                  decorrentes destes Termos, fica eleito o foro da comarca de
                  domicilio do usuário consumidor, conforme assegurado pelo
                  artigo 101, inciso I, do Código de Defesa do Consumidor,
                  sem prejuizo de qualquer outro foro competente previsto em
                  lei.
                </p>
              </section>

              {/* 16. Disposições Gerais */}
              <section id="gerais">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  16. Disposições Gerais
                </h2>
                <p className="mb-3">
                  <strong>Integralidade:</strong> Estes Termos, juntamente com
                  a Politica de Privacidade e quaisquer termos adicionais
                  aplicáveis a funcionalidades específicas, constituem o acordo
                  integral entre você e o Yorubs com relação ao uso do Serviço,
                  substituindo quaisquer acordos, entendimentos ou declaracoes
                  anteriores, escritos ou verbais, sobre o mesmo objeto.
                </p>
                <p className="mb-3">
                  <strong>Independencia das clausulas (severabilidade):</strong>{" "}
                  Se qualquer disposição destes Termos for considerada invalida,
                  ilegal ou inexequivel por um tribunal ou autoridade
                  competente, as demais disposições permanecerao em pleno vigor
                  e efeito. A disposição invalida será substituída por outra
                  que, sendo válida e exequível, produza efeito o mais próximo
                  possível da intenção original da cláusula invalidada.
                </p>
                <p className="mb-3">
                  <strong>Renuncia (waiver):</strong> A falha ou a demora do
                  Yorubs em exercer qualquer direito, poder ou prerrogativa
                  prevista nestes Termos não constituirá renúncia a esse
                  direito, nem impedira seu exercicio futuro. Qualquer renuncia
                  devera ser feita por escrito e assinada pela parte
                  renunciante para ter validade.
                </p>
                <p className="mb-3">
                  <strong>Cessão:</strong> Você não poderá ceder, transferir ou
                  sublicenciar seus direitos ou obrigações decorrentes destes
                  Termos sem nosso consentimento previo por escrito. O Yorubs
                  poderá ceder livremente seus direitos e obrigações, no todo
                  ou em parte, a qualquer momento, incluindo em caso de fusao,
                  aquisicao, reorganizacao societaria ou venda de ativos.
                </p>
                <p>
                  <strong>Comunicacoes:</strong> Todas as comunicações e
                  notificações relacionadas a estes Termos serão realizadas por
                  meio do endereco de e-mail associado a sua conta ou por
                  notificações dentro do App. E sua responsabilidade manter seu
                  endereco de e-mail atualizado.
                </p>
              </section>

              {/* 17. Contato */}
              <section id="contato">
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  17. Contato
                </h2>
                <p className="mb-3">
                  Para quaisquer dúvidas, sugestoes, reclamacoes ou
                  solicitações relacionadas a estes Termos de Uso, entre em
                  contato conosco pelos seguintes canais:
                </p>
                <div
                  className="rounded-xl p-6 mt-4"
                  style={{
                    backgroundColor: "rgba(212, 168, 83, 0.08)",
                    border: "1px solid rgba(212, 168, 83, 0.2)",
                  }}
                >
                  <p className="mb-2">
                    <strong className="text-text-primary">E-mail:</strong>{" "}
                    <a
                      href="mailto:suporte@yorubs.com"
                      className="underline underline-offset-2"
                      style={{ color: "#D4A853" }}
                    >
                      suporte@yorubs.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-text-primary">Website:</strong>{" "}
                    <a
                      href="https://yorubs.com"
                      className="underline underline-offset-2"
                      style={{ color: "#D4A853" }}
                    >
                      yorubs.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-text-primary">
                      Tempo de resposta:
                    </strong>{" "}
                    Nos comprometemos a responder todas as solicitações em até 5
                    (cinco) dias úteis.
                  </p>
                </div>
              </section>

              {/* Final note */}
              <div
                className="mt-12 pt-8"
                style={{
                  borderTop: "1px solid rgba(212, 168, 83, 0.15)",
                }}
              >
                <p className="text-sm text-text-muted italic">
                  Ao utilizar o Yorubs, você reconhece que leu, compreendeu e
                  concordou integralmente com estes Termos de Uso. Se você tiver
                  qualquer dúvida, entre em contato conosco antes de utilizar o
                  Serviço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
