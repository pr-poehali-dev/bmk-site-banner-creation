import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="Milk" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Белебеевский</h3>
                <p className="text-sm text-gray-400">Молочный комбинат</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Производство качественной молочной продукции с 1952 года
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Продукция</Link></li>
              <li><Link to="/production" className="text-gray-400 hover:text-white transition-colors">Производство</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">Новости</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={20} className="text-primary mt-0.5" />
                <span className="text-gray-400 text-sm">г. Белебей, ул. Молодежная, 15</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={20} className="text-primary" />
                <a href="tel:+73834541234" className="text-gray-400 hover:text-white transition-colors">+7 (383) 454-12-34</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={20} className="text-primary" />
                <a href="mailto:info@belebei-milk.ru" className="text-gray-400 hover:text-white transition-colors">info@belebei-milk.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Белебеевский молочный комбинат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
