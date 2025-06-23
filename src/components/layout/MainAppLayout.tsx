import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import SidebarNav from '../Dashboard/SidebarNav';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[256px_1fr]">
      <div className="hidden border-r md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col">
        <Header onToggleMobileNav={() => setMobileNavOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="flex flex-col gap-6">
            {children}
          </div>
        </main>
      </div>

      <Sheet open={isMobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="flex flex-col p-0 w-[256px]">
          <SidebarNav />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MainAppLayout;
