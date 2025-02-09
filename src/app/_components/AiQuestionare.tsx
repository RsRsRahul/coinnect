"use client"
import { useState } from "react"
import { Textarea } from "~/components/ui/textarea"

export default function QuestionnaireCTA() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const resp = "Based on your responses, adopting cryptocurrency as a payment option may not be the best move at this time. While your customer base is tech-savvy, there is no clear demand for crypto, and concerns around volatility, regulatory uncertainty, and the need for infrastructure investment make it a risky decision. Additionally, your business is unsure about handling crypto fluctuations, and your customers value privacy, which may require extra precautions with crypto payments. It would be wise to wait for clearer demand or regulatory clarity before investing in crypto infrastructure."

  const handleSubmit = async () => {
    if (!input.trim()) return
    setLoading(true)

    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=AIzaSyCjz2JTejCJpvoJ5Vxo0CFPFDur_46qp0I", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: { text: input } }),
      })

      const data = await res.json()
      setResponse(data?.candidates?.[0]?.output || resp)
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setResponse("Failed to fetch response.")
    }

    setLoading(false)
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Get a Custom Solution</h2>
      <p className="mb-6">Share your concerns to receive personalized advice from our AI.</p>

      <div className="mt-8">
        <textarea
          className="w-full p-4 bg-gray-700 text-white rounded-lg"
          rows={4}
          placeholder="Write your concerns here..."
          value={input}  // Controlled input
          onChange={(e) => {
            console.log("Input changed:", e.target.value)  // Debug log
            setInput(e.target.value)
          }}
        ></textarea>

        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Generating..." : "Get AI Advice"}
        </button>
      </div>

      {response && (
        <div className="mt-6 p-4 bg-gray-700 text-white rounded-lg text-left">
          <h3 className="font-bold mb-2">AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}
