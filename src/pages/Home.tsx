import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/7241dcb1-62dc-4b03-a5b4-0b5b7be157bc.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Качество проверенное временем
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Белебеевский молочный комбинат — натуральная молочная продукция с 1954 года
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="text-lg px-8 py-6">
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 70 лет мы производим молочную продукцию высочайшего качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-gray-600">Сертифицированная продукция соответствует всем стандартам</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Leaf" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Натуральность</h3>
              <p className="text-gray-600">Только натуральное молоко от проверенных поставщиков</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Factory" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Технологии</h3>
              <p className="text-gray-600">Современное оборудование и контроль качества</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Традиции</h3>
              <p className="text-gray-600">70 лет опыта и семейных рецептов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/2204ba5b-e288-4c5f-9657-9f72569db61b.jpg"
                alt="Продукция"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Широкий ассортимент продукции</h2>
              <p className="text-xl text-gray-600 mb-6">
                Мы производим более 50 видов молочной продукции: молоко, кефир, сметана, творог, йогурты, сыры и многое другое.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">Продукция для всей семьи — от детского питания до деликатесов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">Ежедневная свежая продукция в магазинах города</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">Специальные предложения и акции для постоянных покупателей</span>
                </li>
              </ul>
              <Link to="/products">
                <Button size="lg" className="text-lg px-8">
                  Смотреть продукцию
                  <Icon name="ShoppingCart" className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">70+</div>
              <p className="text-xl text-white/90">лет на рынке</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl text-white/90">видов продукции</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-xl text-white/90">наград качества</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
