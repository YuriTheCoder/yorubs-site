"use client"

import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import { PRICING_FEATURES_TABLE } from "@/lib/constants"
import { Check, X } from "lucide-react"

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-forest-light mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-text-muted/40 mx-auto" />
  return <span className="text-sm text-text-secondary">{value}</span>
}

export function FeatureComparisonTable() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">
            Comparação Detalhada
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-3 text-sm font-semibold text-text-primary">
                    Recurso
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-secondary">
                    Gratuito
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    Língua
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-gold">
                    Sagrado
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-terracotta">
                    Templo
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_FEATURES_TABLE.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 hover:bg-background-card/50 transition-colors"
                  >
                    <td className="py-3.5 px-3 text-sm text-text-primary">{row.feature}</td>
                    <td className="py-3.5 px-3 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <CellValue value={row.lingua} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <CellValue value={row.sagrado} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <CellValue value={row.templo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
