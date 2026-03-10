import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { DeleteAccountForm } from "@/components/sections/DeleteAccountForm"
import { AlertTriangle, Shield, Clock, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata = createMetadata({
  title: "Excluir Conta",
  description: "Solicite a exclusão da sua conta e dados pessoais do Yorubs. Processo em conformidade com a LGPD.",
  path: "/delete-account",
})

const WHAT_GETS_DELETED = [
  "Perfil e dados de cadastro (nome, email, foto)",
  "Progresso de aprendizado (XP, nível, lições concluídas)",
  "Histórico de conversas com o tutor IA Àróbá",
  "Conquistas, sequências (streaks) e posição em ligas",
  "Saldo de gemas e histórico de transações",
  "Favoritos e preferências",
  "Dados de dispositivos vinculados",
]

const WHAT_IS_KEPT = [
  "Registros de pagamento (obrigação legal fiscal — mantidos por 5 anos)",
  "Logs anonimizados de analytics (não identificáveis)",
]

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-4">
              Excluir Conta
            </h1>
            <p className="text-text-secondary leading-relaxed">
              Você pode solicitar a exclusão completa da sua conta e dados pessoais do Yorubs.
              Este processo é irreversível e está em conformidade com a LGPD (Lei n. 13.709/2018).
            </p>
          </div>

          {/* Warning */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 mb-10">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Atenção: esta ação é irreversível</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Ao excluir sua conta, todos os seus dados serão permanentemente removidos.
                  Você perderá todo o progresso, conquistas, gemas e histórico de conversas.
                  Esta ação não pode ser desfeita.
                </p>
              </div>
            </div>
          </div>

          {/* What gets deleted */}
          <div className="mb-10">
            <h2 className="text-xl font-serif mb-4">O que será excluído</h2>
            <div className="bg-background-card border border-border rounded-xl p-5">
              <ul className="space-y-2">
                {WHAT_GETS_DELETED.map((item, i) => (
                  <li key={i} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What is kept */}
          <div className="mb-10">
            <h2 className="text-xl font-serif mb-4">O que é mantido por obrigação legal</h2>
            <div className="bg-background-card border border-border rounded-xl p-5">
              <ul className="space-y-2">
                {WHAT_IS_KEPT.map((item, i) => (
                  <li key={i} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-10">
            <h2 className="text-xl font-serif mb-4">Como funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background-card border border-border rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-gold">1</span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Solicite</h3>
                <p className="text-xs text-text-muted">Preencha o formulário abaixo com o email da sua conta</p>
              </div>
              <div className="bg-background-card border border-border rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-gold">2</span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Confirmação</h3>
                <p className="text-xs text-text-muted">Enviaremos um email de confirmação para verificar sua identidade</p>
              </div>
              <div className="bg-background-card border border-border rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-gold">3</span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Exclusão</h3>
                <p className="text-xs text-text-muted">Seus dados serão removidos em até 30 dias</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-serif mb-6">Solicitar Exclusão</h2>
            <DeleteAccountForm />
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex gap-3 bg-background-card border border-border rounded-xl p-4">
              <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">LGPD</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Este processo atende ao Art. 18, VI da LGPD (direito à eliminação de dados).
                </p>
              </div>
            </div>
            <div className="flex gap-3 bg-background-card border border-border rounded-xl p-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Prazo</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  A exclusão é processada em até 30 dias após a confirmação por email.
                </p>
              </div>
            </div>
          </div>

          {/* Alternative methods */}
          <div className="border-t border-border pt-8">
            <div className="flex gap-3">
              <HelpCircle className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">Outras formas de excluir sua conta</h3>
                <ul className="space-y-1.5 text-sm text-text-secondary">
                  <li>
                    <strong className="text-text-primary">No app:</strong> Perfil → Configurações → Excluir Conta
                  </li>
                  <li>
                    <strong className="text-text-primary">Por email:</strong> Envie para{" "}
                    <a href="mailto:suporte@yorubs.com" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                      suporte@yorubs.com
                    </a>{" "}
                    com o assunto &quot;Excluir Conta&quot;
                  </li>
                </ul>
                <p className="text-xs text-text-muted mt-3">
                  Caso tenha uma assinatura ativa, cancele-a primeiro na{" "}
                  <a href="https://support.apple.com/pt-br/118428" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                    App Store
                  </a>{" "}
                  ou{" "}
                  <a href="https://support.google.com/googleplay/answer/7018481" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                    Google Play
                  </a>
                  . A exclusão da conta não cancela automaticamente assinaturas ativas nas lojas.
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
