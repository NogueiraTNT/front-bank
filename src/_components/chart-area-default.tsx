"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/_components/ui/card";

const chartData = [
  { month: "Janeiro", desktop: 9 },
  { month: "Fevereiro", desktop: 12 },
  { month: "Março", desktop: 15 },
  { month: "Abril", desktop: 13 },
  { month: "Maio", desktop: 27 },
  { month: "Junho", desktop: 29 },
  { month: "Julho", desktop: 31 },
  { month: "Agosto", desktop: 45 },
  { month: "Setembro", desktop: 47 },
  { month: "Outubro", desktop: 32 },
  { month: "Novembro", desktop: 50 },
  { month: "Dezembro", desktop: 46 },
];

const abbr = (m: string) =>
  ((
    {
      Janeiro: "Jan",
      Fevereiro: "Fev",
      Março: "Mar",
      Abril: "Abr",
      Maio: "Mai",
      Junho: "Jun",
      Julho: "Jul",
      Agosto: "Ago",
      Setembro: "Set",
      Outubro: "Out",
      Novembro: "Nov",
      Dezembro: "Dez",
    } as const
  )[m] ?? m);

// destaca "Mar"
function XTick(props: any) {
  const { x, y, payload } = props;
  const isHighlight = payload.value === "Março";
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={16}
        textAnchor="middle"
        fontSize={11}
        fontWeight={isHighlight ? 700 : 500}
        fill={isHighlight ? "#fff" : "rgba(255,255,255,0.6)"}
      >
        {abbr(payload.value)}
      </text>
    </g>
  );
}

// “spotlight” em Set
function SpotlightDot(props: any) {
  const { cx, cy, payload } = props;
  if (!cx || !cy || payload.month !== "Setembro") return null;
  return (
    <g>
      <circle cx={cx} cy={cy} r={12} fill="#fff" opacity={0.2} />
      <circle cx={cx} cy={cy} r={7} fill="#fff" opacity={0.95} />
    </g>
  );
}

export function ChartLineDefault() {
  return (
    <Card className="bg-[#0B0B0B]  h-full shadow-none">
      <CardContent className="p-0 h-full">
        {/* clip perfeito no raio */}
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 12, bottom: 18, left: 32 }}
            >
              {/* grid só horizontal, tracejada e bem sutil */}
              <CartesianGrid
                vertical={false}
                stroke="rgba(255,255,255,0.2)"
                strokeDasharray="3 8"
              />

              {/* só os 4 meses visíveis, como no mock */}
              <XAxis
                dataKey="month"
                ticks={chartData.map((d) => d.month)}
                axisLine={false}
                tickLine={false}
                tickMargin={0}
                height={5}
                tick={<XTick />}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                width={5}
                domain={[10, 50]}
                ticks={[10, 20, 30, 40, 50]}
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 10.46 }}
                tickFormatter={(v: number) => `${v}k`}
              />

              {/* linha suave, sem overshoot, ponta arredondada */}
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="#fff"
                strokeWidth={2.2}
                strokeLinecap="round"
                dot={false}
                activeDot={false}
              />
              {/* segunda linha “fantasma” só para renderizar o spotlight */}
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="transparent"
                dot={<SpotlightDot />}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
