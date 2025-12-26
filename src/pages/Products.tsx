import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Products() {
  const categories = [
    {
      name: 'Молоко',
      icon: 'Milk',
      products: [
        { name: 'Молоко пастеризованное 2.5%', volume: '1 л' },
        { name: 'Молоко пастеризованное 3.2%', volume: '1 л' },
        { name: 'Молоко топлёное 4%', volume: '0.5 л' }
      ]
    },
    {
      name: 'Кисломолочные продукты',
      icon: 'Cookie',
      products: [
        { name: 'Кефир 2.5%', volume: '0.5 л' },
        { name: 'Ряженка 4%', volume: '0.5 л' },
        { name: 'Простокваша 3.2%', volume: '0.5 л' },
        { name: 'Варенец 4%', volume: '0.5 л' }
      ]
    },
    {
      name: 'Сметана',
      icon: 'Soup',
      products: [
        { name: 'Сметана 15%', volume: '200 г' },
        { name: 'Сметана 20%', volume: '200 г' },
        { name: 'Сметана 25%', volume: '200 г' }
      ]
    },
    {
      name: 'Творог',
      icon: 'Wheat',
      products: [
        { name: 'Творог 5%', volume: '200 г' },
        { name: 'Творог 9%', volume: '200 г' },
        { name: 'Творог обезжиренный', volume: '200 г' },
        { name: 'Творожная масса с изюмом', volume: '150 г' }
      ]
    },
    {
      name: 'Йогурты',
      icon: 'IceCream',
      products: [
        { name: 'Йогурт питьевой клубника', volume: '300 мл' },
        { name: 'Йогурт питьевой персик', volume: '300 мл' },
        { name: 'Йогурт натуральный', volume: '125 г' },
        { name: 'Йогурт с злаками', volume: '125 г' }
      ]
    },
    {
      name: 'Сыры',
      icon: 'Beef',
      products: [
        { name: 'Сыр "Российский"', volume: 'весовой' },
        { name: 'Сыр "Пошехонский"', volume: 'весовой' },
        { name: 'Брынза', volume: '200 г' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наша продукция</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Широкий ассортимент натуральных молочных продуктов для всей семьи
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/2204ba5b-e288-4c5f-9657-9f72569db61b.jpg"
                alt="Продукция"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">Качество гарантировано</h2>
              <p className="text-gray-600 mb-6">
                Вся наша продукция производится из натурального молока высшего сорта с соблюдением строгих стандартов качества.
              </p>
              <div className="flex items-center gap-3 text-secondary font-semibold">
                <Icon name="CheckCircle" size={24} />
                <span>Сертифицировано</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={category.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map((product, pidx) => (
                    <div key={pidx} className="bg-muted p-4 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500 mt-1">{product.volume}</p>
                        </div>
                        <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" className="text-secondary" size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Где купить нашу продукцию?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Наша продукция представлена в крупнейших торговых сетях и магазинах Белебея и республики Башкортостан
          </p>
          <Button size="lg" className="text-lg px-8">
            <Icon name="Store" className="mr-2" size={20} />
            Найти на карте
          </Button>
        </div>
      </section>
    </div>
  );
}
