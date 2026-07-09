import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "前端自学之路",
      company: "个人项目",
      period: "2024 - 至今",
      location: "中国",
      achievements: [
        "系统学习 HTML5 语义化标签和 SEO 优化技巧，构建结构清晰的 Web 页面",
        "深入掌握 CSS3 布局技术，包括 Flexbox 和 Grid，实现各种复杂页面的响应式设计",
        "学习 JavaScript 核心语法与 DOM 操作，能够实现丰富的页面交互效果",
        "使用 Vue 3 进行组件化开发，掌握 Vue Router 和 Pinia 状态管理",
      ],
    },
    {
      title: "前端基础入门",
      company: "在线学习",
      period: "2023 - 2024",
      location: "中国",
      achievements: [
        "从 HTML 和 CSS 开始，逐步掌握网页开发的基础知识",
        "学习 JavaScript 基础语法，理解变量、函数、事件等核心概念",
        "了解 Git 版本控制，掌握基本的协作开发流程",
        "通过实战项目巩固所学，建立了完整的前端知识体系",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">学习经历</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              我的前端学习之路与成长历程
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
