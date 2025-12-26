import Icon from '@/components/ui/icon';

export default function ProductionPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Производство</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Современные технологии и традиционные рецепты для создания лучших продуктов
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Этапы производства</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Приемка сырья</h3>
                <p className="text-muted-foreground">
                  Молоко поступает от проверенных фермерских хозяйств региона. Каждая партия проходит лабораторный контроль на соответствие стандартам качества.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Очистка и нормализация</h3>
                <p className="text-muted-foreground">
                  Молоко проходит через современные системы очистки и нормализуется по жирности в соответствии с требованиями к конечному продукту.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Пастеризация</h3>
                <p className="text-muted-foreground">
                  Термическая обработка молока при определенной температуре обеспечивает безопасность продукта и сохранение всех полезных свойств.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Переработка</h3>
                <p className="text-muted-foreground">
                  В зависимости от вида продукции молоко направляется на соответствующие линии: производство творога, сыра, кисломолочных продуктов или масла.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Упаковка</h3>
                <p className="text-muted-foreground">
                  Готовая продукция упаковывается на автоматических линиях в современную экологичную тару, обеспечивающую сохранность продукта.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Контроль качества и отгрузка</h3>
                <p className="text-muted-foreground">
                  Каждая партия проходит финальную проверку качества перед отправкой в торговые сети. Доставка осуществляется специализированным транспортом с соблюдением температурного режима.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Наше оборудование</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Factory" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Современные линии</h3>
              <p className="text-muted-foreground">
                Импортное оборудование от ведущих европейских производителей обеспечивает высокую производительность и качество
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Thermometer" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Контроль температуры</h3>
              <p className="text-muted-foreground">
                Автоматизированные системы контролируют температурный режим на всех этапах производства
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="FlaskConical" className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Лаборатория</h3>
              <p className="text-muted-foreground">
                Собственная лаборатория проводит многоступенчатый контроль качества сырья и готовой продукции
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
