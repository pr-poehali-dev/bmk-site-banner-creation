import Icon from '@/components/ui/icon';

export default function NewsPage() {
  const news = [
    {
      date: '15 декабря 2024',
      title: 'Новая линия по производству йогуртов запущена в эксплуатацию',
      preview: 'На комбинате введена в строй современная автоматизированная линия европейского производства для выпуска йогуртов с натуральными наполнителями.',
      category: 'Производство'
    },
    {
      date: '28 ноября 2024',
      title: 'Белебеевский молочный комбинат получил золотую медаль на выставке',
      preview: 'Наша продукция отмечена золотой медалью на международной выставке "Агропродмаш-2024" в номинации "Лучший молочный продукт года".',
      category: 'Награды'
    },
    {
      date: '10 ноября 2024',
      title: 'Расширение ассортимента сыров',
      preview: 'В продажу поступили новые сорта сыров: "Маасдам" и "Тильзитер", произведенные по традиционным европейским рецептам.',
      category: 'Новинки'
    },
    {
      date: '22 октября 2024',
      title: 'Открытие фирменного магазина в Уфе',
      preview: 'Состоялось открытие нового фирменного магазина сети "Белебеевский МК" в торговом центре "Мега" в Уфе.',
      category: 'События'
    },
    {
      date: '5 октября 2024',
      title: 'Экологическая инициатива: переход на биоразлагаемую упаковку',
      preview: 'Комбинат начал постепенный переход на экологичную биоразлагаемую упаковку для всей линейки молочной продукции.',
      category: 'Экология'
    },
    {
      date: '18 сентября 2024',
      title: 'Сертификация по международному стандарту ISO 22000',
      preview: 'Предприятие успешно прошло аудит и получило сертификат соответствия международному стандарту безопасности пищевой продукции ISO 22000:2018.',
      category: 'Качество'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Производство': 'bg-blue-100 text-blue-700',
    'Награды': 'bg-amber-100 text-amber-700',
    'Новинки': 'bg-green-100 text-green-700',
    'События': 'bg-purple-100 text-purple-700',
    'Экология': 'bg-emerald-100 text-emerald-700',
    'Качество': 'bg-red-100 text-red-700'
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Новости</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Актуальные события и достижения Белебеевского молочного комбината
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {item.preview}
                </p>
                
                <button className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  Читать далее <Icon name="ArrowRight" size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Newspaper" size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Подпишитесь на новости</h2>
          <p className="text-xl opacity-95 max-w-2xl mx-auto mb-8">
            Будьте в курсе всех событий, акций и новинок нашего комбината
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1 px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
