import Icon from '@/components/ui/icon';

export default function ProductsPage() {
  const categories = [
    {
      name: 'Молоко',
      icon: 'Milk',
      gradient: 'from-blue-500 to-blue-600',
      products: [
        { name: 'Молоко пастеризованное 2,5%', volume: '1л, 0.5л' },
        { name: 'Молоко пастеризованное 3,2%', volume: '1л, 0.5л' },
        { name: 'Молоко топленое 4%', volume: '1л' },
        { name: 'Молоко отборное 3,5%', volume: '1л' },
      ],
    },
    {
      name: 'Кефир и йогурты',
      icon: 'Cookie',
      gradient: 'from-orange-500 to-orange-600',
      products: [
        { name: 'Кефир 2,5%', volume: '1л, 0.5л' },
        { name: 'Кефир биойогурт с клубникой', volume: '0.5л' },
        { name: 'Йогурт питьевой с персиком', volume: '0.3л' },
        { name: 'Ряженка 4%', volume: '0.5л' },
      ],
    },
    {
      name: 'Творог и сырки',
      icon: 'IceCream',
      gradient: 'from-blue-500 to-blue-600',
      products: [
        { name: 'Творог 5%', volume: '200г, 400г' },
        { name: 'Творог 9%', volume: '200г, 400г' },
        { name: 'Сырки глазированные', volume: '50г' },
        { name: 'Творожная масса с изюмом', volume: '200г' },
      ],
    },
    {
      name: 'Сметана и сливки',
      icon: 'Soup',
      gradient: 'from-orange-500 to-orange-600',
      products: [
        { name: 'Сметана 15%', volume: '200г, 400г' },
        { name: 'Сметана 20%', volume: '200г, 400г' },
        { name: 'Сливки 10%', volume: '0.5л' },
        { name: 'Сливки 20%', volume: '0.5л' },
      ],
    },
    {
      name: 'Масло',
      icon: 'Salad',
      gradient: 'from-blue-500 to-blue-600',
      products: [
        { name: 'Масло сливочное 82,5%', volume: '200г, 500г' },
        { name: 'Масло крестьянское 72,5%', volume: '200г, 500г' },
        { name: 'Масло топленое 99%', volume: '200г' },
      ],
    },
    {
      name: 'Сыры',
      icon: 'Pizza',
      gradient: 'from-orange-500 to-orange-600',
      products: [
        { name: 'Сыр Российский', volume: '45%' },
        { name: 'Сыр Голландский', volume: '45%' },
        { name: 'Сыр Пошехонский', volume: '45%' },
        { name: 'Сыр плавленый', volume: '200г' },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-blue-600">Наша продукция</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Более 150 наименований натуральной молочной продукции для всей семьи
          </p>
        </div>

        <div className="grid gap-10">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
                    <Icon name={category.icon as any} size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, pIndex) => (
                    <div
                      key={pIndex}
                      className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.volume}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Icon name="Info" size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Вся продукция сертифицирована</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Каждый продукт проходит строгий контроль качества и соответствует всем стандартам безопасности
          </p>
        </div>
      </div>
    </div>
  );
}
