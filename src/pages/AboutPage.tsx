import Icon from '@/components/ui/icon';

export default function AboutPage() {
  const awards = [
    { title: 'Золотое качество 2023', desc: 'За лучшую молочную продукцию' },
    { title: 'Лидер отрасли', desc: 'Топ-10 производителей России' },
    { title: 'Эко-производство', desc: 'Сертификат экологичности' },
    { title: 'Народная марка', desc: 'Выбор покупателей 2023' },
  ];

  const certificates = [
    'ISO 9001:2015 - Система менеджмента качества',
    'ISO 22000:2018 - Безопасность пищевой продукции',
    'HACCP - Контроль критических точек',
    'Органик - Сертификат органической продукции',
    'Халяль - Соответствие исламским стандартам',
    'Росстандарт - Соответствие ГОСТ',
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-blue-600">О нашей компании</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Белебеевский молочный комбинат — это более 90 лет традиций качества, современные технологии и забота о здоровье наших покупателей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Icon name="History" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Наша история</h2>
            <p className="text-gray-700 leading-relaxed">
              Основанный в 1932 году, Белебеевский молочный комбинат прошел путь от небольшой артели до крупнейшего производителя молочной продукции в регионе. За годы работы мы сохранили традиционные рецепты и внедрили инновационные технологии производства.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Icon name="Target" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-orange-700">Наша миссия</h2>
            <p className="text-gray-700 leading-relaxed">
              Производить натуральную, качественную молочную продукцию, которая приносит пользу здоровью и радость каждой семье. Мы ответственно подходим к выбору сырья, контролируем каждый этап производства и постоянно совершенствуем наши продукты.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Сертификаты качества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <Icon name="BadgeCheck" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Награды и достижения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Trophy" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-700">{award.title}</h3>
                <p className="text-gray-600">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Цифры, которые говорят о нас</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <div>
              <div className="text-5xl font-bold mb-2">90+</div>
              <p className="text-blue-100">лет на рынке</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">видов продукции</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">сотрудников</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">наград и дипломов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
