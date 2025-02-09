import { PercentageChart } from "../_components/percent-chart"
import { USMap } from "../_components/us-map"
import { OverlappingBarChart } from "../_components/overlapping-bar-chart"
import ParticleBackground from '../_components/particle-background';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ParticleBackground />
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Crypto Adoption Analytics</h1>
          <div className="text-sm text-muted-foreground">State-wise adoption rates and trends</div>
        </div>

        {/* Percentage Charts */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <PercentageChart title="Overall Adoption" value={58} color="#22c55e" />
          <PercentageChart title="Daily Transactions" value={42} color="#eab308" />
          <PercentageChart title="Business Integration" value={35} color="#3b82f6" />
          <PercentageChart title="Growth Rate" value={82} color="#8b5cf6" />
        </div>

        {/* Map and Chart Section */}
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3 backdrop-blur p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">State-wise Crypto Adoption</h2>
            <USMap />
          </div>
          <div className="md:col-span-2 p-4 rounded-lg align-middle">
            <h2 className="text-lg font-semibold mb-4">Adoption Trends</h2>
            <OverlappingBarChart />
          </div>
        </div>
      </div>
    </div>
  )
}

