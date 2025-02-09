import { PercentageChart } from "../_components/percent-chart"
import { USMap } from "../_components/us-map"
import { OverlappingBarChart } from "../_components/overlapping-bar-chart"
import ParticleBackground from '../_components/particle-background';
import AiQuestionare from "../_components/AiQuestionare";

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
          <PercentageChart title="Similar businnesses that started using Crypto" value={58} color="#22c55e" />
          <PercentageChart title="User demographics ready to use cyrpto" value={42} color="#eab308" />
          <PercentageChart title="International Transactions" value={35} color="#3b82f6" />
          <PercentageChart title="Increased profit for similar businesses after including crypto" value={24} color="#8b5cf6" />
        </div>

        {/* Map and Chart Section */}
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3 backdrop-blur p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">State-wise Crypto Adoption</h2>
            <USMap />
          </div>
          <div className="md:col-span-2 p-4 rounded-lg align-middle">
            <h2 className="text-lg font-semibold mb-4">Possible Increase in Customer base</h2>
            <OverlappingBarChart />
          </div>
          <div className="md:col-span-5 p-4 rounded-lg">
            <AiQuestionare />
          </div>
        </div>
      </div>
    </div>
  )
}

