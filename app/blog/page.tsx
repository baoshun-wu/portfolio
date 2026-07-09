"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenLine, ArrowLeft, Clock, Tag } from "lucide-react"
import Link from "next/link"
import { getPosts, type BlogPost } from "@/lib/blog-store"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 mx-auto py-20">
        {/* 顶部导航 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" /> 返回首页
          </Link>
        </div>

        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">学习笔记</h1>
            <p className="text-muted-foreground mt-2">记录前端学习路上的思考与总结</p>
          </div>
          <Button asChild className="rounded-full">
            <Link href="/blog/write">
              <PenLine className="mr-2 h-4 w-4" /> 写笔记
            </Link>
          </Button>
        </div>

        {/* 文章列表 */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">还没有笔记，开始写第一篇吧！</p>
            <Button asChild>
              <Link href="/blog/write">写笔记</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* 标签 */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 标题 */}
                    <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* 摘要 */}
                    <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* 日期 */}
                    <div className="flex items-center text-xs text-muted-foreground mt-auto">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
