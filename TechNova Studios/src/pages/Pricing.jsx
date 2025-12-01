"use client"

import { motion } from "framer-motion"
import { Check, Calculator, Clock, Layers, Users, Zap, Shield, BarChart } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Pricing() {
  const navigate = useNavigate();
  
  // Pricing factors that affect cost
  const pricingFactors = [
    {
      icon: Layers,
      title: "Project Scope",
      description: "Number of pages, complexity, and features",
      levels: ["Basic", "Standard", "Advanced", "Enterprise"]
    },
    {
      icon: Users,
      title: "Team Size",
      description: "Number of developers and specialists required",
      levels: ["Solo", "Small Team", "Full Team", "Multiple Teams"]
    },
    {
      icon: Clock,
      title: "Timeline",
      description: "Project duration and urgency",
      levels: ["Flexible", "Standard", "Fast Track", "Urgent"]
    },
    {
      icon: Zap,
      title: "Features",
      description: "Custom features and integrations",
      levels: ["Basic", "Standard", "Advanced", "Custom"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security requirements and compliance",
      levels: ["Basic", "Standard", "High", "Enterprise"]
    },
    {
      icon: BarChart,
      title: "Support",
      description: "Maintenance and support period",
      levels: ["None", "3 Months", "6 Months", "1 Year+"]
    }
  ]

  // Project types with flexible pricing
  const projectTypes = [
    {
      title: "Landing Page / Portfolio",
      basePrice: "₹2,000",
      description: "Simple one-page websites or portfolios",
      timeline: "1-2 weeks",
      includes: [
        "Responsive design",
        "Basic SEO",
        "Contact form",
        "Hosting setup",
        "1 month support"
      ],
      idealFor: "Individuals, small businesses, startups"
    },
    {
      title: "Small Business Website",
      basePrice: "₹5,000",
      description: "Multi-page websites with CMS",
      timeline: "2-3 weeks",
      includes: [
        "Up to 5 pages",
        "CMS integration",
        "SEO optimization",
        "Analytics setup",
        "3 months support"
      ],
      idealFor: "Local businesses, service providers"
    },
    {
      title: "E-commerce Store",
      basePrice: "₹15,000",
      description: "Online stores with payment integration",
      timeline: "3-6 weeks",
      includes: [
        "Product management",
        "Payment gateway",
        "Shopping cart",
        "Admin panel",
        "6 months support"
      ],
      idealFor: "Retailers, product sellers"
    },
    {
      title: "Custom Web Application",
      basePrice: "₹25,000",
      description: "Bespoke solutions with custom features",
      timeline: "6-12 weeks",
      includes: [
        "Custom functionality",
        "User authentication",
        "Database design",
        "API development",
        "1 year support"
      ],
      idealFor: "Startups, enterprises, SaaS products"
    }
  ]

  // How we calculate pricing
  const calculationSteps = [
    {
      step: "01",
      title: "Share Your Vision",
      description: "Tell us about your project requirements and goals"
    },
    {
      step: "02",
      title: "Requirement Analysis",
      description: "We analyze scope, features, and complexity"
    },
    {
      step: "03",
      title: "Custom Quote",
      description: "Receive a detailed quote based on your needs"
    },
    {
      step: "04",
      title: "Start Building",
      description: "Begin development with clear milestones"
    }
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
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Flexible Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Custom <span className="text-cyan-400">Pricing</span> That Fits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Every project is unique. Our pricing adapts to your specific requirements, timeline, and budget.
          </motion.p>
        </motion.div>

        {/* Project Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Project <span className="text-cyan-400">Types</span> & Starting Prices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projectTypes.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{project.basePrice}+</div>
                <p className="text-gray-300 text-lg mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-lg">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">Timeline: {project.timeline}</span>
                  </div>
                  <div className="text-lg text-gray-400">
                    <strong className="text-cyan-400">Ideal for:</strong> {project.idealFor}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xl font-medium text-cyan-400">Includes:</p>
                  <ul className="space-y-1">
                    {project.includes.map((item, idx) => (
                      <li key={idx} className="text-lg text-gray-400 flex items-center gap-2">
                        <Check className="w-3 h-3 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center text-gray-400 font-medium">
            * Starting prices may vary based on specific requirements
          </div>
        </div>

        {/* Pricing Factors Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Affects <span className="text-cyan-400">Pricing</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-300 text-lg mb-4">{factor.description}</p>
                
                <div className="space-y-2">
                  <p className="font-medium text-cyan-400">Complexity Levels:</p>
                  <div className="flex flex-wrap gap-2">
                    {factor.levels.map((level, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm rounded-full ${
                          idx === 0 
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : idx === 3
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Calculate Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How We <span className="text-cyan-400">Calculate</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-cyan-400/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                {index < calculationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-cyan-400/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Custom Quote
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed quote within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Request Custom Quote
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-cyan-400/20">
              <p className="text-gray-400 text-sm md:text-base">
                <strong className="text-cyan-400">Transparent Process:</strong> 
                {" "}No hidden costs • Clear milestones • Flexible payment options
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}