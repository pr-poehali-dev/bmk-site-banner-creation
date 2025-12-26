import Icon from '@/components/ui/icon';

const ContactsPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">452000, Республика Башкортостан,<br/>г. Белебей, ул. Советская, д. 123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (800) 555-35-35 (бесплатно по России)<br/>+7 (34786) 4-12-34</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@belemilk.ru<br/>sales@belemilk.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 17:00<br/>Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-2xl">
                <h3 className="font-bold mb-3">Отдел продаж</h3>
                <p className="text-muted-foreground mb-3">
                  По вопросам сотрудничества и оптовых закупок:
                </p>
                <p className="font-medium">+7 (34786) 4-15-67</p>
                <p className="text-sm text-muted-foreground">sales@belemilk.ru</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Как нас найти</h2>
          <div className="aspect-video bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Карта расположения</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
