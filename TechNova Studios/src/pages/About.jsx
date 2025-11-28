"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Users,
  Target,
  Heart,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Dhruv Shere",
      role: "Team Lead • Full-Stack Developer • System Architect",
      shortDescription:
        "Founder & lead developer driving product vision and technical architecture.",
      fullDescription:
        "Founder & lead developer of TechNova Studios. Skilled in React, Node, and system architecture with a strong focus on clean, scalable engineering. Drives the vision, ideas, and feature innovation across all projects. Known for exploring new technologies, creating complete products independently, and guiding the team in technical decisions. Leads project planning, architecture design, and ensures code quality across all deliverables.",
      skills: [
        "React/Next.js",
        "Node.js",
        "System Architecture",
        "MongoDB",
        "Project Leadership",
        "Cloud Deployment",
      ],
      gradient: "from-cyan-500 to-blue-500",
      socialLinks: [
        {
          icon: Github,
          href: "https://github.com/DHRUV-SHERE",
          label: "GitHub",
        },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/dhruv-shere/",
          label: "LinkedIn",
        },
        { icon: Mail, href: "mailto:sheredhruv@gmail.com", label: "Email" },
        {
          icon: ExternalLink,
          href: "https://portfolio-dhruvshere.vercel.app",
          label: "Portfolio",
        },
      ],
    },
    {
      name: "Jeet Jani",
      role: "UI/UX Designer • Frontend Developer • Backend Developer",
      shortDescription:
        "Creative designer and developer focused on user experience and interface design.",
      fullDescription:
        "Jeet brings creative UI/UX thinking and practical frontend development experience. Skilled in PHP backend, React interfaces, and modern design tools. Currently expanding expertise into data analytics. Has worked on full-stack features in Node + React with collaborative support from the team. Focused on delivering visually polished and user-friendly experiences. Specializes in creating intuitive interfaces and ensuring seamless user interactions.",
      skills: [
        "UI/UX Design",
        "Figma/Adobe XD",
        "React Frontend",
        "PHP Backend",
        "Responsive Design",
        "User Research",
      ],
      gradient: "from-purple-500 to-pink-500",
      socialLinks: [
        {
          icon: Github,
          href: "https://github.com/janijeet17",
          label: "GitHub",
        },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/jani-jeet/",
          label: "LinkedIn",
        },
        { icon: Mail, href: "mailto:janijeet50@gmail.com", label: "Email" },
        {
          icon: ExternalLink,
          href: "https://jeet-portfolio-e5i3.vercel.app/",
          label: "Portfolio",
        },
      ],
    },
    {
      name: "Herin Patel",
      role: "Backend Developer • Database Engineer • System Optimizer",
      shortDescription:
        "Backend specialist focused on database design and system performance.",
      fullDescription:
        "Herin specializes in backend logic, database systems, and structured coding. Experienced in Node.js, SQL/NoSQL, and Java backend development. A reliable executor who follows instructions accurately and ensures stable backend performance. Focused on data integrity, system performance, and secure API development. Ensures robust database architecture and optimal system performance for all applications.",
      skills: [
        "Node.js Backend",
        "SQL/NoSQL Databases",
        "Java Development",
        "API Development",
        "System Security",
        "Performance Tuning",
      ],
      gradient: "from-orange-500 to-red-500",
      socialLinks: [
        { icon: Github, href: "https://github.com/Herin27", label: "GitHub" },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/herin-patel-dev/",
          label: "LinkedIn",
        },
        { icon: Mail, href: "mailto:herin7151@gmail.com", label: "Email" },
        {
          icon: ExternalLink,
          href: "https://herinpatel-dev.vercel.app",
          label: "Portfolio",
        },
      ],
    },
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Target, label: "Success Rate", value: "99%" },
    { icon: Heart, label: "Years Experience", value: "5+" },
  ];

  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "We stay updated with the latest technologies and best practices to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Every line of code is written with attention to detail and commitment to excellence.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "We work closely with our clients to ensure their vision is perfectly translated into reality.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering solutions that drive real business results and user satisfaction.",
    },
  ];

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
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-base font-medium">
              About TechNova
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            About <span className="text-cyan-400">TechNova</span> Studios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
          >
            We are a passionate team of full-stack developers dedicated to
            creating exceptional digital experiences. With expertise in modern
            technologies and a commitment to quality, we bring your ideas to
            life.
          </motion.p>
        </motion.div>

        {/* Stats Section - Centered */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Passionate developers working together to deliver exceptional
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  {/* Member avatar */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Member info */}
                  <div className="text-center flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-base font-medium mb-4 leading-relaxed">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed line-clamp-3">
                      {member.shortDescription}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          +{member.skills.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Click to view more */}
                    <div className="flex justify-center">
                      <span className="text-cyan-400 text-base font-medium hover:text-cyan-300 transition-colors">
                        Click to view details →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${selectedMember.gradient} rounded-2xl flex items-center justify-center`}
                      >
                        <span className="text-white text-2xl font-bold">
                          {selectedMember.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {selectedMember.name}
                        </h3>
                        <p className="text-cyan-400 text-lg mt-1">
                          {selectedMember.role}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Full Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedMember.fullDescription}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-white text-xl font-semibold mb-4">
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-cyan-400/10 text-cyan-400 text-base rounded-full border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-white text-xl font-semibold mb-4">
                      Connect
                    </h4>
                    <div className="flex gap-4">
                      {selectedMember.socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                            aria-label={social.label}
                          >
                            <IconComponent size={20} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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
              Ready to Work With Us?
            </h2>

            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how our team can help bring your
              vision to life with technical excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-lg transition-all duration-300 text-lg"
                onClick={() => navigate("/contact")}
              >
                Start Your Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300 text-lg"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
