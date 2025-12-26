import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Свяжитесь с нами удобным способом — мы всегда рады помочь
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Адрес</h3>
                    <p className="text-muted-foreground">
                      453300, Республика Башкортостан,<br />
                      г. Белебей, ул. Заводская, д. 1
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Телефоны</h3>
                    <p className="text-muted-foreground">
                      Приемная: <a href="tel:+73478640000" className="text-primary hover:underline">+7 (34786) 4-00-00</a><br />
                      Отдел продаж: <a href="tel:+73478640001" className="text-primary hover:underline">+7 (34786) 4-00-01</a><br />
                      Горячая линия: <a href="tel:88003334444" className="text-primary hover:underline">8-800-333-44-44</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                    <p className="text-muted-foreground">
                      Общие вопросы: <a href="mailto:info@bmk-belebey.ru" className="text-primary hover:underline">info@bmk-belebey.ru</a><br />
                      Отдел продаж: <a href="mailto:sales@bmk-belebey.ru" className="text-primary hover:underline">sales@bmk-belebey.ru</a><br />
                      Качество: <a href="mailto:quality@bmk-belebey.ru" className="text-primary hover:underline">quality@bmk-belebey.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 8:00 - 17:00<br />
                      Сб-Вс: выходной<br />
                      Производство работает круглосуточно
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4 text-foreground">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Facebook" className="text-primary" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Icon name="Instagram" className="text-accent" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors">
                    <Icon name="Youtube" className="text-secondary" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Send" className="text-primary" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Напишите нам</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Тема обращения</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                    <option>Общий вопрос</option>
                    <option>Сотрудничество</option>
                    <option>Качество продукции</option>
                    <option>Предложение</option>
                    <option>Жалоба</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Опишите ваш вопрос или предложение..."
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Как нас найти</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden" style={{height: '450px'}}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=54.104722%2C54.117222&z=15&l=map&pt=54.104722,54.117222,pm2rdm"
              width="100%" 
              height="450" 
              frameBorder="0"
              className="grayscale"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
