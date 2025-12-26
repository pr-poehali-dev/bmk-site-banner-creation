import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-accent to-secondary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Натуральная молочная продукция с 1932 года
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Качество, проверенное временем. Традиции, воплощенные во вкусе.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                Наша продукция
              </Link>
              <Link to="/about" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all border-2 border-white/50">
                О компании
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">90+ лет опыта</h3>
              <p className="text-muted-foreground text-sm">Традиции качества с 1932 года</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="text-accent" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">100% контроль</h3>
              <p className="text-muted-foreground text-sm">Сертификаты качества на всю продукцию</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Leaf" className="text-secondary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Натуральность</h3>
              <p className="text-muted-foreground text-sm">Без консервантов и добавок</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Truck" className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Свежесть</h3>
              <p className="text-muted-foreground text-sm">Ежедневные поставки по региону</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наша продукция</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Широкий ассортимент молочной продукции для всей семьи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
              <div className="text-5xl mb-4">🥛</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Молоко</h3>
              <p className="text-muted-foreground mb-4">Свежее отборное молоко разной жирности</p>
              <Link to="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Подробнее <Icon name="ArrowRight" size={16} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl">
              <div className="text-5xl mb-4">🧀</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Сыры</h3>
              <p className="text-muted-foreground mb-4">Твердые и мягкие сыры премиум качества</p>
              <Link to="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Подробнее <Icon name="ArrowRight" size={16} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl">
              <div className="text-5xl mb-4">🍦</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Кисломолочные</h3>
              <p className="text-muted-foreground mb-4">Йогурты, кефир, творог и сметана</p>
              <Link to="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                Подробнее <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Сертификаты качества</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Все наши продукты проходят строгий контроль качества и имеют необходимые сертификаты
          </p>
          <Link to="/certificates" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg inline-block">
            Смотреть сертификаты
          </Link>
        </div>
      </section>
    </div>
  );
}
