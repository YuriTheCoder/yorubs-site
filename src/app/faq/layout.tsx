import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Perguntas Frequentes",
  description: "Tire suas dúvidas sobre o Yorubs: como funciona, planos, pagamentos, recursos do app e suporte técnico.",
  path: "/faq",
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
