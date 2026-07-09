"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Send, Eye } from "lucide-react"
import Link from "next/link"
import { addPost } from "@/lib/blog-store"

export default function WriteBlogPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagsInput, setTagsInput] = useState("")
  const [preview, setPreview] = useState(false)
  const [saving, setSaving] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    setSaving(true)
    const tags = tagsInput
      .split(/[,，、]/)
      .map((t) => t.trim())
      .filter(Boolean)

    const excerpt = content
      .replace(/[#*`\n]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120) + (content.length > 120 ? "..." : "")

    const post = addPost({ title: title.trim(), content, excerpt, tags })
    setSaving(false)
    router.push(`/blog/${post.id}`)
  }

  // 简易预览渲染（同详情页）
  const renderPreview = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.slice(4)}</h3>
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.slice(3)}</h2>
      if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc text-muted-foreground">{line.slice(2)}</li>
      if (/^\d+\.\s/.test(line)) return <li key={i} className="ml-4 list-decimal text-muted-foreground">{line.replace(/^\d+\.\s/, "")}</li>
      const withCode = line.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      if (line.trim() === "") return <br key={i} />
      return <p key={i} className="text-muted-foreground leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: withCode }} />
    })
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 mx-auto py-20 max-w-3xl">
        {/* 导航 */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> 返回列表
          </Link>
        </div>

        {/* 标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">写笔记</h1>
          <p className="text-muted-foreground mt-2">记录你的学习心得与技术思考</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* 标题输入 */}
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  标题
                </label>
                <Input
                  id="title"
                  placeholder="输入笔记标题..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* 标签输入 */}
              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  标签（用逗号或空格分隔）
                </label>
                <Input
                  id="tags"
                  placeholder="例如：HTML, CSS, JavaScript, Vue"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                />
              </div>

              {/* 内容输入 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="content" className="text-sm font-medium">
                    内容
                  </label>
                  <button
                    type="button"
                    onClick={() => setPreview(!preview)}
                    className="text-xs text-primary hover:underline flex items-center"
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    {preview ? "编辑" : "预览"}
                  </button>
                </div>
                {preview ? (
                  <Card className="min-h-[300px] p-4 bg-muted/30">
                    <div className="prose prose-sm max-w-none">
                      {content ? renderPreview(content) : <p className="text-muted-foreground">暂无内容</p>}
                    </div>
                  </Card>
                ) : (
                  <Textarea
                    id="content"
                    placeholder={`支持简易 Markdown 格式：

## 标题
### 小标题
- 列表项
\`行内代码\``}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[300px] font-mono text-sm leading-relaxed"
                    required
                  />
                )}
              </div>

              {/* 提交按钮 */}
              <div className="flex justify-end pt-2">
                <Button type="submit" disabled={!title.trim() || !content.trim() || saving} className="rounded-full">
                  <Send className="mr-2 h-4 w-4" />
                  {saving ? "发布中..." : "发布笔记"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
