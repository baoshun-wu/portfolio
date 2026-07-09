import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Code, Sparkles } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "前端学习之路",
      description: "从 HTML 到 Vue，一路探索前端技术的魅力，享受将设计变为现实的成就感",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "温暖体验",
      description: "关注用户体验细节，追求简洁优雅的界面，让每一次交互都令人愉悦",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "持续成长",
      description: "保持好奇，持续学习新技术，用更高效的方式解决实际问题",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "创造美好",
      description: "相信代码可以创造价值，致力于用前端技术构建打动人心的产品",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">关于我</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                一名热爱前端的在校大学生，正在用代码构建温暖体验的学习之路上不断前行
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                我是吴顺宝，一名在校大学生，前端学习者。我的前端之旅始于对"好看页面"的好奇，逐渐深入到了 HTML 的语义结构、CSS 的布局美学、JavaScript 的动态交互，以及 Vue 的组件化开发。
                <br /><br />
                我理解的"温暖体验"——是页面加载时的流畅过渡，是按钮按下时的微妙反馈，是色彩搭配带来的视觉舒适。我相信前端开发的本质，是用技术为人们创造有温度的数字化体验。
                <br /><br />
                目前我正在系统学习前端技术栈，不断提升自己，期待有一天能用代码为更多人带来美好的 Web 体验。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
