import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ProductsPage() {
  const products = [
    {
      category: 'Молоко',
      emoji: '🥛',
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'Молоко пастеризованное 2,5%', volume: '900 мл', price: '85 ₽' },
        { name: 'Молоко ультрапастеризованное 3,2%', volume: '1 л', price: '95 ₽' },
        { name: 'Молоко топлёное 4%', volume: '900 мл', price: '105 ₽' },
        { name: 'Молоко пастеризованное 1,5%', volume: '900 мл', price: '75 ₽' },
      ]
    },
    {
      category: 'Кефир и ряженка',
      emoji: '🥤',
      color: 'from-green-500 to-emerald-600',
      items: [
        { name: 'Кефир 2,5%', volume: '900 мл', price: '80 ₽' },
        { name: 'Кефир биокефир 3,2%', volume: '500 мл', price: '65 ₽' },
        { name: 'Ряженка 4%', volume: '900 мл', price: '90 ₽' },
        { name: 'Бифидок 2,5%', volume: '500 мл', price: '70 ₽' },
      ]
    },
    {
      category: 'Сметана',
      emoji: '🍶',
      color: 'from-amber-500 to-orange-500',
      items: [
        { name: 'Сметана 15%', volume: '300 г', price: '85 ₽' },
        { name: 'Сметана 20%', volume: '300 г', price: '95 ₽' },
        { name: 'Сметана 25%', volume: '300 г', price: '110 ₽' },
        { name: 'Сметана 10%', volume: '300 г', price: '75 ₽' },
      ]
    },
    {
      category: 'Творог',
      emoji: '🧈',
      color: 'from-yellow-500 to-amber-500',
      items: [
        { name: 'Творог 5%', volume: '200 г', price: '90 ₽' },
        { name: 'Творог 9%', volume: '200 г', price: '95 ₽' },
        { name: 'Творог обезжиренный', volume: '200 г', price: '85 ₽' },
        { name: 'Творог зернёный 5%', volume: '150 г', price: '100 ₽' },
      ]
    },
    {
      category: 'Йогурты',
      emoji: '🍦',
      color: 'from-pink-500 to-rose-500',
      items: [
        { name: 'Йогурт натуральный 3,2%', volume: '330 г', price: '75 ₽' },
        { name: 'Йогурт с клубникой', volume: '330 г', price: '80 ₽' },
        { name: 'Йогурт с персиком', volume: '330 г', price: '80 ₽' },
        { name: 'Йогурт питьевой', volume: '500 мл', price: '85 ₽' },
      ]
    },
    {
      category: 'Сыры',
      emoji: '🧀',
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Сыр Российский', volume: '1 кг', price: '650 ₽' },
        { name: 'Сыр Гауда', volume: '1 кг', price: '750 ₽' },
        { name: 'Сыр Пошехонский', volume: '1 кг', price: '680 ₽' },
        { name: 'Сыр плавленый', volume: '200 г', price: '120 ₽' },
      ]
    },
    {
      category: 'Масло',
      emoji: '🧈',
      color: 'from-yellow-400 to-yellow-600',
      items: [
        { name: 'Масло сливочное 82,5%', volume: '180 г', price: '180 ₽' },
        { name: 'Масло Крестьянское 72,5%', volume: '180 г', price: '150 ₽' },
        { name: 'Масло Традиционное 82,5%', volume: '200 г', price: '200 ₽' },
      ]
    },
    {
      category: 'Десерты',
      emoji: '🍰',
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Творожная масса с изюмом', volume: '150 г', price: '65 ₽' },
        { name: 'Творожный десерт ванильный', volume: '120 г', price: '55 ₽' },
        { name: 'Пудинг молочный', volume: '150 г', price: '60 ₽' },
        { name: 'Снежок 2,5%', volume: '500 мл', price: '70 ₽' },
      ]
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
              Каталог продукции
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наша продукция</h1>
            <p className="text-xl opacity-95">
              Более 50 наименований натуральной молочной продукции на любой вкус
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/962e8bb9-085e-4898-b8d4-f2f5525a942b.jpg"
              alt="Продукция"
              className="w-full h-[300px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {products.map((category, index) => (
              <div key={index}>
                <div className={`bg-gradient-to-r ${category.color} text-white p-6 rounded-3xl mb-6 shadow-xl`}>
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{category.emoji}</div>
                    <div>
                      <h2 className="text-4xl font-bold">{category.category}</h2>
                      <p className="text-white/80 text-lg">{category.items.length} позиций в категории</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((product, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground min-h-[3rem]">{product.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-muted-foreground">{product.volume}</span>
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                      <Button className="w-full rounded-full">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Truck" className="text-white" size={40} />
            </div>
            <h2 className="text-5xl font-bold mb-6">Доставка по всему региону</h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto">
              Оформите заказ по телефону, и мы доставим свежую продукцию в удобное для вас время
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg rounded-full shadow-2xl">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (34786) 4-12-34
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}