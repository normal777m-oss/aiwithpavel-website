import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Palette, Users, Zap, Mail, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl font-bold text-primary">AIwithPavel</div>
            <div className="flex gap-8">
            <a href="#services" className="text-sm hover:text-primary transition">Услуги</a>
            <a href="#workflow" className="text-sm hover:text-primary transition">Процес</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition">Отзиви</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Контакт</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Персонализирани AI решения</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Изкуството среща <span className="text-primary">изкуствения интелект</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Персонализирани AI портрети и визии за вашия бизнес. Съчетаваме силата на AI с прецизна ръчна обработка за 100% прилика и естествен вид.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Начало
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Разгледай портфолиото
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">За Павел Димитров</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Павел Димитров е създателят на AIwithPavel, инициатива, която съчетава изкуството с изкуствения интелект. С прецизна ръчна обработка (Photoshop) на всяко генерирано изображение, гарантираме 100% прилика и естествен вид, избягвайки дефектите на чистия AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Павел е предприемач, който използва AI технологии за мащабиране на бизнеси. Той не използва готови шаблони, а създава уникален сценарий за всеки клиент, гарантирайки персонализирано и висококачествено решение.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container space-y-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Персонализирани визуални решения за всеки нужди</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <Card className="p-6 border-primary/10 hover:border-primary/30 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Персонализирани AI Портрети</h3>
                  <p className="text-muted-foreground mb-4">
                    Фотореалистична прилика в епична, луксозна или фантастична среда. Висока резолюция (300 DPI / 4K), готово за печат.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Индивидуална оферта
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Детска магия (супергерои, принцеси)
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Артистични портрети
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="p-6 border-primary/10 hover:border-primary/30 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Реставрация на Снимки</h3>
                  <p className="text-muted-foreground mb-4">
                    Вдъхване на нов живот на стари, скъсани или черно-бели снимки. Запазване на родовата история.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Черно-бяло към цветна
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Възстановление на скъсани снимки
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Семейни спомени
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="p-6 border-primary/10 hover:border-primary/30 transition md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Бизнес Визии и Маркетинг</h3>
                  <p className="text-muted-foreground mb-4">
                    Създаване на уникални визии за социални мрежи, дизайн за печат и мърч. Маркетинг решения, насочени към конверсии.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium text-sm mb-2">Социални мрежи</p>
                      <p className="text-sm text-muted-foreground">Instagram, Facebook, TikTok</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">Печат & Мърч</p>
                      <p className="text-sm text-muted-foreground">Тениски, платна, чаши</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">Маркетинг</p>
                      <p className="text-sm text-muted-foreground">Реклами, банери, визии</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-card/50">
        <div className="container space-y-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold mb-4">Работен Процес</h2>
            <p className="text-lg text-muted-foreground">От идея до готов шедьовър в 4 стъпки</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Сподели идеята си",
                description: "Изпратете снимка и кратко описание на желаната визия."
              },
              {
                step: "02",
                title: "Избор на стил",
                description: "Уточняваме детайлите – реалистично, анимационно, Cyberpunk или маслена живопис."
              },
              {
                step: "03",
                title: "AI генерация & обработка",
                description: "Генерираме изображението и ръчно прецизираме детайлите."
              },
              {
                step: "04",
                title: "Готов шедьовър",
                description: "Получавате файл с висока резолюция, перфектен за печат."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="space-y-4">
                  <div className="text-4xl font-display font-bold text-primary/30">{item.step}</div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container space-y-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold mb-4">Отзиви от Клиенти</h2>
            <p className="text-lg text-muted-foreground">Чувайте от хората, които вече се доверяват на AIwithPavel</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Портретът за сина ми като супергерой беше невероятен! Реакцията му беше безценна, а приликата е поразителна.",
                author: "Елена Д.",
                role: "Подарък за дете"
              },
              {
                text: "AI визиите не просто изглеждат добре, те работят. Вдигнаха продажбите ми с 30% още първата седмица.",
                author: "Иван Петров",
                role: "Бизнес собственик"
              },
              {
                text: "Възстановихме снимка на баба и дядо от сватбата им. Разплакахте майка ми от щастие. Благодаря!",
                author: "Мария С.",
                role: "Реставрация на спомени"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-primary/10">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl font-bold">Готови ли сте?</h2>
              <p className="text-lg text-muted-foreground">
                Превърнете вашата идея в дигитален шедьовър. Свържете се с нас днес!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-primary/10 hover:border-primary/30 transition">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Messenger</h3>
                    <p className="text-sm text-muted-foreground mb-4">Пиши в Messenger</p>
                    <Button variant="outline" size="sm" className="border-primary/20">
                      Отвори Messenger
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/10 hover:border-primary/30 transition">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Viber</h3>
                    <p className="text-sm text-muted-foreground mb-4">0896 840 604</p>
                    <Button variant="outline" size="sm" className="border-primary/20">
                      Звънни по Viber
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <div>
                <h3 className="font-medium mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground mb-4">Павел Димитров</p>
                <a href="https://www.facebook.com/normal777m/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Посети профила →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-lg font-bold text-primary">AIwithPavel</div>
            <p className="text-sm text-muted-foreground">
              © 2026 AIwithPavel. Всички права запазени.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/AIwithPavel" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
                Facebook
              </a>
              <a href="https://normal777m-oss.github.io/AIwithPavel/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
