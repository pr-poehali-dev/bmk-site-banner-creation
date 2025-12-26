import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6 font-semibold">
              Свяжитесь с нами
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
            <p className="text-xl opacity-95">
              Мы всегда рады ответить на ваши вопросы и принять заказы
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Phone" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Телефон</h3>
                <a href="tel:+73478641234" className="text-primary text-xl hover:underline block mb-2">
                  +7 (34786) 4-12-34
                </a>
                <a href="tel:+73478645678" className="text-primary text-xl hover:underline block">
                  +7 (34786) 4-56-78
                </a>
                <p className="text-muted-foreground mt-4">
                  Пн-Пт: 8:00 - 17:00<br />
                  Сб-Вс: выходной
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Mail" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Email</h3>
                <a href="mailto:info@belemoloko.ru" className="text-primary text-xl hover:underline block mb-2">
                  info@belemoloko.ru
                </a>
                <a href="mailto:zakaz@belemoloko.ru" className="text-primary text-xl hover:underline block">
                  zakaz@belemoloko.ru
                </a>
                <p className="text-muted-foreground mt-4">
                  Ответим в течение<br />
                  рабочего дня
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="MapPin" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Адрес</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Республика Башкортостан,<br />
                  г. Белебей,<br />
                  ул. Заводская, д. 1
                </p>
                <Button variant="outline" className="rounded-full">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Открыть на карте
                </Button>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Напишите нам</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-lg"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email или телефон</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-lg"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Тема обращения</label>
                    <select className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-lg">
                      <option>Вопрос о продукции</option>
                      <option>Оптовые поставки</option>
                      <option>Сотрудничество</option>
                      <option>Жалоба или предложение</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Сообщение</label>
                    <textarea 
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-primary outline-none text-lg resize-none"
                      placeholder="Расскажите подробнее о вашем вопросе..."
                    />
                  </div>
                  <Button size="lg" className="w-full py-6 text-lg rounded-full shadow-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Где нас найти</h2>
                <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center mb-6 overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f8c8a8c8a8c8a8c8a8c8a8c8a8c8a8c&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="rounded-3xl"
                  ></iframe>
                </div>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Отдел продаж</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size={20} className="text-primary" />
                      <span>Иванов Пётр Сергеевич</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <a href="tel:+79876543210" className="hover:text-primary">+7 (987) 654-32-10</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <a href="mailto:sales@belemoloko.ru" className="hover:text-primary">sales@belemoloko.ru</a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 mt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Отдел закупок</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size={20} className="text-primary" />
                      <span>Петрова Анна Владимировна</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <a href="tel:+79123456789" className="hover:text-primary">+7 (912) 345-67-89</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <a href="mailto:purchase@belemoloko.ru" className="hover:text-primary">purchase@belemoloko.ru</a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Работаем по всей республике</h2>
            <p className="text-xl mb-10 opacity-95">
              Наша продукция доступна в магазинах по всей Башкирии. Для оптовых поставок свяжитесь с нашим отделом продаж.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Icon name="Store" className="text-white mx-auto mb-3" size={40} />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Торговых точек</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Icon name="Truck" className="text-white mx-auto mb-3" size={40} />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Городов и районов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Icon name="Clock" className="text-white mx-auto mb-3" size={40} />
                <div className="text-3xl font-bold mb-2">24ч</div>
                <div className="text-lg opacity-90">Доставка свежей продукции</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
