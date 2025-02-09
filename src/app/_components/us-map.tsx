"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { scaleQuantize, scaleThreshold } from "d3-scale"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

// Updated color scale for the rest of the states
const colorScale = scaleThreshold<number, string>().domain([20, 40, 60, 80, 100]).range([
  "#FF6B6B", // Red
  "#FFA06B", // Orange
  "#FFEF6B", // Yellow
  "#6BFF95", // Light Green
  "#6BC5FF", // Blue
])

// Special colors for highlighted states
const specialColors = {
  CA: "#00008B", // Dark Blue for California
  IL: "#00FF00", // Bright Green for Illinois (Chicago)
  WA: "#FFFF00", // Bright Yellow for Washington (Seattle)
}

// Updated data with crypto adoption percentages
const stateData = [
  { id: "CA", state: "California", adoption: 85 },
  { id: "NY", state: "New York", adoption: 82 },
  { id: "FL", state: "Florida", adoption: 75 },
  { id: "TX", state: "Texas", adoption: 70 },
  { id: "WA", state: "Washington", adoption: 78 },
  { id: "CO", state: "Colorado", adoption: 72 },
  { id: "MA", state: "Massachusetts", adoption: 76 },
  { id: "NV", state: "Nevada", adoption: 68 },
  { id: "AZ", state: "Arizona", adoption: 65 },
  { id: "GA", state: "Georgia", adoption: 62 },
  { id: "IL", state: "Illinois", adoption: 64 },
  { id: "OR", state: "Oregon", adoption: 71 },
  { id: "NC", state: "North Carolina", adoption: 58 },
  { id: "VA", state: "Virginia", adoption: 61 },
  { id: "MI", state: "Michigan", adoption: 55 },
  { id: "OH", state: "Ohio", adoption: 52 },
  { id: "PA", state: "Pennsylvania", adoption: 54 },
  { id: "TN", state: "Tennessee", adoption: 48 },
  { id: "IN", state: "Indiana", adoption: 45 },
  { id: "MO", state: "Missouri", adoption: 42 },
  { id: "WI", state: "Wisconsin", adoption: 44 },
  { id: "MN", state: "Minnesota", adoption: 51 },
  { id: "SC", state: "South Carolina", adoption: 46 },
  { id: "AL", state: "Alabama", adoption: 38 },
  { id: "LA", state: "Louisiana", adoption: 41 },
  { id: "KY", state: "Kentucky", adoption: 35 },
  { id: "AR", state: "Arkansas", adoption: 32 },
  { id: "MS", state: "Mississippi", adoption: 30 },
  { id: "IA", state: "Iowa", adoption: 36 },
  { id: "KS", state: "Kansas", adoption: 38 },
  { id: "NE", state: "Nebraska", adoption: 34 },
  { id: "OK", state: "Oklahoma", adoption: 40 },
  { id: "SD", state: "South Dakota", adoption: 28 },
  { id: "ND", state: "North Dakota", adoption: 26 },
  { id: "MT", state: "Montana", adoption: 25 },
  { id: "ID", state: "Idaho", adoption: 32 },
  { id: "UT", state: "Utah", adoption: 58 },
  { id: "NM", state: "New Mexico", adoption: 45 },
  { id: "WY", state: "Wyoming", adoption: 22 },
  { id: "AK", state: "Alaska", adoption: 35 },
  { id: "HI", state: "Hawaii", adoption: 62 },
  { id: "ME", state: "Maine", adoption: 38 },
  { id: "NH", state: "New Hampshire", adoption: 45 },
  { id: "VT", state: "Vermont", adoption: 42 },
  { id: "RI", state: "Rhode Island", adoption: 56 },
  { id: "CT", state: "Connecticut", adoption: 60 },
  { id: "NJ", state: "New Jersey", adoption: 68 },
  { id: "DE", state: "Delaware", adoption: 52 },
  { id: "MD", state: "Maryland", adoption: 64 },
  { id: "DC", state: "District of Columbia", adoption: 80 },
]

interface TooltipData {
  state: string
  adoption: number
}

export function USMap() {
  const [tooltipContent, setTooltipContent] = useState<TooltipData | null>(null)

  return (
    <div className="relative">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo: { properties: { postal: string } }) => {
              const state = stateData.find((s) => s.id === geo.properties.postal)
              const fillColor =
                specialColors[geo.properties.postal as keyof typeof specialColors] ||
                (state ? colorScale(state.adoption) : "#2C3440")
              return (
                <Geography
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  key={geo.properties.postal}
                  geography={geo}
                  fill={fillColor}
                  stroke="#1f2937"
                  strokeWidth={0.5}
                  onMouseEnter={() => {
                    if (state) {
                      setTooltipContent({
                        state: state.state,
                        adoption: state.adoption,
                      })
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(null)
                  }}
                  style={{
                    hover: {
                      fill: "#475569",
                      outline: "none",
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Updated Legend */}
      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-2">Crypto Adoption Rate</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
            <span className="text-xs">0-20%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFA06B]" />
            <span className="text-xs">21-40%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFEF6B]" />
            <span className="text-xs">41-60%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6BFF95]" />
            <span className="text-xs">61-80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6BC5FF]" />
            <span className="text-xs">81-100%</span>
          </div>
        </div>
      </div>

      {/* Tooltip remains the same */}
      {tooltipContent && (
        <div
          className="absolute bg-background/90 backdrop-blur p-2 rounded-lg shadow-lg text-sm pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: typeof window !== "undefined" ? (window.event as MouseEvent)?.clientX : 0,
            top: typeof window !== "undefined" ? (window.event as MouseEvent)?.clientY - 20 : 0,
          }}
        >
          <p className="font-semibold">{tooltipContent.state}</p>
          <p>Adoption Rate: {tooltipContent.adoption}%</p>
        </div>
      )}
    </div>
  )
}

