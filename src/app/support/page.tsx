import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import { Mail, Clock, MessageCircleQuestion, BookOpen, Shield, Smartphone, CreditCard, Trash2 } from "lucide-react"

export const metadata = createMetadata({
  title: "Suporte",
  description: "Central de suporte do Yorubs. Encontre ajuda, tire dúvidas e entre em contato com nossa equipe.",
  path: "/support",
})

const COMMON_ISSUES = [
  {
    icon: Smartphone,
    title: "Problemas com o App",
    items: [
      "Tente fechar e reabrir o app completamente",
      "Verifique se está na versão mais recente (App Store / Google Play)",
      "Limpe o cache do app nas configurações do dispositivo",
      "Se o problema persistir, desinstale e reinstale (seu progresso está salvo na nuvem)",
    ],
  },
  {
    icon: CreditCard,
    title: "Assinatura e Pagamento",
    items: [
      "Assinaturas são gerenciadas pela App Store (iOS) ou Google Play (Android)",
      "Para cancelar: vá nas configurações da loja > Assinaturas > Yorubs",
      "Reembolsos seguem a política da loja (geralmente até 48h após a compra)",
      "Seu acesso Pro continua até o final do período pago, mesmo após cancelar",
    ],
  },
  {
    icon: Shield,
    title: "Conta e Segurança",
    items: [
      "Para redefinir sua senha, use a opção 'Esqueci minha senha' na tela de login",
      "Você pode excluir sua conta nas configurações do app ou pela nossa página de exclusão",
      "Seus dados são protegidos por criptografia e LGPD",
      "Cada plano tem limite de dispositivos: Gratuito (1), Língua (2), Sagrado (3), Templo (5)",
    ],
  },
]

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight mb-4">
              Central de Suporte
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Estamos aqui para ajudar. Encontre respostas rápidas ou entre em contato com nossa equipe.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-background-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Email</h3>
              <a
                href="mailto:suporte@yorubs.com"
                className="text-sm text-gold hover:text-gold-light transition-colors underline underline-offset-4"
              >
                suporte@yorubs.com
              </a>
            </div>

            <div className="bg-background-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Tempo de Resposta</h3>
              <p className="text-sm text-text-secondary">
                Até <span className="text-terracotta font-semibold">48 horas</span> úteis
              </p>
            </div>

            <div className="bg-background-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircleQuestion className="w-6 h-6 text-forest-light" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">FAQ</h3>
              <Link
                href="/faq"
                className="text-sm text-gold hover:text-gold-light transition-colors underline underline-offset-4"
              >
                Ver perguntas frequentes
              </Link>
            </div>
          </div>

          {/* Common issues */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif mb-8">Problemas Comuns</h2>
            <div className="space-y-6">
              {COMMON_ISSUES.map((issue) => (
                <div key={issue.title} className="bg-background-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <issue.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-semibold text-text-primary">{issue.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-[52px]">
                    {issue.items.map((item, i) => (
                      <li key={i} className="text-sm text-text-secondary flex gap-2">
                        <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif mb-8">Links Úteis</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/faq"
                className="flex items-center gap-3 bg-background-card border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Perguntas Frequentes</p>
                  <p className="text-xs text-text-muted">Respostas para as dúvidas mais comuns</p>
                </div>
              </Link>

              <Link
                href="/delete-account"
                className="flex items-center gap-3 bg-background-card border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
              >
                <Trash2 className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Excluir Conta</p>
                  <p className="text-xs text-text-muted">Solicite a exclusão dos seus dados</p>
                </div>
              </Link>

              <Link
                href="/privacy"
                className="flex items-center gap-3 bg-background-card border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
              >
                <Shield className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Política de Privacidade</p>
                  <p className="text-xs text-text-muted">Como tratamos seus dados (LGPD)</p>
                </div>
              </Link>

              <Link
                href="/terms"
                className="flex items-center gap-3 bg-background-card border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Termos de Uso</p>
                  <p className="text-xs text-text-muted">Condições de uso do serviço</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-gold/[0.08] to-terracotta/[0.05] border border-gold/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-serif mb-3">Não encontrou o que procura?</h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Entre em contato diretamente com nossa equipe. Responderemos o mais rápido possível.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:suporte@yorubs.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                suporte@yorubs.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/5 transition-colors"
              >
                Formulário de Contato
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
