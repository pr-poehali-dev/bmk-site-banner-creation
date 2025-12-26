import Icon from '@/components/ui/icon';

export default function CertificatesPage() {
  const certificates = [
    { title: 'Сертификат соответствия ГОСТ', year: '2024', number: 'РОСС RU.АЯ46.Н25632' },
    { title: 'Декларация о соответствии ТР ТС', year: '2024', number: 'ТС N RU Д-RU.АЯ46.В.07254' },
    { title: 'Сертификат ISO 9001:2015', year: '2023', number: 'ISO 9001-2023-0145' },
    { title: 'Сертификат HACCP', year: '2023', number: 'HACCP-2023-0089' },
    { title: 'Ветеринарное свидетельство', year: '2024', number: 'ВС-02-2024-1567' },
    { title: 'Экологический сертификат', year: '2024', number: 'ЭКО-2024-0234' }
  ];

  const awards = [
    { title: '100 лучших товаров России', year: '2023', icon: 'Trophy' },
    { title: 'Лучший продукт Башкортостана', year: '2023', icon: 'Award' },
    { title: 'Знак качества РБ', year: '2022', icon: 'Medal' },
    { title: 'Золотая медаль выставки "Агропродмаш"', year: '2022', icon: 'Star' },
    { title: 'Народная марка России', year: '2021', icon: 'Heart' },
    { title: 'Лучшее предприятие пищевой промышленности', year: '2021', icon: 'Badge' }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Сертификаты и награды</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Наше качество подтверждено официальными документами и признано на федеральном уровне
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Сертификаты качества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{cert.title}</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    <span>Действителен: {cert.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Hash" size={14} />
                    <span>{cert.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Награды и достижения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={award.icon as any} className="text-amber-600" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{award.title}</h3>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="Calendar" size={14} />
                  <span>{award.year} год</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShieldCheck" size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Качество — наш приоритет</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto mb-8">
              Мы постоянно совершенствуем систему контроля качества и внедряем лучшие международные стандарты производства
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                ISO 9001
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                HACCP
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                ГОСТ
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                ТР ТС
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
