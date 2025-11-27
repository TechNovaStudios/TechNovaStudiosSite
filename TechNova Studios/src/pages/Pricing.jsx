"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Pricing() {
  const navigate = useNavigate();
  const pricingPlans = [
    {
      title: "Landing Page",
      price: "₹2,000 - ₹4,000",
      description: "Perfect for small businesses and portfolios",
      highlighted: false,
      features: [
        "Single responsive page",
        "Modern design",
        "Contact form integration",
        "SEO optimization",
        "Fast loading speed",
      ],
    },
    {
      title: "Small Website",
      price: "₹5,000 - ₹10,000",
      description: "Ideal for growing businesses",
      highlighted: true,
      badge: "Most Popular",
      features: [
        "Up to 5 pages",
        "Custom design",
        "CMS integration",
        "Mobile responsive",
        "Basic analytics",
        "Contact forms",
      ],
    },
    {
      title: "Full-Stack Project",
      price: "₹12,000 - ₹40,000",
      description: "Complete web applications",
      highlighted: false,
      features: [
        "Custom functionality",
        "User authentication",
        "Database integration",
        "API development",
        "Admin dashboard",
        "Deployment & hosting",
        "3 months support",
      ],
    },
    {
      title: "Maintenance",
      price: "₹1,000 - ₹2,500/mo",
      description: "Ongoing support and updates",
      highlighted: false,
      features: [
        "Regular updates",
        "Bug fixes",
        "Security patches",
        "Performance monitoring",
        "Content updates",
        "Priority support",
      ],
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
            <Check className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Transparent <span className="text-cyan-400">Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Flexible pricing options designed to fit your project needs and budget
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10 ${
                plan.highlighted ? "ring-2 ring-cyan-400/30" : ""
              }`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {plan.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-cyan-400">{plan.price}</p>
                    <p className="text-gray-300 text-base">{plan.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>navigate("/contact")}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/50"
                      : "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 md:mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                Want Any Service ? 
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}