import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Whatsaap_Chat_Analysis',
    description: 'A data analysis tool that processes exported WhatsApp chat logs to generate insights, visualizations, and statistics. Identifies active members, common words, and timeline patterns.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
    github: 'https://github.com/itsharshit7216/Whatsapp_Chat_Analysis',
    demo: 'https://whatsappchatanalysis-aynr5zticmyg4zkh39mkrf.streamlit.app/',
  },
  {
    title: 'code_explainer',
    description: 'An AI-powered application that leverages the Gemini API to provide detailed, nuanced explanations of complex code snippets, including concepts like recursion and algorithmic complexity.',
    tech: ['Python', 'Gemini API', 'React', 'Tailwind CSS'],
    github: 'https://github.com/itsharshit7216/code-explainer',
    demo: 'https://code-explainer-weom.vercel.app/',
  },
  {
    title: 'book_recommender system',
    description: 'A Machine Learning based book recommendation system that uses collaborative filtering to suggest books based on user preferences, clustering, and ratings.',
    tech: ['Python', 'Machine Learning', 'Flask', 'Pandas'],
    github: 'https://github.com/campusx-official/book-recommender-system',
    demo: '#',
  },
  {
    title: 'currency_convertor_chatbot',
    description: 'An interactive chatbot integration combining Dialogflow automated NLP conversational flows with the Telegram messaging platform.',
    tech: ['Python', 'Dialogflow API', 'Node.js', 'NLP'],
    github: 'https://github.com/campusx-official/dialogflow-telegram-chatbot',
    demo: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A selection of my recent work in Software Development and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-8 border border-slate-200 bg-white transition-all duration-300 group overflow-hidden
                         hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-200/60 hover:border-primary hover:bg-white"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-primary bg-blue-50 border border-blue-200 rounded-full
                               group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
