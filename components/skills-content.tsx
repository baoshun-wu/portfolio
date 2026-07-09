import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "前端基础",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "响应式布局"],
    },
    {
      category: "框架与工具",
      skills: ["Vue.js", "Vue Router", "Pinia", "Tailwind CSS"],
    },
    {
      category: "开发工具",
      skills: ["Git", "VS Code", "npm", "Chrome DevTools"],
    },
    {
      category: "设计相关",
      skills: ["Figma", "色彩搭配", "UI 设计基础", "原型制作"],
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">技术栈详情</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          我目前掌握的技术分类
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
