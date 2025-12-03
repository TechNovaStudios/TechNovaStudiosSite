import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Code,
  CheckCircle,
  Award,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Heart,
  Headphones,
  Star,
  Quote,
  MessageCircle,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // Calculate dynamic height based on navbar
  const calculateHeroHeight = () => {
    if (typeof window === "undefined") return "100vh";

    // You can adjust this value based on your actual navbar height
    const navbarHeight = 80; // Approximate navbar height in pixels
    return `calc(100vh - ${navbarHeight}px)`;
  };

  // Stats data
  const stats = [
    {
      icon: Code,
      value: "10+",
      label: "Projects",
      description: "Successfully completed",
    },
    {
      icon: CheckCircle,
      value: "99%",
      label: "Success Rate",
      description: "Client satisfaction",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years",
      description: "Team expertise",
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and quick turnaround",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Industry-standard security practices",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines always",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business",
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Attention to detail in every line",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support for peace of mind",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "PashuMitra",
      description: "Animal welfare management platform",
      image:
        "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      status: "completed",
    },
    {
      title: "AgroSense",
      description: "Agricultural IoT for smart farming",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
      tags: ["React", "Python", "PostgreSQL"],
      status: "completed",
    },
    {
      title: "Portfolio Sites",
      description: "Professional portfolio websites",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Framer"],
      status: "completed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-slate-950"
        style={{ minHeight: calculateHeroHeight() }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-lg sm:text-xl text-cyan-400">TechNova Studios</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white"
            >
              <span className="block">We Build</span>
              <span className="text-cyan-400 block mt-2">Future-Ready</span>
              <span className="block mt-2">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
            >
              A premium full-stack development team crafting innovative web
              solutions with cutting-edge technology and exceptional attention
              to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
                }}
                onClick={() => navigate("/contact")}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-lg sm:text-xl w-full sm:w-auto justify-center"
              >
                Hire Us
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                }}
                onClick={() => navigate("/projects")}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto justify-center"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 relative bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 sm:p-8 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700/50 backdrop-blur-sm group hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:flex-col">
                  {/* Icon on left for mobile, centered for desktop */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>

                  <div className="sm:mt-4">
                    {/* Value - Large on mobile */}
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </h3>

                    {/* Label and description in column for mobile */}
                    <div className="flex flex-col">
                      <p className="font-semibold text-white text-lg sm:text-xl mb-1">
                        {stat.label}
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Why Choose <span className="text-cyan-400">TechNova Studios</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver
              exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-cyan-400/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-20 relative bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our
              expertise
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer hover:border-cyan-400/30 h-full"
                >
                  <div className="aspect-video bg-slate-700/50 flex items-center justify-center border-b border-slate-600/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm sm:text-base rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 mx-auto text-lg sm:text-xl"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-cyan-400/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Start Your{" "}
              <span className="text-cyan-400">Next Project?</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 sm:mb-10">
              Let&apos;s collaborate to bring your vision to life with
              cutting-edge technology and creative excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-lg sm:text-xl w-full sm:w-auto justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="https://wa.me/9316846548"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 text-lg sm:text-xl w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Chat on WhatsApp
              </motion.a>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-lg sm:text-xl text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Flexible Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
