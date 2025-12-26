import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  { id: 1, name: 'Молоко цельное', category: 'Молоко', price: '89 ₽', fat: '3.2%' },
  { id: 2, name: 'Кефир', category: 'Кисломолочное', price: '75 ₽', fat: '2.5%' },
  { id: 3, name: 'Творог', category: 'Творожные', price: '125 ₽', fat: '9%' },
  { id: 4, name: 'Сметана', category: 'Сметана', price: '95 ₽', fat: '20%' },
  { id: 5, name: 'Йогурт натуральный', category: 'Йогурты', price: '68 ₽', fat: '3.2%' },
  { id: 6, name: 'Масло сливочное', category: 'Масло', price: '285 ₽', fat: '82.5%' },
];

const certificates = [
  { id: 1, name: 'Сертификат ISO 9001', year: '2023' },
  { id: 2, name: 'Золотая медаль «Продэкспо»', year: '2024' },
  { id: 3, name: 'Знак качества РФ', year: '2023' },
  { id: 4, name: 'Лучший производитель года', year: '2024' },
];

const news = [
  { id: 1, date: '15 декабря 2024', title: 'Открытие нового цеха по производству йогуртов', excerpt: 'Белебеевский молочный комбинат расширяет производственные мощности' },
  { id: 2, date: '28 ноября 2024', title: 'Награда на выставке «Продэкспо 2024»', excerpt: 'Наша продукция получила золотую медаль за качество' },
  { id: 3, date: '10 октября 2024', title: 'Новая линейка органических продуктов', excerpt: 'Представляем серию продуктов из фермерского молока' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Milk" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Белебеевский МК</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'products', 'production', 'certificates', 'news', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'products' && 'Продукция'}
                  {section === 'production' && 'Производство'}
                  {section === 'certificates' && 'Сертификаты'}
                  {section === 'news' && 'Новости'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Заказать</Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-secondary text-white">Качество с 1965 года</Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Натуральные молочные продукты
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Более 60 лет мы производим качественную молочную продукцию для всей семьи. 
                  Современное оборудование и традиционные рецепты.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg" onClick={() => scrollToSection('products')}>
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Наша продукция
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('about')}>
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/40faba8c-9441-4376-b296-4216567059d9.jpg"
                  alt="Молочная продукция"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Белебеевский молочный комбинат
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы — один из крупнейших производителей молочной продукции в регионе с богатой историей и традициями качества
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Factory', title: '60+ лет', desc: 'На рынке молочной продукции' },
                { icon: 'Award', title: '50+ наград', desc: 'За качество и инновации' },
                { icon: 'Users', title: '500+ сотрудников', desc: 'Профессиональная команда' },
              ].map((item, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-secondary">Продукция</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Наш ассортимент
              </h2>
              <p className="text-lg text-muted-foreground">
                Широкий выбор натуральных молочных продуктов для всей семьи
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon name="Milk" size={64} className="text-primary" />
                    </div>
                    <Badge className="mb-2">{product.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground">Жирность: {product.fat}</span>
                    </div>
                    <Button className="w-full mt-4 group-hover:bg-secondary transition-colors">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="production" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <img 
                  src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/3ddfd12f-2070-4f5c-9248-27230eb44e8b.jpg"
                  alt="Производство"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-fade-in">
                <Badge className="mb-4">Производство</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Современные технологии и традиции
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Наше производство оснащено современным европейским оборудованием, 
                  которое позволяет сохранить все полезные свойства молока при переработке.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'Check', text: 'Автоматизированные линии розлива' },
                    { icon: 'Check', text: 'Контроль качества на каждом этапе' },
                    { icon: 'Check', text: 'Сертифицированная лаборатория' },
                    { icon: 'Check', text: 'Экологически чистое производство' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={item.icon as any} size={18} className="text-primary" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-secondary">Награды</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Сертификаты качества
              </h2>
              <p className="text-lg text-muted-foreground">
                Наши достижения подтверждены международными и российскими сертификатами
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {certificates.map((cert, index) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={40} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/1b81d12e-56b0-426a-b303-14d976a1a394.jpg"
                alt="Сертификаты"
                className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </section>

        <section id="news" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <Badge className="mb-4">Новости</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Последние события
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <Badge className="mb-4 bg-secondary">Контакты</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Свяжитесь с нами
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-slide-in-left">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                    <div className="space-y-4">
                      {[
                        { icon: 'MapPin', text: 'г. Белебей, ул. Производственная, 15' },
                        { icon: 'Phone', text: '+7 (34786) 5-12-34' },
                        { icon: 'Mail', text: 'info@belebey-milk.ru' },
                        { icon: 'Clock', text: 'Пн-Пт: 8:00 - 18:00' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={item.icon as any} size={20} className="text-primary" />
                          </div>
                          <span className="text-lg pt-2">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="animate-fade-in">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Сообщение"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        Отправить
                        <Icon name="Send" size={18} className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Milk" size={32} className="text-primary" />
                <span className="text-xl font-bold">Белебеевский МК</span>
              </div>
              <p className="text-background/70">
                Качественная молочная продукция с 1965 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-background transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('production')} className="hover:text-background transition-colors">Производство</button></li>
                <li><button onClick={() => scrollToSection('certificates')} className="hover:text-background transition-colors">Сертификаты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Молоко</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Кисломолочное</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Творог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>г. Белебей</li>
                <li>+7 (34786) 5-12-34</li>
                <li>info@belebey-milk.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 Белебеевский молочный комбинат. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
