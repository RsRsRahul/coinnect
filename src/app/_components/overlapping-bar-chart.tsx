"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", metropolitan: 65, rural: 35 },
  { month: "Feb", metropolitan: 68, rural: 32 },
  { month: "Mar", metropolitan: 72, rural: 28 },
  { month: "Apr", metropolitan: 75, rural: 25 },
  { month: "May", metropolitan: 78, rural: 22 },
  { month: "Jun", metropolitan: 82, rural: 18 },
]

export function OverlappingBarChart() {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "none",
              borderRadius: "8px",
              padding: "8px",
            }}
          />
          <Legend />
          <Bar name="Metropolitan" dataKey="metropolitan" fill="rgb(94, 108, 132)" radius={[0, 4, 4, 0]} />
          <Bar name="Rural" dataKey="rural" fill="rgb(54, 60, 82)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

