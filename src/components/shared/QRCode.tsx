"use client"

import Image from "next/image"

/**
 * Stylized QR code component for the download page.
 * Renders an SVG pattern that visually resembles a QR code,
 * with the Yorubs logo in the center.
 */
export function QRCode({ className = "" }: { className?: string }) {
  // A hand-crafted QR-like SVG pattern.
  // Each row is a binary string where 1 = dark module, 0 = light module.
  // The center is left blank for the logo overlay.
  const modules = [
    "1111111011010101111111",
    "1000001010110101000001",
    "1011101001001101011101",
    "1011101010110101011101",
    "1011101011010001011101",
    "1000001010101101000001",
    "1111111010101011111111",
    "0000000011010100000000",
    "1101011101100110101011",
    "0110100010011001100110",
    "1010110110100011010101",
    "0011010001011010110010",
    "1101100110100101011101",
    "0000000010110101010010",
    "1111111010011001010110",
    "1000001001100110110011",
    "1011101011010101101010",
    "1011101001011010010110",
    "1011101010100101101011",
    "1000001010110010110010",
    "1111111011001101010101",
    "0000000011010100000000",
  ]

  const size = modules.length
  const cellSize = 10
  const svgSize = size * cellSize
  const logoAreaStart = Math.floor(size / 2) - 2
  const logoAreaEnd = Math.floor(size / 2) + 2

  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      <div className="relative bg-white rounded-2xl p-5 shadow-card">
        <svg
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          width={200}
          height={200}
          className="block"
          role="img"
          aria-label="QR code para baixar o Yorubs"
        >
          {/* Background */}
          <rect width={svgSize} height={svgSize} fill="white" />

          {/* QR modules */}
          {modules.map((row, y) =>
            row.split("").map((cell, x) => {
              // Skip center area for logo
              if (
                x >= logoAreaStart &&
                x <= logoAreaEnd &&
                y >= logoAreaStart &&
                y <= logoAreaEnd
              ) {
                return null
              }

              if (cell === "1") {
                return (
                  <rect
                    key={`${x}-${y}`}
                    x={x * cellSize}
                    y={y * cellSize}
                    width={cellSize}
                    height={cellSize}
                    fill="#0A0A0F"
                    rx={1}
                  />
                )
              }
              return null
            })
          )}

          {/* Finder patterns (top-left, top-right, bottom-left) */}
          {/* These are already included in the module data, but we add gold accents */}
          <rect x={0} y={0} width={70} height={70} fill="none" stroke="#D4A853" strokeWidth={2} rx={4} />
          <rect x={(size - 7) * cellSize} y={0} width={70} height={70} fill="none" stroke="#D4A853" strokeWidth={2} rx={4} />
          <rect x={0} y={(size - 7) * cellSize} width={70} height={70} fill="none" stroke="#D4A853" strokeWidth={2} rx={4} />
        </svg>

        {/* Logo overlay in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Yorubs"
              width={36}
              height={36}
              className="rounded"
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-text-secondary mt-4 text-center">
        Escaneie para baixar
      </p>
    </div>
  )
}
