import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  FileStack,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#' },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: User, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: FileStack, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingCart, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
];

const SidebarNav: React.FC = () => {
  const [activeId, setActiveId] = React.useState<string>('dashboard');

  const renderNavList = (items: NavItem[]) => (
    <nav className="flex flex-col gap-1 px-2">
      {items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={cn(
            'w-full justify-start text-base font-normal h-10',
            activeId === item.id
              ? 'bg-secondary text-primary hover:bg-secondary/80 hover:text-primary'
              : 'text-muted-foreground hover:text-foreground'
          )}
          onClick={() => setActiveId(item.id)}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.label}
        </Button>
      ))}
    </nav>
  );

  return (
    <div className="flex h-full flex-col justify-between py-4">
      <div>
        <div className="mb-4 flex items-center gap-2 px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <div className="h-4 w-4 rounded-full bg-background" />
          </div>
        </div>
        {renderNavList(mainNavItems)}
      </div>
      {renderNavList(secondaryNavItems)}
    </div>
  );
};

export default SidebarNav;
