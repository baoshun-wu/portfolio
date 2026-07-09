"use client"

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  date: string
  tags: string[]
}

const STORAGE_KEY = "portfolio-blog-posts"

// 获取所有博客文章
export function getPosts(): BlogPost[] {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

// 根据 ID 获取单篇文章
export function getPost(id: string): BlogPost | undefined {
  return getPosts().find((p) => p.id === id)
}

// 添加文章
export function addPost(post: Omit<BlogPost, "id" | "date">): BlogPost {
  const posts = getPosts()
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    date: new Date().toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }
  posts.unshift(newPost)
  savePosts(posts)
  return newPost
}

// 更新文章
export function updatePost(id: string, data: Partial<Omit<BlogPost, "id" | "date">>): BlogPost | undefined {
  const posts = getPosts()
  const idx = posts.findIndex((p) => p.id === id)
  if (idx === -1) return undefined
  posts[idx] = { ...posts[idx], ...data }
  savePosts(posts)
  return posts[idx]
}

// 删除文章
export function deletePost(id: string): boolean {
  const posts = getPosts().filter((p) => p.id !== id)
  savePosts(posts)
  return true
}

function savePosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}
