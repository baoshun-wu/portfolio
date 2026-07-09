import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import MasteredSkills from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "吴顺宝 | 前端学习者",
  description:
    "吴顺宝的个人网站 - 用代码构建温暖体验的在校前端学习者，掌握 HTML, CSS, JavaScript, Vue",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      {/* 替换原 Projects 板块为掌握技能 */}
      <MasteredSkills />
      <Education />
      <Blog />
      <Contact />
    </div>
  )
}
