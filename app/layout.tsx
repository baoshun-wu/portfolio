import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "吴顺宝 | 前端学习者",
  description:
    "吴顺宝的个人网站 - 用代码构建温暖体验的在校前端学习者，掌握 HTML, CSS, JavaScript, Vue",
  keywords: [
    "吴顺宝",
    "前端学习者",
    "前端开发",
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "个人网站",
  ],
  authors: [{ name: "吴顺宝" }],
  creator: "吴顺宝",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "吴顺宝 | 前端学习者",
    description:
      "用代码构建温暖体验的在校前端学习者 - HTML, CSS, JavaScript, Vue",
    siteName: "吴顺宝的个人网站",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "吴顺宝 Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'