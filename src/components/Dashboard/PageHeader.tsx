import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  const [selectedRange, setSelectedRange] = React.useState<string>('last 6 months');

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <Tabs defaultValue="leads">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger
            value="sales"
            className="text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[180px] justify-start text-left font-normal text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{selectedRange}</span>
            <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSelectedRange('Last 7 days')}>Last 7 days</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedRange('Last 30 days')}>Last 30 days</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedRange('Last 3 months')}>Last 3 months</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedRange('Last 6 months')}>Last 6 months</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedRange('Last year')}>Last year</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PageHeader;
