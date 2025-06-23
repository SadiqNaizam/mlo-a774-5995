import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatBlockProps {
  value: string;
  label: string;
  info?: string;
  className?: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label, info, className }) => (
  <div className={cn('flex flex-col', className)}>
    <span className="text-3xl lg:text-4xl font-bold text-foreground">{value}</span>
    <div className="flex items-center text-sm text-muted-foreground mt-1">
      <span>{label}</span>
      {info && (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-3.5 w-3.5 ml-1.5 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{info}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  </div>
);

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-2">
            <StatBlock value="40%" label="The proposal is unclear" />
            <StatBlock value="20%" label="However venture pursuit" />
            <StatBlock value="10%" label="Other" />
            <StatBlock value="30%" label="The proposal is unclear" />
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 pt-2">
            <StatBlock value="900" label="total leads count" />
            <StatBlock value="12" label="days in average to convert lead" />
            <StatBlock value="30" label="inactive leads" info="Leads that have not been contacted in over 30 days." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsGrid;
