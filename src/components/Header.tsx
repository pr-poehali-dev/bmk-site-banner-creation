import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/products', label: 'Продукция' },
    { path: '/production', label: 'Производство' },
    { path: '/news', label: 'Новости' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
              <Icon name="Milk" size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Белебеевский</h1>
              <p className="text-sm text-muted-foreground">Молочный комбинат</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className="font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться
          </Button>

          <Button variant="outline" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
