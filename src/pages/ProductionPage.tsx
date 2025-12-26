import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function ProductionPage() {
  const stages = [
    {
      icon: 'Milk',
      title: 'Приёмка молока',
      desc: 'Молоко поступает только от проверенных фермерских хозяйств региона. Каждая партия проходит входной контроль качества в нашей лаборатории.'
    },
    {
      icon: 'Thermometer',
      title: 'Пастеризация',
      desc: 'Молоко проходит тепловую обработку при строго контролируемой температуре, что позволяет сохранить все полезные свойства и обеспечить безопасность.'
    },
    {
      icon: 'Beaker',
      title: 'Производство',
      desc: 'На современных автоматизированных линиях производится вся линейка нашей продукции — от молока до сыров.'
    },
    {
      icon: 'Package',
      title: 'Упаковка',
      desc: 'Готовая продукция фасуется в современную герметичную упаковку, которая сохраняет свежесть и вкус на протяжении всего срока годности.'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Контроль качества',
      desc: 'Перед отправкой каждая партия проходит финальную проверку в лаборатории. Мы гарантируем качество каждой единицы продукции.'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      desc: 'Готовая продукция доставляется в магазины в специализированных рефрижераторах с соблюдением температурного режима.'
    }
  ];

  const equipment = [
    {
      name: 'Пастеризационно-охладительная установка',
      manufacturer: 'Tetra Pak (Швеция)',
      capacity: '10 000 л/час'
    },
    {
      name: 'Сепаратор-нормализатор молока',
      manufacturer: 'Alfa Laval (Швеция)',
      capacity: '8 000 л/час'
    },
    {
      name: 'Линия розлива молока',
      manufacturer: 'Elopak (Норвегия)',
      capacity: '6 000 упаковок/час'
    },
    {
      name: 'Сыродельная ванна',
      manufacturer: 'GEA (Германия)',
      capacity: '5 000 л'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
              Производство
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Как мы производим продукцию</h1>
            <p className="text-xl opacity-95">
              Современные технологии и строгий контроль на каждом этапе
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/0dec5172-2f91-4d76-bde0-1ebe4abffeaa.jpg"
                alt="Производство"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4 font-semibold text-primary">
                Этапы производства
              </div>
              <h2 className="text-5xl font-bold mb-4 text-foreground">От фермы до прилавка</h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                Полный цикл производства занимает от нескольких часов до нескольких дней в зависимости от вида продукции
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stages.map((stage, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={stage.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-secondary/10 px-6 py-2 rounded-full mb-4 font-semibold text-secondary">
                Оборудование
              </div>
              <h2 className="text-5xl font-bold mb-4 text-foreground">Современные технологии</h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                На нашем комбинате установлено новейшее европейское оборудование ведущих мировых производителей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Settings" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground mb-2">{item.manufacturer}</p>
                      <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                        {item.capacity}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-4 font-semibold text-accent">
                Контроль качества
              </div>
              <h2 className="text-5xl font-bold mb-4 text-foreground">Собственная лаборатория</h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                На предприятии работает аккредитованная лаборатория, которая проводит все необходимые анализы
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="FlaskConical" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Входной контроль</h3>
                <p className="text-muted-foreground">
                  Проверка качества сырого молока при приёмке от поставщиков
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Microscope" className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Контроль процесса</h3>
                <p className="text-muted-foreground">
                  Постоянный мониторинг параметров на всех этапах производства
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="BadgeCheck" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Финальная проверка</h3>
                <p className="text-muted-foreground">
                  Анализ готовой продукции перед отправкой в торговые сети
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" className="text-white" size={40} />
            </div>
            <h2 className="text-5xl font-bold mb-6">Экскурсии на производство</h2>
            <p className="text-xl mb-10 opacity-95">
              Мы открыты для посетителей! Организуем экскурсии для школьников, студентов и всех, кто интересуется производством молочной продукции.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+73478641234" className="inline-block">
                <button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl font-bold transition-all flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Записаться на экскурсию
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}