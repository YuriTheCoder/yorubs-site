import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata = createMetadata({
  title: "Política de Privacidade",
  description: "Política de privacidade do Yorubs. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  path: "/privacy",
})

const sections = [
  { id: "informações", label: "1. Informações que Coletamos" },
  { id: "base-legal", label: "2. Base Legal" },
  { id: "uso", label: "3. Como Usamos" },
  { id: "compartilhamento", label: "4. Compartilhamento" },
  { id: "transferencia", label: "5. Transferência Internacional" },
  { id: "retenção", label: "6. Armazenamento e Retenção" },
  { id: "cookies", label: "7. Cookies e Rastreamento" },
  { id: "direitos", label: "8. Seus Direitos LGPD" },
  { id: "crianças", label: "9. Privacidade de Crianças" },
  { id: "dpo", label: "10. Encarregado de Dados" },
  { id: "alterações", label: "11. Alterações" },
  { id: "contato", label: "12. Contato" },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-4">
              Política de Privacidade
            </h1>
            <p className="text-sm text-text-muted">Última atualização: 1 de março de 2026</p>
            <p className="text-sm text-text-muted mt-1">Vigencia: a partir da data de publicação</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky Sidebar - Table of Contents (desktop only) */}
            <aside className="hidden lg:block lg:w-64 shrink-0">
              <nav
                className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-border p-5 bg-background-secondary"
                aria-label="Índice da Política de Privacidade"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                  Índice
                </p>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-text-muted hover:text-gold transition-colors duration-200 leading-snug py-0.5"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1 max-w-3xl space-y-10 text-text-secondary leading-relaxed">
              {/* Intro */}
              <div className="pb-6 border-b border-border">
                <p>
                  A <strong className="text-text-primary">Yorubs</strong> (&quot;nos&quot;, &quot;nosso&quot; ou &quot;a Empresa&quot;) respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos as informações obtidas por meio do aplicativo móvel Yorubs (&quot;App&quot;) e do site yorubs.com (&quot;Site&quot;), em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei n. 13.709/2018 &mdash; &quot;LGPD&quot;) e demais normas aplicáveis.
                </p>
                <p className="mt-4">
                  Ao utilizar o App ou o Site, você declara ter lido, compreendido e concordado com os termos desta Política. Caso não concorde com alguma disposição, por favor, interrompa o uso dos nossos serviços.
                </p>
              </div>

              {/* Section 1 */}
              <section id="informações">
                <h2 className="text-xl font-bold text-text-primary mb-4">1. Informações que Coletamos</h2>
                <p className="mb-4">
                  Coletamos diferentes categorias de dados pessoais dependendo da sua interação com o App e o Site. Abaixo detalhamos cada categoria:
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">1.1 Dados de Conta</h3>
                <p className="mb-3">
                  Quando você cria uma conta no Yorubs, coletamos:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Nome completo ou nome de exibição;</li>
                  <li>Endereço de e-mail;</li>
                  <li>Senha (armazenada de forma criptografada &mdash; nunca temos acesso a sua senha em texto puro);</li>
                  <li>Foto de perfil (caso você opte por adicionar uma);</li>
                  <li>Preferencias de aprendizado (nivel, motivação, idioma da interface).</li>
                </ul>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">1.2 Dados de Uso</h3>
                <p className="mb-3">
                  Coletamos dados sobre como você interage com o App para melhorar a experiencia de aprendizado:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Progresso nas lições (lições concluidas, pontuações, estrelas obtidas);</li>
                  <li>Pontos de experiencia (XP), nivel, sequência de dias (streak) e posição em ligas;</li>
                  <li>Histórico de provérbios diários acessados;</li>
                  <li>Interações com a Biblioteca Sagrada (Òrìṣà visitados, vocabulário consultado);</li>
                  <li>Conquistas desbloqueadas e itens favoritos;</li>
                  <li>Transações de gemas (moeda virtual do App) &mdash; ganhos e gastos;</li>
                  <li>Datas e horarios de acesso, duração das sessões.</li>
                </ul>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">1.3 Dados de Dispositivo</h3>
                <p className="mb-3">
                  Coletamos automaticamente informações técnicas do seu dispositivo:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Identificador único do dispositivo (device ID) &mdash; usado para o sistema de vinculação de dispositivo e prevenção de fraude;</li>
                  <li>Sistema operacional e versão (ex.: Android 14, iOS 18);</li>
                  <li>Modelo do dispositivo;</li>
                  <li>Versao do App instalada;</li>
                  <li>Idioma do sistema;</li>
                  <li>Informações de conectividade (tipo de rede &mdash; WiFi ou dados móveis).</li>
                </ul>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">1.4 Dados de Conversas com IA</h3>
                <p className="mb-3">
                  Quando você utiliza o tutor de inteligência artificial &quot;Àróbá&quot; (o Ancião), coletamos:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Mensagens enviadas e recebidas durante a conversa;</li>
                  <li>Histórico de conversas (armazenado localmente e, quando sincronizado, no servidor);</li>
                  <li>Avaliações de pronúncia geradas pela IA.</li>
                </ul>
                <p>
                  As conversas com o Àróbá são processadas pela nossa IA proprietária através de uma função intermediária segura (proxy) hospedada na nossa infraestrutura. Não compartilhamos suas conversas com terceiros para fins de marketing. O cache de respostas da IA é armazenado por até 7 dias para evitar reprocessamento desnecessário e reduzir custos.
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">1.5 Gravações de Audio</h3>
                <p>
                  Quando você utiliza os exercícios de pronúncia ou a função de fala, o App captura gravações de áudio da sua voz. Essas gravações são:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mt-3">
                  <li>Enviadas ao serviço de reconhecimento de fala (Speech-to-Text) exclusivamente para transcrição e avaliação de pronúncia;</li>
                  <li>Processadas em tempo real e <strong className="text-text-primary">não armazenadas permanentemente</strong> em nossos servidores &mdash; são descartadas após o processamento;</li>
                  <li>Limitadas a 5 MB por envio;</li>
                  <li>Protegidas por autenticação JWT durante a transmissão.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section id="base-legal">
                <h2 className="text-xl font-bold text-text-primary mb-4">2. Base Legal para Processamento</h2>
                <p className="mb-4">
                  Em conformidade com o artigo 7 da LGPD, tratamos seus dados pessoais com base nas seguintes hipóteses legais:
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">2.1 Consentimento (Art. 7, I)</h3>
                <p className="mb-4">
                  Solicitamos seu consentimento expresso para: coleta de gravações de áudio para exercícios de pronúncia; envio de notificações push (lembretes de estudo, provérbios diários, ofertas); uso de cookies analíticos e tecnologias de rastreamento (PostHog); personalização de anúncios via Google AdMob. Você pode revogar seu consentimento a qualquer momento nas configurações do App ou entrando em contato conosco, sem prejuizo do tratamento realizado anteriormente.
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">2.2 Execução de Contrato (Art. 7, V)</h3>
                <p className="mb-4">
                  O tratamento de dados e necessário para a execução do contrato de prestação de serviços (Termos de Uso), incluindo: criação e manutenção da sua conta; fornecimento das funcionalidades do App (lições, progresso, gamificação, Biblioteca Sagrada); processamento de assinaturas e pagamentos (via App Store, Google Play e RevenueCat); sincronização de progresso entre dispositivos; sistema de gemas e economia virtual.
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">2.3 Interesses Legítimos (Art. 7, IX)</h3>
                <p>
                  Utilizamos dados com base em nossos interesses legítimos, sempre respeitando seus direitos fundamentais: monitoramento de erros e estabilidade do App (Sentry); analytics agregados para melhoria do produto (PostHog); prevenção de fraude e segurança (vinculação de dispositivo, verificação de versão); comunicações sobre atualizações e melhorias do serviço. Realizamos testes de balanceamento (Legitimate Interest Assessment) para garantir que nossos interesses não se sobreponham aos seus direitos e liberdades.
                </p>
              </section>

              {/* Section 3 */}
              <section id="uso">
                <h2 className="text-xl font-bold text-text-primary mb-4">3. Como Usamos Suas Informações</h2>
                <p className="mb-4">Utilizamos os dados coletados para as seguintes finalidades:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-text-primary">Fornecimento do serviço:</strong> criar e gerenciar sua conta, fornecer lições, rastrear progresso, calcular XP e níveis, manter streaks e classificações em ligas;</li>
                  <li><strong className="text-text-primary">Personalização:</strong> adaptar o conteúdo ao seu nível de aprendizado, sugerir lições relevantes, personalizar as respostas do tutor IA Àróbá;</li>
                  <li><strong className="text-text-primary">Comunicação:</strong> enviar notificações de estudo, lembretes de provérbios diários, alertas de conquistas, e comunicações sobre o serviço;</li>
                  <li><strong className="text-text-primary">Melhoria do produto:</strong> analisar padrões de uso agregados para identificar melhorias, corrigir erros e desenvolver novos recursos;</li>
                  <li><strong className="text-text-primary">Seguranca:</strong> detectar e prevenir atividades fraudulentas, garantir a integridade da conta, aplicar limites de dispositivo (1 dispositivo no plano gratuito, 3 no plano Pro);</li>
                  <li><strong className="text-text-primary">Monetizacao:</strong> processar pagamentos de assinaturas, gerenciar o trial de 7 dias, administrar a economia de gemas, exibir anúncios relevantes (usuarios do plano gratuito);</li>
                  <li><strong className="text-text-primary">Conformidade legal:</strong> cumprir obrigações legais e regulatórias, responder a solicitações de autoridades competentes.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="compartilhamento">
                <h2 className="text-xl font-bold text-text-primary mb-4">4. Compartilhamento de Dados</h2>
                <p className="mb-4">
                  <strong className="text-text-primary">Não vendemos, alugamos ou comercializamos seus dados pessoais.</strong> Compartilhamos informações apenas com os seguintes provedores de servico, estritamente para a operação do App, e sempre sob acordos de processamento de dados (DPA) adequados:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">Supabase (Infrastructure)</h3>
                    <p className="text-sm">Hospedagem de banco de dados (PostgreSQL), autenticação de usuários, armazenamento de arquivos (avatares, audio cache, certificados) e funções serverless. Seus dados de conta, progresso e sincronização são armazenados na infraestrutura Supabase. <span className="text-text-muted">Localização: AWS (região configurada pelo projeto).</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">Sentry (Monitoramento de Erros)</h3>
                    <p className="text-sm">Recebe relatórios automáticos de erros e falhas do App para que possamos identificar e corrigir problemas rapidamente. Pode conter informações técnicas do dispositivo e stack traces. Não coleta dados de conteúdo do usuário. <span className="text-text-muted">Localização: EUA.</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">PostHog (Analytics)</h3>
                    <p className="text-sm">Recebe eventos de uso anonimizados e agregados (ex.: &quot;lição concluída&quot;, &quot;tela visitada&quot;) para analisar padrões de uso e melhorar o App. Você pode optar por não participar (opt-out) nas configurações do App. <span className="text-text-muted">Localização: EUA (Cloud) ou UE.</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">RevenueCat (Pagamentos)</h3>
                    <p className="text-sm">Gerencia assinaturas e compras in-app. Recebe seu identificador de usuário anônimo e dados de transação (plano, data, status da assinatura). Os dados de pagamento propriamente ditos (cartão de crédito, etc.) são processados diretamente pela Apple App Store ou Google Play, e não temos acesso a eles. <span className="text-text-muted">Localização: EUA.</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">Google AdMob (Publicidade)</h3>
                    <p className="text-sm">Exibe anúncios para usuários do plano gratuito. Pode coletar identificadores de publicidade do dispositivo e dados de interação com anúncios. O consentimento para anúncios personalizados é solicitado por meio do framework UMP (User Messaging Platform) da Google, em conformidade com a LGPD. Você pode optar por anúncios não personalizados. <span className="text-text-muted">Localização: Global (Google LLC).</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">Hugging Face (TTS/STT)</h3>
                    <p className="text-sm">Processa requisições de síntese de voz (Text-to-Speech) e reconhecimento de fala (Speech-to-Text) para funcionalidades de áudio do App. O áudio é enviado via função proxy autenticada e não é armazenado após o processamento. Limitado a 100 requisições TTS/dia por usuário. <span className="text-text-muted">Localização: EUA/UE (Hugging Face Spaces).</span></p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                    <h3 className="text-base font-semibold text-text-primary mb-1">IA Proprietária Yorubs</h3>
                    <p className="text-sm">Processa conversas com o tutor IA Àróbá e gera conteúdo pedagógico. As requisições são enviadas por meio de uma função proxy autenticada com rate limiting (5 requisições/dia para usuários gratuitos, ilimitado para Pro). <span className="text-text-muted">Localização: infraestrutura Yorubs.</span></p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="transferencia">
                <h2 className="text-xl font-bold text-text-primary mb-4">5. Transferência Internacional de Dados</h2>
                <p className="mb-4">
                  Seus dados pessoais podem ser transferidos para e processados em paises fora do Brasil, incluindo os Estados Unidos, onde estão localizados alguns dos nossos provedores de serviço (Supabase, Sentry, PostHog, RevenueCat, Google, Hugging Face).
                </p>
                <p className="mb-4">
                  Essas transferências são realizadas em conformidade com o artigo 33 da LGPD, com base em:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                  <li>Cláusulas contratuais padrão e acordos de processamento de dados (DPA) com cada provedor;</li>
                  <li>Garantias de que os provedores adotam níveis de proteção de dados adequados, incluindo criptografia em transito (TLS 1.2+) e em repouso;</li>
                  <li>Quando aplicável, certificações e frameworks de privacidade reconhecidos internacionalmente;</li>
                  <li>Consentimento específico do titular, quando as demais bases legais não forem aplicáveis.</li>
                </ul>
                <p>
                  A Autoridade Nacional de Proteção de Dados (ANPD) pode emitir regulamentação adicional sobre transferências internacionais, e nós comprometemos a adequar nossas práticas a quaisquer novas exigências.
                </p>
              </section>

              {/* Section 6 */}
              <section id="retenção">
                <h2 className="text-xl font-bold text-text-primary mb-4">6. Armazenamento e Retenção</h2>
                <p className="mb-4">
                  Armazenamos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política, conforme os seguintes prazos:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse mb-4">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 pr-4 text-text-primary font-semibold">Tipo de Dado</th>
                        <th className="text-left py-3 text-text-primary font-semibold">Periodo de Retenção</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="py-3 pr-4">Dados de conta (perfil, email)</td>
                        <td className="py-3">Ate a exclusão da conta pelo usuario</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Progresso e gamificação</td>
                        <td className="py-3">Ate a exclusão da conta pelo usuario</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Conversas com IA (cache)</td>
                        <td className="py-3">7 dias (TTL automático)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Cache de audio TTS</td>
                        <td className="py-3">7 dias (limpeza automatica)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Eventos de analytics</td>
                        <td className="py-3">30 dias (eventos processados são excluídos automaticamente)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Registros de rate limiting</td>
                        <td className="py-3">7 dias (limpeza automática via cron job)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Gravações de audio (pronúncia)</td>
                        <td className="py-3">Nao armazenadas &mdash; descartadas apos processamento</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Dados de pagamento</td>
                        <td className="py-3">Gerenciados pela App Store/Google Play &mdash; não armazenamos dados de cartão</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Logs de erro (Sentry)</td>
                        <td className="py-3">90 dias (configuração padrão do Sentry)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4">
                  Quando você solicita a exclusão da sua conta, removemos seus dados pessoais no prazo de até 30 dias, exceto quando houver obrigação legal de retenção (ex.: registros fiscais relacionados a pagamentos, conforme legislação brasileira). Os dados armazenados localmente no seu dispositivo (WatermelonDB) são excluídos automaticamente ao desinstalar o App.
                </p>
                <p>
                  Utilizamos criptografia em transito (TLS 1.2+) e em repouso para proteger seus dados. O acesso ao banco de dados é restrito por Row Level Security (RLS), garantindo que cada usuário só acesse seus próprios dados. As senhas são hashadas com algoritmos seguros e nunca armazenadas em texto puro.
                </p>
              </section>

              {/* Section 7 */}
              <section id="cookies">
                <h2 className="text-xl font-bold text-text-primary mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
                <p className="mb-4">
                  O Site (yorubs.com) e o App utilizam cookies e tecnologias similares conforme descrito abaixo:
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">7.1 Cookies Essenciais</h3>
                <p className="mb-4">
                  Necessarios para o funcionamento básico do Site. Incluem cookies de sessão para autenticação e preferencias. Esses cookies não podem ser desativados, pois são indispensáveis para o fornecimento do serviço. Base legal: execução de contrato.
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">7.2 Cookies Analiticos (PostHog)</h3>
                <p className="mb-4">
                  Utilizamos o PostHog para coletar dados analíticos anonimizados sobre o uso do Site e do App, como páginas visitadas, duração da sessão e fluxos de navegação. Esses dados nos ajudam a entender como os usuários interagem com nosso produto e a identificar oportunidades de melhoria. Base legal: consentimento. Você pode optar por não participar (opt-out) a qualquer momento nas configurações de privacidade do App ou do navegador.
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">7.3 Tecnologias de Publicidade</h3>
                <p className="mb-4">
                  Para usuarios do plano gratuito, o Google AdMob pode utilizar identificadores de publicidade e tecnologias de rastreamento para exibir anúncios. O consentimento e solicitado por meio do framework UMP (User Messaging Platform) antes de qualquer coleta. Você pode gerenciar suas preferencias de anúncios nas configurações do seu dispositivo (Android: Configurações &gt; Google &gt; Anuncios; iOS: Configurações &gt; Privacidade &gt; Rastreamento).
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">7.4 Armazenamento Local</h3>
                <p>
                  O App utiliza AsyncStorage e WatermelonDB (SQLite) para armazenar dados localmente no seu dispositivo, incluindo preferencias, cache de conteúdo e progresso offline. Esses dados não são cookies no sentido tradicional, mas funcionam de maneira similar. São excluídos ao desinstalar o App.
                </p>
              </section>

              {/* Section 8 */}
              <section id="direitos">
                <h2 className="text-xl font-bold text-text-primary mb-4">8. Seus Direitos sob a LGPD</h2>
                <p className="mb-4">
                  De acordo com os artigos 17 a 22 da LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                </p>

                <ul className="space-y-4 mb-6">
                  <li>
                    <strong className="text-text-primary">Confirmação e Acesso (Art. 18, I e II):</strong> Você tem o direito de confirmar se tratamos seus dados e de acessar uma copia dos dados pessoais que mantemos sobre você.
                  </li>
                  <li>
                    <strong className="text-text-primary">Correção (Art. 18, III):</strong> Você pode solicitar a correção de dados pessoais incompletos, inexatos ou desatualizados. Muitas correções podem ser feitas diretamente na tela de perfil do App.
                  </li>
                  <li>
                    <strong className="text-text-primary">Anonimização, Bloqueio ou Eliminação (Art. 18, IV):</strong> Você pode solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
                  </li>
                  <li>
                    <strong className="text-text-primary">Portabilidade (Art. 18, V):</strong> Você tem o direito de solicitar a portabilidade dos seus dados pessoais a outro fornecedor de servico, em formato estruturado e interoperavel, mediante requisição expressa.
                  </li>
                  <li>
                    <strong className="text-text-primary">Eliminação dos Dados Tratados com Consentimento (Art. 18, VI):</strong> Você pode solicitar a eliminação dos dados tratados com base no seu consentimento, exceto quando houver obrigação legal de retenção.
                  </li>
                  <li>
                    <strong className="text-text-primary">Informação sobre Compartilhamento (Art. 18, VII):</strong> Você pode solicitar informações sobre as entidades publicas e privadas com as quais compartilhamos seus dados (veja a Seção 4 desta Política).
                  </li>
                  <li>
                    <strong className="text-text-primary">Informação sobre Não Consentimento (Art. 18, VIII):</strong> Você tem o direito de ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa recusa.
                  </li>
                  <li>
                    <strong className="text-text-primary">Revogação do Consentimento (Art. 18, IX):</strong> Você pode revogar seu consentimento a qualquer momento, de maneira fácil e gratuita. A revogação não afeta a legalidade do tratamento realizado anteriormente.
                  </li>
                  <li>
                    <strong className="text-text-primary">Oposição (Art. 18, &sect; 2):</strong> Você pode se opor ao tratamento de dados realizado com base em hipóteses legais que não o consentimento, caso haja descumprimento da LGPD.
                  </li>
                  <li>
                    <strong className="text-text-primary">Revisão de Decisoes Automatizadas (Art. 20):</strong> Você pode solicitar a revisao de decisoes tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses (ex.: avaliações de pronúncia geradas pela IA).
                  </li>
                </ul>

                <div className="p-4 rounded-lg border border-gold/30 bg-gold/5">
                  <p className="text-sm">
                    <strong className="text-gold">Como exercer seus direitos:</strong> Envie um e-mail para{" "}
                    <a href="mailto:suporte@yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                      suporte@yorubs.com
                    </a>{" "}
                    com o assunto &quot;Direitos LGPD&quot;, informando seu nome, e-mail de cadastro e o direito que deseja exercer. Responderemos no prazo de até 15 dias úteis, conforme previsto na LGPD. Para exclusão de conta, você também pode utilizar a opção &quot;Excluir Conta&quot; diretamente na tela de Perfil do App.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="crianças">
                <h2 className="text-xl font-bold text-text-primary mb-4">9. Privacidade de Crianças</h2>
                <p className="mb-4">
                  O Yorubs não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente dados pessoais de crianças menores de 13 anos. Se você é pai, mãe ou responsável legal e acredita que seu filho forneceu dados pessoais ao Yorubs, entre em contato conosco pelo e-mail{" "}
                  <a href="mailto:suporte@yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                    suporte@yorubs.com
                  </a>{" "}
                  para que possamos tomar as medidas necessárias para remover essas informações.
                </p>
                <p>
                  Para usuários entre 13 e 18 anos, o uso do App deve ser acompanhado e autorizado por um pai, mãe ou responsável legal, em conformidade com o artigo 14 da LGPD e o Estatuto da Criança e do Adolescente (ECA). O consentimento para o tratamento de dados de crianças e adolescentes deve ser fornecido por pelo menos um dos pais ou pelo responsável legal.
                </p>
              </section>

              {/* Section 10 */}
              <section id="dpo">
                <h2 className="text-xl font-bold text-text-primary mb-4">10. Encarregado de Dados (DPO)</h2>
                <p className="mb-4">
                  Em conformidade com o artigo 41 da LGPD, designamos um Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer &mdash; DPO), responsável por:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Aceitar reclamações e comunicações dos titulares e da Autoridade Nacional de Proteção de Dados (ANPD);</li>
                  <li>Prestar esclarecimentos e adotar providencias;</li>
                  <li>Orientar funcionarios e contratados sobre práticas de proteção de dados;</li>
                  <li>Executar as demais atribuições determinadas pelo controlador ou pela ANPD.</li>
                </ul>

                <div className="p-4 rounded-lg border border-border bg-background-secondary/50">
                  <p className="text-sm mb-1"><strong className="text-text-primary">Encarregado de Dados (DPO)</strong></p>
                  <p className="text-sm">E-mail: <a href="mailto:suporte@yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">suporte@yorubs.com</a></p>
                  <p className="text-sm">Assunto do e-mail: &quot;DPO &mdash; [sua solicitacao]&quot;</p>
                  <p className="text-sm mt-2 text-text-muted">Responderemos a todas as solicitações no prazo de 15 dias úteis.</p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="alterações">
                <h2 className="text-xl font-bold text-text-primary mb-4">11. Alterações a Esta Política</h2>
                <p className="mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de tratamento de dados, novas funcionalidades do App, ou alterações na legislação aplicável.
                </p>
                <p className="mb-4">
                  Quando fizermos alterações relevantes, notificaremos você por meio de:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                  <li>Notificação push no App (para alterações materiais);</li>
                  <li>Aviso destacado na tela inicial do App;</li>
                  <li>E-mail para o endereço cadastrado (para alterações que afetem seus direitos);</li>
                  <li>Atualização da data de &quot;última atualização&quot; no topo desta página.</li>
                </ul>
                <p>
                  Recomendamos que você revise esta Política periodicamente. O uso continuado do App após a publicação de alterações constitui sua aceitação da Política revisada. Caso as alterações exijam novo consentimento, solicitaremos sua aprovação expressa antes de aplicar as mudanças.
                </p>
              </section>

              {/* Section 12 */}
              <section id="contato">
                <h2 className="text-xl font-bold text-text-primary mb-4">12. Contato</h2>
                <p className="mb-4">
                  Se você tiver dúvidas, comentários ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, entre em contato conosco:
                </p>
                <div className="p-5 rounded-lg border border-border bg-background-secondary/50 space-y-2">
                  <p className="text-sm"><strong className="text-text-primary">Yorubs</strong></p>
                  <p className="text-sm">E-mail geral: <a href="mailto:contato@yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">contato@yorubs.com</a></p>
                  <p className="text-sm">Suporte e direitos LGPD: <a href="mailto:suporte@yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">suporte@yorubs.com</a></p>
                  <p className="text-sm">Site: <a href="https://yorubs.com" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">yorubs.com</a></p>
                </div>
                <p className="mt-4">
                  Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), caso entenda que o tratamento dos seus dados pessoais viola a LGPD. As informações de contato da ANPD estão disponíveis em{" "}
                  <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                    www.gov.br/anpd
                  </a>.
                </p>
              </section>

              {/* Closing */}
              <div className="pt-8 border-t border-border text-sm text-text-muted">
                <p>
                  Esta Política de Privacidade foi redigida em Português Brasileiro e e regida pelas leis da República Federativa do Brasil. Em caso de conflito entre versoes traduzidas, prevalece a versão em Português.
                </p>
                <p className="mt-2">
                  Fica eleito o foro da comarca do domicilio do titular dos dados para dirimir quaisquer controvérsias decorrentes desta Política, conforme artigo 101, I, do Código de Defesa do Consumidor.
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
