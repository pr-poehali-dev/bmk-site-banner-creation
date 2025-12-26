export default function ProductsPage() {
  const products = [
    {
      category: 'Молоко',
      emoji: '🥛',
      color: 'from-blue-50 to-blue-100',
      items: ['Молоко 2.5%', 'Молоко 3.2%', 'Молоко отборное', 'Молоко топленое']
    },
    {
      category: 'Кисломолочные продукты',
      emoji: '🍦',
      color: 'from-pink-50 to-pink-100',
      items: ['Кефир', 'Ряженка', 'Йогурт натуральный', 'Йогурт с наполнителями', 'Снежок']
    },
    {
      category: 'Творог и творожные изделия',
      emoji: '🧈',
      color: 'from-purple-50 to-purple-100',
      items: ['Творог 5%', 'Творог 9%', 'Творог обезжиренный', 'Творожная масса', 'Сырки глазированные']
    },
    {
      category: 'Сметана',
      emoji: '🥄',
      color: 'from-orange-50 to-orange-100',
      items: ['Сметана 15%', 'Сметана 20%', 'Сметана 25%', 'Сметана домашняя']
    },
    {
      category: 'Сыры',
      emoji: '🧀',
      color: 'from-yellow-50 to-yellow-100',
      items: ['Российский', 'Голландский', 'Пошехонский', 'Сулугуни', 'Адыгейский']
    },
    {
      category: 'Масло',
      emoji: '🧈',
      color: 'from-green-50 to-green-100',
      items: ['Масло сливочное 72.5%', 'Масло сливочное 82.5%', 'Масло крестьянское', 'Масло топленое']
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Наша продукция</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Широкий ассортимент качественной молочной продукции для всей семьи
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className={`bg-gradient-to-br ${product.color} p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow`}>
                <div className="text-6xl mb-4">{product.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{product.category}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ищете конкретный продукт?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем подобрать именно то, что вам нужно
          </p>
          <a href="tel:+73478640000" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg inline-block">
            Позвонить нам
          </a>
        </div>
      </section>
    </div>
  );
}
