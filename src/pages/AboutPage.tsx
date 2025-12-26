import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutPage() {
  const milestones = [
    { year: '1956', event: 'Основание Белебеевского молочного комбината' },
    { year: '1978', event: 'Модернизация производственных линий' },
    { year: '2003', event: 'Получение сертификата ISO 9001' },
    { year: '2015', event: 'Запуск новой автоматизированной линии' },
    { year: '2024', event: 'Расширение ассортимента до 50+ продуктов' },
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      description: 'Производим только полезную и натуральную продукцию',
    },
    {
      icon: 'Shield',
      title: 'Контроль качества',
      description: 'Многоступенчатая проверка на всех этапах производства',
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Профессионалы с многолетним опытом работы',
    },
    {
      icon: 'Sparkles',
      title: 'Инновации',
      description: 'Внедряем современные технологии производства',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О нашей компании</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Белебеевский молочный комбинат — это более 50 лет традиций качества и заботы
              о здоровье наших покупателей. Мы производим натуральную молочную продукцию,
              которой доверяют тысячи семей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/bc9a6ce9-d942-4c1e-9de1-210af191e12d.jpg"
                alt="О компании"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Наша история</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Белебеевский молочный комбинат был основан в 1967 году и с тех пор стал
                одним из ведущих производителей молочной продукции в регионе. За годы
                работы мы накопили бесценный опыт и завоевали доверие покупателей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Сегодня наш комбинат — это современное предприятие с передовым
                оборудованием, высококвалифицированным персоналом и строгим контролем
                качества на каждом этапе производства.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">57</div>
                  <div className="text-sm text-muted-foreground mt-1">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">продуктов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground mt-1">сотрудников</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши ценности</h2>
            <p className="text-muted-foreground text-lg">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Основные вехи развития</h2>
            <p className="text-muted-foreground text-lg">
              Путь длиной более полувека
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-gradient-to-br from-primary to-secondary text-white px-4 py-2 rounded-lg font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 relative">
                    {index !== milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-primary/30"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="border-2 group-hover:border-primary transition-all group-hover:shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-lg">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Quote" size={48} className="mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
              "Наша миссия — обеспечить каждую семью качественной и полезной молочной
              продукцией, произведенной с заботой о здоровье и традициях."
            </blockquote>
            <p className="text-lg opacity-90">
              Директор Белебеевского молочного комбината
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}