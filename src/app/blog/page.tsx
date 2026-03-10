import { createMetadata } from "@/lib/metadata"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TextReveal } from "@/components/animations/TextReveal"
import { BLOG_POSTS, getAllCategories } from "@/lib/blog-posts"
import { BlogCategoryFilter } from "@/components/shared/BlogCategoryFilter"

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Artigos sobre cultura Yorùbá, dicas de aprendizado, tecnologia e novidades do Yorubs.",
  path: "/blog",
})

export default function BlogPage() {
  const categories = getAllCategories()

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TextReveal
              as="h1"
              className="text-5xl md:text-6xl font-serif leading-tight tracking-tight"
            >
              Blog
            </TextReveal>
            <TextReveal
              as="p"
              className="text-xl text-text-secondary mt-6 max-w-2xl mx-auto"
              stagger={0.03}
            >
              Artigos sobre cultura, língua, tecnologia e aprendizado Yorùbá.
            </TextReveal>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCategoryFilter posts={BLOG_POSTS} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
