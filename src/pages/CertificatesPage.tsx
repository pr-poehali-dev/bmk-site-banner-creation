import Icon from '@/components/ui/icon';

export default function CertificatesPage() {
  const certificates = [
    {
      title: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      year: '2023'
    },
    {
      title: 'ISO 22000:2018',
      description: 'Система менеджмента безопасности пищевой продукции',
      year: '2023'
    },
    {
      title: 'ХАССП',
      description: 'Система анализа рисков и критических контрольных точек',
      year: '2024'
    },
    {
      title: 'Органик сертификат',
      description: 'Сертификация органической продукции',
      year: '2024'
    }
  ];

  const awards = [
    {
      title: '100 лучших товаров России',
      description: 'Победитель в категории "Молочная продукция"',
      year: '2024',
      icon: 'Award'
    },
    {
      title: 'Качество года',
      description: 'Золотая медаль за йогурты',
      year: '2023',
      icon: 'Medal'
    },
    {
      title: 'Лучший производитель',
      description: 'Награда Министерства сельского хозяйства РБ',
      year: '2023',
      icon: 'Trophy'
    },
    {
      title: 'Народная марка',
      description: 'По результатам потребительского голосования',
      year: '2022',
      icon: 'Star'
    },
    {
      title: 'Зеленый стандарт',
      description: 'За экологичность производства',
      year: '2022',
      icon: 'Leaf'
    },
    {
      title: 'Вкус года',
      description: 'Международная награда за вкусовые качества',
      year: '2021',
      icon: 'HeartHandshake'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Сертификаты и награды</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Качество нашей продукции подтверждено международными сертификатами и престижными наградами
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Наши сертификаты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name="ShieldCheck" className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-foreground">{cert.title}</h3>
                <p className="text-muted-foreground text-center text-sm mb-3">{cert.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Награды и достижения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={award.icon as any} className="text-white" size={28} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{award.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{award.description}</p>
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-3xl text-center">
            <Icon name="Award" className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold mb-6">Качество — наш приоритет</h2>
            <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Мы постоянно совершенствуем наши процессы и внедряем передовые технологии, 
              чтобы предоставлять вам только самые качественные молочные продукты
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">наград и сертификатов</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">контроль качества</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">70+</div>
                <div className="text-lg opacity-90">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
