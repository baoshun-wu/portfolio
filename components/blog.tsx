"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, PenLine } from "lucide-react"
import Link from "next/link"
import { getPosts, type BlogPost } from "@/lib/blog-store"

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    setPosts(getPosts().slice(0, 3))
  }, [])

  return (
    <section id="blog" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">学习笔记</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              前端学习的思考与记录
            </p>
          </div>

          {/* 最新文章列表 */}
          {posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground mt-auto">
                        {post.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/blog">
                <ExternalLink className="mr-2 h-4 w-4" /> 查看所有笔记
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/blog/write">
                <PenLine className="mr-2 h-4 w-4" /> 写笔记
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
