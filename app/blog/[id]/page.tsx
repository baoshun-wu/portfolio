"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Tag, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { getPost, deletePost, type BlogPost } from "@/lib/blog-store"

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    if (params.id) {
      const found = getPost(params.id as string)
      setPost(found || null)
    }
  }, [params.id])

  const handleDelete = () => {
    if (!post || !confirm("确定要删除这篇笔记吗？")) return
    deletePost(post.id)
    router.push("/blog")
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">笔记不存在</h2>
          <p className="text-muted-foreground mb-4">这篇笔记可能已被删除</p>
          <Button asChild>
            <Link href="/blog">返回笔记列表</Link>
          </Button>
        </div>
      </div>
    )
  }

  // 将 markdown 风格的标题/代码块转为 HTML（简易渲染）
  const renderContent = (text: string) => {
    return text
      .split("\n")
      .map((line, i) => {
        // 代码块
        if (line.startsWith("```")) return `<span key="${i}" class="hidden">`
        // 标题
        if (line.startsWith("### ")) return `<h3 class="text-lg font-bold mt-6 mb-2" key="${i}">${line.slice(4)}</h3>`
        if (line.startsWith("## ")) return `<h2 class="text-xl font-bold mt-8 mb-3" key="${i}">${line.slice(3)}</h2>`
        // 列表
        if (line.startsWith("- ")) return `<li class="ml-4 list-disc text-muted-foreground" key="${i}">${line.slice(2)}</li>`
        if (/^\d+\.\s/.test(line)) return `<li class="ml-4 list-decimal text-muted-foreground" key="${i}">${line.replace(/^\d+\.\s/, "")}</li>`
        // 行内代码
        const withCode = line.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
        if (line.trim() === "") return "<br />"
        return `<p class="text-muted-foreground leading-relaxed mb-2" key="${i}">${withCode}</p>`
      })
      .join("\n")
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 mx-auto py-20 max-w-3xl">
        {/* 导航 */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> 返回列表
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/blog/${post.id}/edit`}>
                <Edit className="mr-1 h-4 w-4" /> 编辑
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleDelete} className="text-destructive hover:text-destructive">
              <Trash2 className="mr-1 h-4 w-4" /> 删除
            </Button>
          </div>
        </div>

        {/* 文章内容 */}
        <article>
          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                <Tag className="mr-1 h-3 w-3" /> {tag}
              </span>
            ))}
          </div>

          {/* 标题 */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{post.title}</h1>

          {/* 日期 */}
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Clock className="mr-1.5 h-4 w-4" />
            {post.date}
          </div>

          {/* 正文 */}
          <Card>
            <CardContent className="p-6 md:p-8 prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}
