"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Calendar, Users, Zap } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "PashuMitra",
      description: "Animal welfare management platform with advanced tracking and reporting features",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/ProjectSGH/PashuMitra",
      liveLink: null,
      status: "completed",
      image: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&auto=format&fit=crop",
      duration: "5.5 months",
      teamSize: "3 developers"
    },
    {
      id: 2,
      title: "AgroSense",
      description: "Agricultural IoT solution for smart farming and crop monitoring",
      technologies: ["React", "Python", "PostgreSQL"],
      githubLink: "https://github.com/AgroSence/AgroSence",
      liveLink: "https://agrosence.vercel.app/",
      status: "completed",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
      duration: "6 months",
      teamSize: "3 developers"
    },
    {
      id: 3,
      title: "ConnectVista",
      description: "Social networking platform with real-time messaging and content sharing",
      technologies: ["React", "Firebase", "Tailwind"],
      githubLink: "https://github.com/ProjectConnectVista2025/ConnectVista",
      liveLink: null,
      status: "in-progress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      duration: "4.5 months",
      teamSize: "1 developers"
    },
    {
      id: 4,
      title: "Aryapath",
      description: "Educational platform with interactive learning modules and progress tracking",
      technologies: ["React", "Node.js", "MySQL"],
      githubLink: "https://github.com/Aryapath/Aryapath",
      liveLink: null,
      status: "in-progress",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
      duration: "3 months",
      teamSize: "1 developers"
    },
    {
      id: 5,
      title: "Rakt Setu",
      description: "Blood donation management system connecting donors with recipients",
      technologies: ["React", "Express", "MongoDB"],
      githubLink: null,
      liveLink: null,
      status: "planned",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&auto=format&fit=crop",
      duration: "4 months",
      teamSize: "2 developers"
    },
    {
      id: 6,
      title: "Portfolio Sites",
      description: "Professional portfolio websites for individuals and businesses",
      technologies: ["React", "Tailwind", "Framer Motion"],
      githubLink: "https://github.com/DHRUV-SHERE/Portfolio",
      liveLink: "https://portfolio-dhruvshere.vercel.app/",
      status: "completed",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
      duration: "5 Days",
      teamSize: "1 developer"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600 text-white border-green-500/30';
      case 'in-progress':
        return 'bg-red-500 text-white border-yellow-500/30';
      case 'planned':
        return 'bg-blue-600 text-white border-blue-500/30';
      default:  
        return 'bg-gray-500 text-white border-gray-500/30';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Coming Soon';
      default:
        return 'Unknown';
    }
  };

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
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing our expertise through successful client projects and innovative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(project.status)} backdrop-blur-sm`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 border border-slate-600"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-slate-950 hover:bg-cyan-300 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-xl leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              Let's collaborate to bring your innovative ideas to life with cutting-edge technology and exceptional craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;