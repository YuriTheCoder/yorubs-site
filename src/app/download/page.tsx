import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { SmartDownloadButton } from "@/components/shared/SmartDownloadButton"
import { QRCode } from "@/components/shared/QRCode"

export const metadata = createMetadata({
  title: "Download",
  description:
    "Baixe o Yorubs gratuitamente para iOS e Android. Comece a aprender Yorùbá hoje com lições interativas, tutor IA e conteúdo cultural.",
  path: "/download",
})

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="min-h-[70vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <TextReveal
              as="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight"
            >
              Comece Sua Jornada
            </TextReveal>
            <TextReveal
              as="p"
              className="text-xl md:text-2xl text-text-secondary mt-6 max-w-2xl mx-auto"
              stagger={0.03}
            >
              Baixe o Yorubs gratuitamente e aprenda Yorùbá com lições interativas, tutor IA e conteúdo cultural.
            </TextReveal>

            <RevealOnScroll className="mt-10">
              <SmartDownloadButton />
            </RevealOnScroll>
          </div>
        </section>

        {/* ── QR Code + 3 Passos ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* QR Code */}
              <RevealOnScroll>
                <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10 text-center max-w-sm mx-auto md:mx-0">
                  <div className="flex justify-center">
                    <QRCode />
                  </div>
                  <p className="text-sm text-text-muted mt-4">
                    Aponte a câmera do celular para baixar o app.
                  </p>
                </div>
              </RevealOnScroll>

              {/* 3 Steps */}
              <div className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Baixe o app",
                    desc: "Disponível gratuitamente na App Store e Google Play.",
                  },
                  {
                    step: "2",
                    title: "Crie sua conta",
                    desc: "Cadastro rápido com email ou conta Google. Menos de 30 segundos.",
                  },
                  {
                    step: "3",
                    title: "Comece a aprender",
                    desc: "Sua primeira lição de tons Yorùbá em menos de 1 minuto.",
                  },
                ].map((item, i) => (
                  <RevealOnScroll key={item.step} delay={i * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-terracotta text-background text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Requisitos do Sistema ── */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-xl font-semibold mb-6 text-center">Requisitos do Sistema</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-text-secondary" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                      </svg>
                    </div>
                    <p className="font-medium">iOS 16+</p>
                    <p className="text-sm text-text-muted mt-1">iPhone e iPad</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-text-secondary" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                      </svg>
                    </div>
                    <p className="font-medium">Android 10+</p>
                    <p className="text-sm text-text-muted mt-1">Smartphones e tablets</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <p className="font-medium">~150 MB</p>
                    <p className="text-sm text-text-muted mt-1">Espaço necessário</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
