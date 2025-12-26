import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Адрес</h3>
                    <p className="text-gray-600">Республика Башкортостан</p>
                    <p className="text-gray-600">г. Белебей, ул. Промышленная, 1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Телефоны</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+73478640000" className="hover:text-primary transition-colors">+7 (34786) 4-00-00</a> - приёмная
                    </p>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+73478640001" className="hover:text-primary transition-colors">+7 (34786) 4-00-01</a> - отдел продаж
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+73478640002" className="hover:text-primary transition-colors">+7 (34786) 4-00-02</a> - снабжение
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:info@belebey-milk.ru" className="hover:text-primary transition-colors">info@belebey-milk.ru</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:sales@belebey-milk.ru" className="hover:text-primary transition-colors">sales@belebey-milk.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                    <p className="text-gray-600">Понедельник - Пятница: 8:00 - 17:00</p>
                    <p className="text-gray-600">Суббота - Воскресенье: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Напишите нам</h2>
              <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Опишите ваш вопрос..."
                  />
                </div>
                <Button size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-br from-muted to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Как нас найти</h2>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Icon name="Map" size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Карта будет добавлена позже</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
