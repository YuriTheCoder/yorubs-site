import Link from "next/link"
import { notFound } from "next/navigation"
import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BlogContent } from "@/components/blog/BlogContent"
import { ShareButtons } from "@/components/blog/ShareButtons"
import { BLOG_POSTS, getRelatedPosts } from "@/lib/blog-posts"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data"
import { ArrowLeft, Clock, User, ArrowRight, Download } from "lucide-react"
import { LINKS } from "@/lib/constants"

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  return createMetadata({
    title: post?.title || "Blog",
    description: post?.excerpt || "Artigo do blog Yorubs sobre cultura e língua Yorùbá.",
    path: `/blog/${slug}`,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 2)

  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `https://yorubs.com/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
  })

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://yorubs.com" },
    { name: "Blog", url: "https://yorubs.com/blog" },
    { name: post.title, url: `https://yorubs.com/blog/${slug}` },
  ])

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            {/* Cover gradient banner */}
            <div
              className="h-40 md:h-52 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${post.coverGradient.from}20, ${post.coverGradient.to}20)`,
              }}
            >
              <span
                className="text-8xl md:text-9xl font-serif opacity-15"
                style={{ color: post.coverGradient.from }}
              >
                {post.title[0]}
              </span>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/70 text-gold border border-gold/20 backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight mb-4">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <time className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min de leitura
              </span>
            </div>

            {/* Share buttons */}
            <ShareButtons url={`/blog/${slug}`} title={post.title} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-background-card border border-border text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <BlogContent content={post.content} />

            {/* CTA Banner */}
            <Link
              href="/pre-registro"
              className="mt-16 bg-gradient-to-br from-gold/[0.08] to-terracotta/[0.05] border border-gold/20 rounded-2xl p-8 md:p-10 text-center block hover:border-gold/40 transition-colors"
            >
              <Download className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-2xl font-serif mb-2">Quer aprender Yorùbá?</h3>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                O Yorubs está quase pronto. Cadastre-se na lista de espera e seja notificado no lançamento.
              </p>
              <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-background font-semibold rounded-full">
                Garantir Meu Lugar
              </span>
            </Link>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-serif mb-6">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                      <div className="bg-background-card border border-border rounded-xl overflow-hidden hover:border-gold/20 transition-colors h-full">
                        <div
                          className="h-24 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${r.coverGradient.from}12, ${r.coverGradient.to}12)`,
                          }}
                        >
                          <span
                            className="text-4xl font-serif opacity-15"
                            style={{ color: r.coverGradient.from }}
                          >
                            {r.title[0]}
                          </span>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs text-gold font-medium">{r.category}</span>
                            <span className="text-xs text-text-muted flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {r.readingTime} min
                            </span>
                          </div>
                          <h4 className="font-medium mb-2 group-hover:text-gold transition-colors">
                            {r.title}
                          </h4>
                          <p className="text-sm text-text-secondary line-clamp-2">{r.excerpt}</p>
                          <span className="inline-flex items-center gap-1 text-xs text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            Ler mais <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
