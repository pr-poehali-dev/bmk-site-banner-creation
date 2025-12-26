import Icon from '@/components/ui/icon';

export default function Production() {
  const stages = [
    {
      title: 'Приёмка молока',
      description: 'Молоко поступает от проверенных поставщиков и проходит строгий входной контроль качества',
      icon: 'Truck'
    },
    {
      title: 'Очистка и нормализация',
      description: 'Молоко очищается и нормализуется до нужного процента жирности',
      icon: 'Filter'
    },
    {
      title: 'Пастеризация',
      description: 'Термическая обработка при контролируемой температуре для уничтожения патогенных микроорганизмов',
      icon: 'Flame'
    },
    {
      title: 'Охлаждение',
      description: 'Быстрое охлаждение для сохранения полезных свойств и свежести продукта',
      icon: 'Snowflake'
    },
    {
      title: 'Производство',
      description: 'Изготовление конечной продукции с добавлением заквасок или других ингредиентов',
      icon: 'Factory'
    },
    {
      title: 'Упаковка',
      description: 'Автоматическая упаковка в стерильную тару с сохранением всех свойств продукта',
      icon: 'Package'
    },
    {
      title: 'Контроль качества',
      description: 'Лабораторный контроль каждой партии продукции на соответствие стандартам',
      icon: 'ClipboardCheck'
    },
    {
      title: 'Хранение и доставка',
      description: 'Хранение при оптимальной температуре и своевременная доставка в торговые точки',
      icon: 'Warehouse'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Производство</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Современное высокотехнологичное производство с полным циклом переработки молока
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Современное оборудование</h2>
              <p className="text-xl text-gray-600 mb-6">
                Мы используем передовое европейское оборудование, которое позволяет сохранить все полезные свойства молока и обеспечить высочайшее качество продукции.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700">Автоматизированные линии переработки молока</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700">Современные системы контроля качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700">Лаборатория с высокоточным оборудованием</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700">Холодильные камеры для хранения готовой продукции</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/c9b738e7-22ef-412b-a2d1-40a45d5e063e/files/002cd390-ed43-47e9-b155-cb76ebcc86fa.jpg"
                alt="Производство"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Этапы производства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-4 mt-4">
                  <Icon name={stage.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Контроль качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Microscope" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Лабораторные испытания</h3>
              <p className="text-gray-600">
                Каждая партия продукции проходит полный цикл лабораторных исследований
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCheck" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Сертификация</h3>
              <p className="text-gray-600">
                Вся продукция имеет необходимые сертификаты соответствия стандартам качества
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">ХАССП система</h3>
              <p className="text-gray-600">
                Внедрена система управления безопасностью пищевой продукции HACCP
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Экскурсии на производство</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы открыты для посетителей! Организуем экскурсии для школьников, студентов и всех желающих увидеть процесс производства молочной продукции
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Icon name="Phone" size={20} />
            <span className="text-lg">Запись по телефону: +7 (34786) 4-00-00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
