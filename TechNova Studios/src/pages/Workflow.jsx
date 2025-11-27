"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { MessageSquare, FileText, Code2, TestTube, Rocket, Headphones, CheckCircle } from "lucide-react"

export default function Workflow() {
  const navigate = useNavigate();
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Requirement Discussion",
      description: "We understand your goals, target audience, and exact feature requirements through a clear conversation. This helps us define the right direction from the start.",
    },
    {
      number: 2,
      icon: FileText,
      title: "Documented Estimation & Proposal",
      description: "You receive a well-structured document containing scope, features, timeline, and detailed pricing — ensuring full transparency before we begin.",
    },
    {
      number: 3,
      icon: Code2,
      title: "Planning & UI/UX Designing",
      description: "We create wireframes, structure the system flow, and design clean, modern interfaces that align with your brand and project goals.",
    },
    {
      number: 4,
      icon: Code2,
      title: "Development Phase",
      description: "Our team builds the frontend, backend, database, and API integrations with clean, scalable, and optimized code.",
    },
    {
      number: 5,
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "We perform functional testing, UI/UX checks, bug fixes, performance reviews, and device responsiveness to ensure a flawless experience.",
    },
    {
      number: 6,
      icon: Rocket,
      title: "Deployment & Launch",
      description: "Your website or application is deployed on a reliable platform (Vercel, Netlify, Render, Railway, etc.) and made live for users.",
    },
    {
      number: 7,
      icon: Headphones,
      title: "Support & Maintenance",
      description: "We offer ongoing support, updates, improvements, and monitoring to keep your product secure, fast, and up-to-date.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6"
          >
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Process</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-cyan-400">Workflow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            A streamlined 7-step process designed to deliver exceptional results on time
          </motion.p>
        </motion.div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 relative">
                  
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center z-20 border-4 border-slate-950 shadow-lg"
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                    
                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 border-2 border-cyan-300 rounded-full"
                    />
                  </motion.div>

                  {/* Step Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1"
                    >
                      {step.title}
                    </motion.h3>
                  </div>

                  {/* Step Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {step.description}
                  </motion.p>

                  {/* Progress Checkmark */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </motion.div>

                  {/* Bottom Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl origin-left"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 md:mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's follow our proven 7-step workflow to bring your vision to life with precision and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                Want to Know More About Us?
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}