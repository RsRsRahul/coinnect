"use client"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function QuestionnaireCTA() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const genAI = new GoogleGenerativeAI("AIzaSyCjz2JTejCJpvoJ5Vxo0CFPFDur_46qp0I"); 
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const context = "Kepp it simple and short, you are a consultant to a small business owner working for fiserv. User filled out a survey that has questions with indicators if they should use crypto in their business or not Objective: help the small business owner decide whether or not they want to use cryptocurrency as a form of payment. my business serves a tech-savvy customer base aged 25-34, with occasional international customers and an uncertain interest in cryptocurrency. The average transaction value is between $50–$200, and transactions are regular, but not subscription-based. While there are no high processing fees, you're interested in reducing fees and have some importance on transaction speed. Your business does not operate internationally or sell high-ticket items, and privacy is a concern for your customers. You have no crypto experience on the team, although some customers have used crypto before, and you're unsure about regulatory awareness. You accept other digital payments but are uncertain about investing in crypto infrastructure. You're willing to train staff, but you are concerned about crypto volatility and tax implications. No customers have requested crypto, but you would consider adding it if demand increases."

  const resp = "Based on your responses, adopting cryptocurrency as a payment option may not be the best move at this time. While your customer base is tech-savvy, there is no clear demand for crypto, and concerns around volatility, regulatory uncertainty, and the need for infrastructure investment make it a risky decision. Additionally, your business is unsure about handling crypto fluctuations, and your customers value privacy, which may require extra precautions with crypto payments. It would be wise to wait for clearer demand or regulatory clarity before investing in crypto infrastructure."

  const handleSubmit = async () => {
    if (!input.trim()) return
    setLoading(true)

    try {
      const result = await model.generateContent(context+input);

    //   const data = await res.json()
      setResponse(result.response.text() || resp)
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
