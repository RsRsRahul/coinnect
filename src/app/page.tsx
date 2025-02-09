import Image from "next/image"
import ParticleBackground from "./_components/particle-background"
import FloatingNav from "./_components/floating-nav"
import GlowingButton from "./_components/glowing-button"
import FAQSection from "./_components/faq-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <ParticleBackground />
      <FloatingNav />

      <main className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold mb-4 animate-pulse">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Welcome to Coinnect
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Empowering small businesses to thrive in the world of crypto e-commerce
            </p>
            <p className="text-3xl font-semibold text-blue-400 mb-8">Why should you coinnect with crypto?</p>
            <GlowingButton>Get Started</GlowingButton>
          </div>
        </section>

        <section className="py-20 bg-black bg-opacity-30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Revolutionize Your Business
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Lightning-Fast Transactions", icon: "⚡" },
                { title: "Global Reach, Local Feel", icon: "🌍" },
                { title: "Minimal Fees, Maximum Profit", icon: "💰" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{feature.title}</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Join the Crypto Revolution
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
              Connect your business to the future of finance and unlock limitless possibilities
            </p>
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Crypto illustration"
                width={800}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-30 backdrop-blur-md py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2025 Coinnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

