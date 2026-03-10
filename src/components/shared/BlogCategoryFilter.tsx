"use client"

import { useState } from "react"
import Link from "next/link"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"
import type { BlogPost } from "@/lib/blog-posts"
import { Clock, ArrowRight } from "lucide-react"

interface BlogCategoryFilterProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogCategoryFilter({ posts, categories }: BlogCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts

  const [featuredPost, ...restPosts] = filteredPosts

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
            activeCategory === null
              ? "bg-gold/10 text-gold border-gold/20"
              : "bg-background-card text-text-secondary border-border hover:border-gold/20 hover:text-text-primary"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
              activeCategory === category
                ? "bg-gold/10 text-gold border-gold/20"
                : "bg-background-card text-text-secondary border-border hover:border-gold/20 hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured post (first post gets larger card) */}
      {featuredPost && (
        <RevealOnScroll className="mb-10">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <article className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="h-48 md:h-full min-h-[220px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${featuredPost.coverGradient.from}20, ${featuredPost.coverGradient.to}20)`,
                  }}
                >
                  <span
                    className="text-8xl font-serif opacity-20"
                    style={{ color: featuredPost.coverGradient.from }}
                  >
                    {featuredPost.title[0]}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/70 text-gold border border-gold/20 backdrop-blur-sm">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs text-gold font-medium">{featuredPost.category}</span>
                  <h2 className="text-2xl md:text-3xl font-serif leading-tight mt-2 mb-3 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <time>
                        {new Date(featuredPost.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readingTime} min
                      </span>
                    </div>
                    <span className="text-gold text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ler <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </RevealOnScroll>
      )}

      {/* Post grid */}
      {restPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restPosts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <article className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                  <div
                    className="h-36 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${post.coverGradient.from}15, ${post.coverGradient.to}15)`,
                    }}
                  >
                    <span
                      className="text-6xl font-serif opacity-20"
                      style={{ color: post.coverGradient.from }}
                    >
                      {post.title[0]}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gold font-medium">{post.category}</span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <time className="block text-xs text-text-muted mt-4">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </article>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </>
  )
}
