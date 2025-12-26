import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CertificatesPage() {
  const certificates = [
    {
      title: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      year: '2003',
      icon: 'Award',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'ISO 22000:2018',
      description: 'Система безопасности пищевой продукции',
      year: '2010',
      icon: 'ShieldCheck',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'HACCP',
      description: 'Анализ рисков и критические контрольные точки',
      year: '2008',
      icon: 'ClipboardCheck',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Органик сертификат',
      description: 'Производство органической продукции',
      year: '2020',
      icon: 'Leaf',
      color: 'from-green-600 to-lime-600',
    },
    {
      title: 'Халяль',
      description: 'Соответствие исламским стандартам',
      year: '2018',
      icon: 'BadgeCheck',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Знак качества',
      description: 'Региональный знак качества продукции',
      year: '2015',
      icon: 'Medal',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const awards = [
    {
      year: '2024',
      title: 'Лучшее предприятие пищевой промышленности',
      organization: 'Министерство сельского хозяйства РФ',
      icon: 'Trophy',
    },
    {
      year: '2023',
      title: '100 лучших товаров России',
      organization: 'Всероссийский конкурс качества',
      icon: 'Award',
    },
    {
      year: '2022',
      title: 'Лучший производитель молочной продукции региона',
      organization: 'Торгово-промышленная палата',
      icon: 'Star',
    },
    {
      year: '2021',
      title: 'Предприятие года',
      organization: 'Региональная администрация',
      icon: 'Medal',
    },
  ];

  const quality = [
    {
      icon: 'Microscope',
      title: 'Лабораторный контроль',
      description: 'Собственная аккредитованная лаборатория проводит более 50 видов анализов',
    },
    {
      icon: 'FileCheck',
      title: 'Сертификация продукции',
      description: 'Вся продукция имеет декларации о соответствии ГОСТ',
    },
    {
      icon: 'Shield',
      title: 'Прослеживаемость',
      description: 'Полная прослеживаемость от поставщика сырья до конечного потребителя',
    },
    {
      icon: 'Settings',
      title: 'Контроль производства',
      description: 'Автоматизированная система контроля технологических процессов',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
              Качество и сертификация
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Сертификаты и награды</h1>
            <p className="text-xl opacity-95">
              Подтверждение высокого качества нашей продукции от ведущих организаций
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4 font-semibold text-primary">
              Международные стандарты
            </div>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Наши сертификаты</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Производство сертифицировано по международным стандартам качества и безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}>
                  <Icon name={cert.icon as any} className="text-white" size={32} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-sm font-semibold text-primary">
                    С {cert.year} года
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 px-6 py-2 rounded-full mb-4 font-semibold text-secondary">
              Признание
            </div>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Награды и достижения</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              За годы работы мы получили множество наград за качество продукции и вклад в развитие отрасли
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon name={award.icon as any} className="text-white" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-accent/10 px-3 py-1 rounded-full text-sm font-bold text-accent mb-3">
                      {award.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{award.title}</h3>
                    <p className="text-muted-foreground text-lg">{award.organization}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-4 font-semibold text-accent">
              Система качества
            </div>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Контроль качества</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Многоступенчатая система контроля обеспечивает высокое качество продукции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {quality.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="BadgeCheck" size={40} className="text-white" />
            </div>
            <h2 className="text-5xl font-bold mb-6">Гарантия качества</h2>
            <p className="text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Мы гарантируем соответствие нашей продукции всем стандартам качества и безопасности. 
              Каждая единица продукции проходит строгий контроль перед поступлением в продажу.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">6</div>
                <div className="text-lg opacity-90">Международных сертификатов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Видов анализов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Контроль партий</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
