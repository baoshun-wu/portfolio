import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "HTML5",
    level: 90,
    description: "语义化结构，SEO 基础，构建健壮的页面骨架",
    color: "from-amber-200/60 to-amber-300/60",
    tagColor: "bg-amber-100 text-amber-800",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2l2 18 6 2 6-2 2-18H4z" />
        <path d="M12 7v9" />
        <path d="M8 10h4" />
        <path d="M16 10h-4" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    level: 85,
    description: "Flexbox / Grid 布局，响应式设计，过渡与动画",
    color: "from-sky-200/60 to-sky-300/60",
    tagColor: "bg-sky-100 text-sky-800",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2l2 18 6 2 6-2 2-18H4z" />
        <path d="M9 10h6" />
        <path d="M9 14h3" />
        <path d="M12 7v9" />
      </svg>
    ),
  },
  {
    name: "JavaScript (ES6+)",
    level: 78,
    description: "核心语法，DOM 操作，异步编程，ES6+ 新特性",
    color: "from-yellow-200/60 to-yellow-300/60",
    tagColor: "bg-yellow-100 text-yellow-800",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M10 10v6c0 .6-.4 1-1 1H8" />
        <path d="M14 10v4c0 .6.4 1 1 1h1" />
        <path d="M16 10h-2v3" />
      </svg>
    ),
  },
  {
    name: "Vue.js",
    level: 70,
    description: "组件化开发，Vue Router，状态管理（Pinia/Vuex）",
    color: "from-emerald-200/60 to-emerald-300/60",
    tagColor: "bg-emerald-100 text-emerald-800",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function MasteredSkills() {
  return (
    <section id="mastered-skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">掌握技能</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              我目前已掌握的核心前端技术栈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {skills.map((skill, index) => (
              <div key={index} className="animate-in">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ '--tw-shadow-color': 'hsl(268 19% 71% / 0.15)' } as React.CSSProperties}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* 技能图标 */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shrink-0`}>
                        {skill.icon}
                      </div>

                      {/* 技能信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold">{skill.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${skill.tagColor}`}>
                            {skill.level >= 85 ? "熟练" : skill.level >= 75 ? "掌握" : "进阶中"}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>

                        {/* 熟练度进度条 */}
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-muted-foreground">掌握程度</span>
                          <span className="text-xs font-medium text-primary">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}