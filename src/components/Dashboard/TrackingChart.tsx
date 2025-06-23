import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ChevronDown } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface TrackingData {
  month: string;
  closedWon: number;
  closedLost: number;
}

const trackingChartData: TrackingData[] = [
  { month: 'March', closedWon: 88, closedLost: 65 },
  { month: 'April', closedWon: 62, closedLost: 42 },
  { month: 'May', closedWon: 75, closedLost: 55 },
  { month: 'June', closedWon: 85, closedLost: 12 },
  { month: 'July', closedWon: 95, closedLost: 45 },
  { month: 'August', closedWon: 30, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="font-bold text-card-foreground">{label}</p>
        <p style={{ color: payload[0].stroke }}>{`Won: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].stroke }}>{`Lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const TrackingChart: React.FC = () => {
  const [selectedRange, setSelectedRange] = React.useState<string>('last 6 months');

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold">Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">680</span>
                <span className="text-sm text-muted-foreground">total closed</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">70</span>
                <span className="text-sm text-muted-foreground">total lost</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <ToggleGroup type="single" defaultValue="converted" size="sm">
              <ToggleGroupItem value="came">Leads came</ToggleGroupItem>
              <ToggleGroupItem value="converted">Leads Converted</ToggleGroupItem>
              <ToggleGroupItem value="size">Total deals size</ToggleGroupItem>
            </ToggleGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <span>{selectedRange}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedRange('Last 30 days')}>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRange('Last 6 months')}>Last 6 months</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRange('Last year')}>Last year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trackingChartData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Legend
                verticalAlign="bottom"
                iconType="square"
                iconSize={8}
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value, entry) => <span style={{color: 'hsl(var(--muted-foreground))'}}>{entry.payload?.value}</span>}
                payload={[
                  { value: 'Closed won', type: 'square', id: 'ID01', color: '#0D9488' },
                  { value: 'Closed lost', type: 'square', id: 'ID02', color: '#DC2626' }
                ]}
              />
              <Area type="monotone" dataKey="closedWon" stroke="#0D9488" fill="url(#colorWon)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2 }} />
              <Area type="monotone" dataKey="closedLost" stroke="#DC2626" fill="url(#colorLost)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingChart;
