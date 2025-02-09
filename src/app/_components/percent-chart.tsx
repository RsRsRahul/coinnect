"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

interface PercentageChartProps {
  value: number
  title: string
  color: string
}

export function PercentageChart({ value, title, color }: PercentageChartProps) {
  const data = [
    { name: "Complete", value: value },
    { name: "Remaining", value: 100 - value },
  ]
  

  return (
    <div className="p-6 bg-gray-800/50 backdrop-blur rounded-lg shadow-lg">
      <h2 className="text-md text-center mb-4">{title}</h2>
      <div className="h-[100px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={40}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              <Cell fill={color} />
              <Cell fill="#1f2937" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <span className="text-2xl font-bold">{value}%</span>
      </div>
    </div>
  )
}

