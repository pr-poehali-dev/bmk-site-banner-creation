import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <section 
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/737bea26-f665-49de-92f4-78cb8daffc0f.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-6 font-semibold text-sm">
              С 1932 года производим качественную молочную продукцию
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Белебеевский молочный комбинат
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Натуральные молочные продукты для здоровья всей семьи. Традиции качества, проверенные временем.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl">
                  Каталог продукции
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
                >
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">90+ лет</h3>
              <p className="text-muted-foreground">Опыта производства молочной продукции с 1932 года</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Icon name="ShieldCheck" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">100% качество</h3>
              <p className="text-muted-foreground">Все сертификаты и строгий контроль на каждом этапе</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Icon name="Leaf" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">Натуральность</h3>
              <p className="text-muted-foreground">Без консервантов, красителей и искусственных добавок</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Icon name="Truck" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-foreground">Свежесть</h3>
              <p className="text-muted-foreground">Ежедневные поставки свежей продукции по всему региону</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-4 font-semibold text-accent">
              Ассортимент
            </div>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Наша продукция</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Более 50 наименований молочной продукции на любой вкус
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl text-white hover:scale-105 transition-transform shadow-xl">
              <div className="text-7xl mb-6">🥛</div>
              <h3 className="text-3xl font-bold mb-4">Молоко</h3>
              <p className="text-blue-100 mb-6 text-lg">Пастеризованное и ультрапастеризованное молоко жирностью от 1,5% до 3,6%</p>
              <Link to="/products">
                <Button variant="secondary" size="lg" className="rounded-full group-hover:bg-white group-hover:text-primary transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-amber-500 to-orange-500 p-10 rounded-3xl text-white hover:scale-105 transition-transform shadow-xl">
              <div className="text-7xl mb-6">🧀</div>
              <h3 className="text-3xl font-bold mb-4">Сыры</h3>
              <p className="text-amber-100 mb-6 text-lg">Твердые и мягкие сыры премиум-класса собственного производства</p>
              <Link to="/products">
                <Button variant="secondary" size="lg" className="rounded-full group-hover:bg-white group-hover:text-primary transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-pink-500 to-rose-500 p-10 rounded-3xl text-white hover:scale-105 transition-transform shadow-xl">
              <div className="text-7xl mb-6">🍦</div>
              <h3 className="text-3xl font-bold mb-4">Кисломолочное</h3>
              <p className="text-pink-100 mb-6 text-lg">Йогурты, кефир, ряженка, творог, сметана и другие продукты</p>
              <Link to="/products">
                <Button variant="secondary" size="lg" className="rounded-full group-hover:bg-white group-hover:text-primary transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="px-10 py-6 text-lg rounded-full shadow-lg">
                Весь каталог продукции
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="ShieldCheck" className="text-white" size={40} />
            </div>
            <h2 className="text-5xl font-bold mb-6">Качество, подтвержденное сертификатами</h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto">
              Вся наша продукция соответствует стандартам ГОСТ и имеет все необходимые сертификаты качества. 
              Мы регулярно проходим проверки и получаем награды за высокое качество продукции.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl">
                Смотреть сертификаты и награды
                <Icon name="Award" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4 font-semibold text-primary">
                Производство
              </div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">Современное оборудование</h2>
              <p className="text-muted-foreground text-lg mb-6">
                На нашем предприятии установлено новейшее европейское оборудование, которое позволяет 
                сохранить все полезные свойства молока и обеспечить высочайшее качество готовой продукции.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Автоматизированные линии</h4>
                    <p className="text-muted-foreground">Минимальное участие человека в процессе производства</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Контроль температуры</h4>
                    <p className="text-muted-foreground">Точное соблюдение температурного режима на всех этапах</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Лабораторный контроль</h4>
                    <p className="text-muted-foreground">Каждая партия проходит проверку в собственной лаборатории</p>
                  </div>
                </div>
              </div>
              <Link to="/production">
                <Button size="lg" className="rounded-full px-8">
                  О производстве
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/5ed4e85a-1945-4b5d-a36a-86c38ac8f473.jpg" 
                alt="Производство" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Есть вопросы?</h2>
            <p className="text-xl mb-10 opacity-95">
              Свяжитесь с нами любым удобным способом, и наши специалисты ответят на все ваши вопросы
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacts">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Контакты
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 px-10 py-6 text-lg rounded-full">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать письмо
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
