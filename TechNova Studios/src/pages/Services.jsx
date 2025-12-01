"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { 
  Code2, 
  Layout, 
  ShoppingCart, 
  Server, 
  Rocket, 
  Search,
  RefreshCw,
  Wrench,
  Calendar,
  TrendingUp,
  Palette,
  Shield
} from "lucide-react"

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies"
    },
    {
      icon: Layout,
      title: "Dashboards",
      description: "Interactive and responsive admin dashboards and data visualization"
    },
    {
      icon: Shield,
      title: "Admin Panels",
      description: "Secure and efficient content management systems"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store development with payment integration"
    },
    {
      icon: Server,
      title: "Node.js APIs",
      description: "RESTful and GraphQL API development and integration"
    },
    {
      icon: Palette,
      title: "Landing Pages",
      description: "High-converting landing pages with stunning designs"
    },
    {
      icon: Search,
      title: "SEO Setup",
      description: "Technical SEO optimization for better search rankings"
    },
    {
      icon: Rocket,
      title: "Deployment Services",
      description: "Professional deployment on Vercel, Netlify, and Render"
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Modernize existing websites with fresh, contemporary designs"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Speed optimization and performance enhancement"
    },
    {
      icon: Calendar,
      title: "Booking Systems",
      description: "Custom appointment and reservation management systems"
    },
    {
      icon: Wrench,
      title: "Maintenance Packages",
      description: "Ongoing support, updates, and bug fixes for your applications"
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
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-cyan-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive web development solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p style={{fontSize:"1.15rem"}} className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
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
              Let's discuss your project requirements and bring your vision to life with our expert services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=> navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                Get Consultation About Project 
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=> navigate("/projects")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}