"use client"
import { useState } from "react"

export default function QuestionnaireCTA() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!input.trim()) return
    setLoading(true)
    setResponse("")  // Clear previous response

    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=YOUR_API_KEY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: { text: input },
        }),
      })

      // Check if the response is OK (200 status)
      if (!res.ok) {
        console.error("Error: Response not ok", res.status, res.statusText)
        setResponse(`Error: ${res.status} ${res.statusText}`)
        return
      }

      const data = await res.json()
      console.log("API Response Data:", data)

      // Check for the expected response structure
      if (data?.candidates?.[0]?.output) {
        setResponse(data?.candidates[0].output)
      } else {
        setResponse("No valid response received.")
      }
    } catch (error) {
      console.error("Error fetching AI response:", error)
    //   setResponse(`Failed to fetch response: ${error}`)
    } finally {
      setLoading(false)
    }
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
