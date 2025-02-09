"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What cryptocurrencies does Coinnect support?",
    answer:
      "Coinnect supports a wide range of cryptocurrencies including Bitcoin, Ethereum, Litecoin, and many more. We're constantly adding new currencies to our platform.",
  },
  {
    question: "How does Coinnect protect against price volatility?",
    answer:
      "We offer real-time price conversions and the option to immediately convert crypto payments to fiat currency, protecting your business from market fluctuations.",
  },
  {
    question: "Is Coinnect compliant with financial regulations?",
    answer:
      "Yes, Coinnect is fully compliant with relevant financial regulations and implements strict KYC and AML procedures to ensure the security and legality of all transactions.",
  },
  {
    question: "How quickly can I withdraw my funds?",
    answer:
      "Withdrawals can be processed within 1-2 business days. We also offer instant conversions to stablecoins for added flexibility.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-900 rounded-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-blue-400">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-800 rounded-lg">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection

