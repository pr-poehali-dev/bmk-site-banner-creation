import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="Milk" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Белебеевский</h3>
                <p className="text-sm opacity-90">Молочный комбинат</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Качественная молочная продукция с 1932 года
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 transition">Главная</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition">О компании</Link></li>
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition">Продукция</Link></li>
              <li><Link to="/production" className="text-sm opacity-80 hover:opacity-100 transition">Производство</Link></li>
              <li><Link to="/certificates" className="text-sm opacity-80 hover:opacity-100 transition">Сертификаты</Link></li>
              <li><Link to="/news" className="text-sm opacity-80 hover:opacity-100 transition">Новости</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Белебей, ул. Советская, 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (34786) 4-12-34</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@belebei-milk.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Белебеевский молочный комбинат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;