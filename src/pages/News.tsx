import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function News() {
  const news = [
    {
      date: '15 декабря 2024',
      title: 'Новая линия по производству йогуртов',
      description: 'Белебеевский молочный комбинат запустил новую автоматизированную линию по производству питьевых йогуртов. Это позволит увеличить объем производства на 30% и расширить ассортимент.',
      category: 'Производство'
    },
    {
      date: '28 ноября 2024',
      title: 'Золотая медаль на выставке "Продэкспо"',
      description: 'Наша сметана 20% была удостоена золотой медали на международной выставке продуктов питания "Продэкспо-2024" в номинации "Лучший молочный продукт года".',
      category: 'Награды'
    },
    {
      date: '10 ноября 2024',
      title: 'День открытых дверей',
      description: 'Более 200 жителей Белебея посетили наше предприятие в День открытых дверей. Гости смогли увидеть процесс производства и попробовать свежую продукцию.',
      category: 'События'
    },
    {
      date: '22 октября 2024',
      title: 'Экологический проект "Чистая природа"',
      description: 'Компания запустила программу по переработке упаковки и сокращению выбросов. Установлены новые очистные сооружения и система утилизации отходов.',
      category: 'Экология'
    },
    {
      date: '5 октября 2024',
      title: 'Расширение географии поставок',
      description: 'Белебеевский молочный комбинат начал поставки продукции в Самарскую и Оренбургскую области. Подписаны договоры с крупнейшими торговыми сетями регионов.',
      category: 'Развитие'
    },
    {
      date: '18 сентября 2024',
      title: 'Обновление упаковки',
      description: 'Представлен новый дизайн упаковки молочной продукции. Современный яркий стиль отражает качество и натуральность наших продуктов.',
      category: 'Продукция'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Новости компании</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Будьте в курсе последних событий и достижений Белебеевского молочного комбината
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {news.map((item, idx) => (
                <article key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Icon name="Calendar" size={16} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                  <Button variant="outline" className="gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </article>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Подписка на новости</h3>
                <p className="mb-6 text-white/90">
                  Получайте свежие новости о продукции и акциях прямо на почту
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="w-full px-4 py-3 rounded-lg text-gray-900"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    <Icon name="Mail" className="mr-2" size={18} />
                    Подписаться
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">Категории</h3>
                <div className="space-y-3">
                  {['Производство', 'Награды', 'События', 'Экология', 'Развитие', 'Продукция'].map((cat, idx) => (
                    <button 
                      key={idx}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-700 group-hover:text-primary">{cat}</span>
                      <Icon name="ChevronRight" size={18} className="text-gray-400 group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Award" className="text-secondary" size={32} />
                  <h3 className="text-xl font-bold">Наши достижения</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  15+ наград качества на выставках и конкурсах за последние 3 года
                </p>
                <Button variant="outline" className="w-full">
                  Посмотреть все
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
