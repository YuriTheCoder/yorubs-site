interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const blocks = content.split("\n\n")

  return (
    <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
      {blocks.map((block, i) => {
        // Heading
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-serif font-bold text-text-primary mt-10 mb-4">
              {block.replace("## ", "")}
            </h2>
          )
        }

        // Unordered list
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.startsWith("- "))
          return (
            <ul key={i} className="space-y-2 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>{item.replace("- ", "")}</span>
                </li>
              ))}
            </ul>
          )
        }

        // Numbered list
        if (/^\d+\./.test(block)) {
          const items = block.split("\n").filter((l) => /^\d+\./.test(l))
          return (
            <ol key={i} className="space-y-2 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-gold font-bold text-sm mt-0.5 flex-shrink-0 w-5">{j + 1}.</span>
                  <span>{item.replace(/^\d+\.\s*/, "")}</span>
                </li>
              ))}
            </ol>
          )
        }

        // Regular paragraph
        return <p key={i}>{block}</p>
      })}
    </div>
  )
}
