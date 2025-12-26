import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function NewsPage() {
  const news = [
    {
      date: '15 декабря 2024',
      title: 'Новая линия по производству йогуртов',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/0dec5172-2f91-4d76-bde0-1ebe4abffeaa.jpg',
      excerpt: 'На Белебеевском молочном комбинате запущена новая автоматизированная линия по производству йогуртов мощностью 5000 упаковок в час.',
      category: 'Производство'
    },
    {
      date: '1 декабря 2024',
      title: 'Золотая медаль на выставке "Продэкспо-2024"',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/962e8bb9-085e-4898-b8d4-f2f5525a942b.jpg',
      excerpt: 'Наш сыр "Российский" получил золотую медаль на крупнейшей международной выставке продуктов питания.',
      category: 'Награды'
    },
    {
      date: '20 ноября 2024',
      title: 'Расширение ассортимента молочной продукции',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/962e8bb9-085e-4898-b8d4-f2f5525a942b.jpg',
      excerpt: 'В продажу поступили новые виды творожных десертов с натуральными фруктовыми наполнителями.',
      category: 'Продукция'
    },
    {
      date: '10 ноября 2024',
      title: 'Партнёрство с местными фермерами',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/ff25175d-210d-424e-97b3-b602ad38b73e.jpg',
      excerpt: 'Подписаны долгосрочные договора с пятью новыми фермерскими хозяйствами региона на поставку высококачественного молока.',
      category: 'Партнёрство'
    },
    {
      date: '25 октября 2024',
      title: 'Сертификация по стандарту HACCP',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/0dec5172-2f91-4d76-bde0-1ebe4abffeaa.jpg',
      excerpt: 'Предприятие успешно прошло сертификацию системы безопасности пищевой продукции по международному стандарту HACCP.',
      category: 'Качество'
    },
    {
      date: '5 октября 2024',
      title: 'День открытых дверей для школьников',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/ff25175d-210d-424e-97b3-b602ad38b73e.jpg',
      excerpt: 'Более 200 школьников посетили наше предприятие в рамках профориентационной программы и узнали о современном производстве молочных продуктов.',
      category: 'События'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Производство': 'bg-blue-100 text-blue-700',
    'Награды': 'bg-amber-100 text-amber-700',
    'Продукция': 'bg-green-100 text-green-700',
    'Партнёрство': 'bg-purple-100 text-purple-700',
    'Качество': 'bg-red-100 text-red-700',
    'События': 'bg-pink-100 text-pink-700'
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
              Новости компании
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Последние новости</h1>
            <p className="text-xl opacity-95">
              Следите за событиями и достижениями Белебеевского молочного комбината
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {news.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mb-6">{item.excerpt}</p>
                    <Button variant="outline" className="rounded-full">
                      Читать полностью
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Icon name="Rss" className="text-white" size={36} />
            </div>
            <h2 className="text-5xl font-bold mb-6 text-foreground">Подпишитесь на новости</h2>
            <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
              Получайте информацию о новинках продукции, акциях и событиях компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-border focus:border-primary outline-none text-lg"
              />
              <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg whitespace-nowrap">
                <Icon name="Mail" size={20} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}