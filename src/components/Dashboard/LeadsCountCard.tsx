import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

interface Source {
  name: string;
  value: number;
  amount: number;
  color: string;
}

const sourceData: Source[] = [
  { name: 'Clutch', value: 50, amount: 3000, color: '#ef4444' }, // red-500
  { name: 'Behance', value: 40, amount: 1000, color: '#f59e0b' }, // amber-500
  { name: 'Instagram', value: 10, amount: 1000, color: '#0d9488' }, // teal-600
  { name: 'Dribbble', value: 10, amount: 1000, color: '#84cc16' }, // lime-500
];

const LeadsCountCard: React.FC = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 border-b md:border-b-0 md:border-r">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg font-semibold">Funnel count</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold">600</span>
              <span className="text-muted-foreground">active leads</span>
            </div>
            <div className="w-full h-2 rounded-full flex overflow-hidden mb-6">
              {funnelData.map((stage) => (
                <div key={stage.name} className={stage.color} style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }} />
              ))}
            </div>
            <ul className="space-y-3 text-sm">
              {funnelData.map((stage) => (
                <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
                  <div className="flex items-center">
                    <span className={`w-2.5 h-2.5 rounded-sm mr-3 ${stage.color}`} />
                    <span>{stage.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium text-right">{stage.count}</span>
                  <span className="text-muted-foreground font-medium text-right">${stage.value}</span>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-muted-foreground font-medium text-right cursor-default">{stage.duration}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>average time on this stage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>

        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg font-semibold">Sources</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col items-center md:items-start">
            <div className="w-48 h-48 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sourceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" paddingAngle={2}>
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="w-full space-y-3 text-sm">
              {sourceData.map((source) => (
                <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-sm mr-3" style={{ backgroundColor: source.color }} />
                    <span>{source.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium text-right">${new Intl.NumberFormat().format(source.amount)}</span>
                   <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                           <span className="font-medium text-right w-[40px] text-muted-foreground cursor-default">{source.value}%</span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>from leads total</p>
                        </TooltipContent>
                      </Tooltip>
                   </TooltipProvider>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default LeadsCountCard;
