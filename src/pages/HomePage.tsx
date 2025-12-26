import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      icon: 'Award',
      title: 'Высокое качество',
      description: 'Продукция соответствует международным стандартам качества',
    },
    {
      icon: 'Factory',
      title: 'Современное производство',
      description: 'Новейшее оборудование и технологии переработки молока',
    },
    {
      icon: 'Leaf',
      title: 'Натуральность',
      description: 'Только натуральное молоко от местных фермерских хозяйств',
    },
    {
      icon: 'TrendingUp',
      title: 'Богатый ассортимент',
      description: 'Более 50 наименований молочной продукции',
    },
  ];

  const products = [
    {
      name: 'Молоко пастеризованное',
      description: 'Классическое молоко 2.5% и 3.2%',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/706cf4ea-920c-4423-a28e-d22a07a706f3.jpg',
    },
    {
      name: 'Кефир и йогурты',
      description: 'Широкий выбор кисломолочной продукции',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/5c2beedf-ef70-43ea-80e5-1b6e7210e4dc.jpg',
    },
    {
      name: 'Творог и сметана',
      description: 'Традиционные молочные продукты',
      image: 'https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/706cf4ea-920c-4423-a28e-d22a07a706f3.jpg',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-blue-500 to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🥛 С 1967 года на рынке
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Белебеевский<br />Молочный комбинат
              </h1>
              <p className="text-xl opacity-90">
                Производство качественной молочной продукции для всей семьи
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Наша продукция
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="font-semibold bg-white/10 border-white/30 hover:bg-white/20 text-white">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-sm opacity-80">видов продукции</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">57</div>
                  <div className="text-sm opacity-80">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm opacity-80">натуральное молоко</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/ff25175d-210d-424e-97b3-b602ad38b73e.jpg"
                alt="Молочная продукция"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-primary p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} className="text-secondary" />
                  <div>
                    <div className="font-bold text-lg">Сертифицировано</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы заботимся о качестве на каждом этапе производства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярная продукция</h2>
            <p className="text-muted-foreground text-lg">
              Свежие и полезные молочные продукты каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                Смотреть весь каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/bc9a6ce9-d942-4c1e-9de1-210af191e12d.jpg"
                alt="Производство"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Современное производство</h2>
              <p className="text-lg text-muted-foreground">
                Наш комбинат оснащен новейшим европейским оборудованием, что позволяет
                сохранить все полезные свойства молока и обеспечить высочайшее качество
                готовой продукции.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Автоматизированные линии розлива и упаковки</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Собственная лаборатория контроля качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Соблюдение всех санитарных норм и стандартов</span>
                </li>
              </ul>
              <Link to="/production">
                <Button size="lg">
                  Узнать больше о производстве
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="font-semibold bg-white/10 border-white/30 hover:bg-white/20 text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (34786) 4-12-34
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}