import Link from "next/link"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Página Não Encontrada",
  description: "A página que você procura não existe.",
  path: "/404",
})

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl md:text-9xl font-serif text-gold mb-4">404</h1>
      <p className="text-xl text-text-secondary mb-8">Página não encontrada</p>
      <Link
        href="/"
        className="px-8 py-3 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors"
      >
        Voltar ao Inicio
      </Link>
    </main>
  )
}
