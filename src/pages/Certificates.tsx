import Icon from '@/components/ui/icon';

export default function Certificates() {
  const certificates = [
    {
      title: 'Сертификат соответствия ГОСТ',
      description: 'Вся продукция соответствует государственным стандартам качества',
      year: '2024',
      icon: 'FileCheck'
    },
    {
      title: 'Сертификат ISO 9001',
      description: 'Система менеджмента качества',
      year: '2023',
      icon: 'ShieldCheck'
    },
    {
      title: 'Сертификат ISO 22000',
      description: 'Система менеджмента безопасности пищевой продукции',
      year: '2023',
      icon: 'Shield'
    },
    {
      title: 'ХАССП',
      description: 'Система анализа рисков и критических контрольных точек',
      year: '2024',
      icon: 'ClipboardCheck'
    }
  ];

  const awards = [
    {
      title: 'Золотая медаль "Продэкспо-2024"',
      description: 'За сметану 20% в номинации "Лучший молочный продукт"',
      year: '2024'
    },
    {
      title: 'Премия "100 лучших товаров России"',
      description: 'За молоко пастеризованное 3.2%',
      year: '2023'
    },
    {
      title: 'Знак качества РБ',
      description: 'Присвоен продукции торговой марки',
      year: '2023'
    },
    {
      title: 'Лучшее предприятие года',
      description: 'По версии Минсельхоза Республики Башкортостан',
      year: '2022'
    },
    {
      title: 'Диплом "Здоровое питание"',
      description: 'За йогурты натуральные',
      year: '2022'
    },
    {
      title: 'Гран-при выставки "Агро-2022"',
      description: 'За творожную продукцию',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Сертификаты и награды</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Качество нашей продукции подтверждено государственными сертификатами и наградами престижных конкурсов
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Сертификаты качества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наша продукция сертифицирована по международным и российским стандартам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={cert.icon as any} className="text-white" size={40} />
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                    {cert.year}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши награды</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Признание качества нашей продукции на выставках и конкурсах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-muted p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary rounded text-xs font-bold mb-2">
                      {award.year}
                    </span>
                    <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Гарантия качества</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Белебеевский молочный комбинат гарантирует соответствие всей выпускаемой продукции требованиям технических регламентов Таможенного союза и государственным стандартам качества.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-600">Контроль качества</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <p className="text-gray-600">Лабораторный мониторинг</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-2">70+</div>
                  <p className="text-gray-600">Лет опыта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
