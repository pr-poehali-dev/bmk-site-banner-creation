import Icon from '@/components/ui/icon';

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">О компании</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Белебеевский молочный комбинат — одно из старейших предприятий молочной промышленности Башкортостана
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Наша история</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Белебеевский молочный комбинат был основан в 1932 году и за более чем 90 лет работы стал одним из ведущих производителей молочной продукции в Республике Башкортостан.
                </p>
                <p>
                  Мы гордимся тем, что сохранили традиции качества, заложенные основателями предприятия, и постоянно внедряем современные технологии производства.
                </p>
                <p>
                  Наша продукция пользуется заслуженной популярностью благодаря использованию только натурального сырья от местных фермерских хозяйств.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">90+</div>
                  <div className="text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">150+</div>
                  <div className="text-muted-foreground">видов продукции</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">наград</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" className="text-primary" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Качество</h3>
              <p className="text-muted-foreground">
                Строгий контроль на всех этапах производства гарантирует высочайшее качество нашей продукции
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="text-accent" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ответственность</h3>
              <p className="text-muted-foreground">
                Мы несем ответственность перед нашими потребителями за каждый продукт, который выпускаем
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" className="text-secondary" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Инновации</h3>
              <p className="text-muted-foreground">
                Современное оборудование и передовые технологии позволяют нам создавать лучшие продукты
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
