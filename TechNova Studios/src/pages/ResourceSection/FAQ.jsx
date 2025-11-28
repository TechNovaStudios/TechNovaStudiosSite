"use client"

import { motion } from "framer-motion"
import { HelpCircle, Clock, RefreshCw, Rocket, Shield } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      icon: Clock,
      question: "How long does a project take?",
      answer: "Most projects take between 7–30 days depending on complexity and requirements."
    },
    {
      icon: RefreshCw,
      question: "Do you offer revisions?",
      answer: "Yes — revision rounds depend on the selected plan. Additional revisions available."
    },
    {
      icon: Rocket,
      question: "Will you deploy the website?",
      answer: "Absolutely. We deploy on Vercel, Netlify, Render, Railway, or your preferred platform."
    },
    {
      icon: Shield,
      question: "Do you offer maintenance?",
      answer: "Yes — starting from ₹1000/month for ongoing support and updates."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">FAQ</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Find quick answers to common questions about our services and processes.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}