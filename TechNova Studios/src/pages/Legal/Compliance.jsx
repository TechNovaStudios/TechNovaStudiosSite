"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, FileCheck, Globe } from "lucide-react"

export default function Compliance() {
  const complianceItems = [
    {
      icon: Shield,
      title: "GDPR-Inspired Privacy",
      description: "We follow GDPR principles for data handling, even for international clients outside the EU."
    },
    {
      icon: FileCheck,
      title: "Licensing Compliance",
      description: "All assets used in projects are properly licensed or open-source with appropriate attribution."
    },
    {
      icon: CheckCircle,
      title: "Client Ownership",
      description: "Upon full payment, clients receive complete ownership of their project and all associated assets."
    },
    {
      icon: Globe,
      title: "Ethical Data Practices",
      description: "We follow ethical data collection practices and never engage in unauthorized data gathering."
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
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Compliance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Compliance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            TechNova Studios follows best practices for data handling, licensing, and legal compliance across all projects.
          </motion.p>
        </motion.div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {complianceItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}