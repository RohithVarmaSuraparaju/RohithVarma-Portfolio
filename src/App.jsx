import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Github, Linkedin, ExternalLink, Download, Code, Brain, Database, Cloud } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("profile")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [showSkillImages, setShowSkillImages] = useState(false)

  // Array of skill images to cycle through
  const skillImages = [
    { icon: '/python.png', name: 'Python' },
    { icon: '/tensorflow.png', name: 'TensorFlow' },
    { icon: '/pytorch.png', name: 'PyTorch' },
    { icon: '/docker.png', name: 'Docker' },
    { icon: '/aws.png', name: 'AWS' },
    { icon: '/kubernetes.png', name: 'Kubernetes' },
    { icon: '/langchain.png', name: 'LangChain' },
    { icon: '/huggingface.png', name: 'Hugging Face' },
    { icon: '/git.png', name: 'Git' },
    { icon: '/github.png', name: 'GitHub' }
  ]

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["profile", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            // Start skill image animation when about section is visible
            if (section === 'about' && !showSkillImages) {
              setShowSkillImages(true)
            }
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showSkillImages])

  // Skill image cycling effect
  useEffect(() => {
    if (showSkillImages) {
      const interval = setInterval(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skillImages.length)
      }, 1500) // Change image every 1.5 seconds

      return () => clearInterval(interval)
    }
  }, [showSkillImages, skillImages.length])

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: '/python.png' },
        { name: 'C++', icon: '/cpp.png' },
        { name: 'Java', icon: '/java.png' }
      ]
    },
    {
      title: 'Data Analysis & Libraries',
      skills: [
        { name: 'EDA', icon: '/statistical-analysis.jpg' },
        { name: 'Numpy', icon: '/numpy.png' },
        { name: 'Pandas', icon: '/pandas.png' },
        { name: 'Scikit-learn', icon: '/scikit-learn.png' }
      ]
    },
    {
      title: 'Deep Learning Frameworks',
      skills: [
        { name: 'TensorFlow', icon: '/tensorflow.png' },
        { name: 'PyTorch', icon: '/pytorch.png' },
        { name: 'Keras', icon: '/keras.png' }
      ]
    },
    {
      title: 'Natural Language Processing',
      skills: [
        { name: 'NLTK', icon: '/nltk.png' },
        { name: 'spaCy', icon: '/spacy.png' },
        { name: 'GPT', icon: '/gpt.jpg' },
        { name: 'Gensim', icon: '/gensim.jpg' },
        { name: 'Sentiment Analysis', icon: '/sentiment-analysis.png' },
        { name: 'NER', icon: '/ner.png' }
      ]
    },
    {
      title: 'Generative AI Skills',
      skills: [
        { name: 'OpenAI LLMs', icon: '/openai.png' },
        { name: 'Hugging Face LLMs', icon: '/huggingface.png' },
        { name: 'LangChain', icon: '/langchain.png' },
        { name: 'RAG', icon: '/rag.jpg' },
        { name: 'GANs', icon: '/gan.png' },
        { name: 'VAEs', icon: '/vae.jpg' },
        { name: 'Diffusion Models', icon: '/diffusion.jpg' }
      ]
    },
    {
      title: 'Prompt Engineering',
      skills: [
        { name: 'Zero-shot Prompting', icon: '/prompt-engineering.png' },
        { name: 'Few-shot Prompting', icon: '/prompt-engineering.png' },
        { name: 'Chain-of-Thought Prompting', icon: '/prompt-engineering.png' },
        { name: 'Meta Prompting', icon: '/prompt-engineering.png' }
      ]
    },
    {
      title: 'Vector Databases',
      skills: [
        { name: 'Pinecone', icon: '/pinecone.jpg' },
        { name: 'Chroma', icon: '/chroma.png' },
        { name: 'Weaviate', icon: '/weaviate.png' }
      ]
    },
    {
      title: 'Statistical Analysis & Modeling',
      skills: [
        { name: 'Regression', icon: '/regression.png' },
        { name: 'Clustering', icon: '/clustering.jpg' },
        { name: 'Time Series Analysis', icon: '/time-series.jpg' },
        { name: 'A/B Testing', icon: '/ab-testing.png' },
        { name: 'Outlier Detection', icon: '/outlier-detection.png' }
      ]
    },
    {
      title: 'MLOps & Model Deployment',
      skills: [
        { name: 'Docker', icon: '/docker.png' },
        { name: 'Kubernetes', icon: '/kubernetes.png' },
        { name: 'AWS SageMaker', icon: '/sagemaker.png' }
      ]
    },
    {
      title: 'Engineering & Pipelines',
      skills: [
        { name: 'Apache Spark', icon: '/spark.png' },
        { name: 'Kafka', icon: '/kafka.png' },
        { name: 'ETL pipelines', icon: '/etl.png' }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS(S3, EC2, SageMaker)', icon: '/aws.png' },
        { name: 'Azure', icon: '/azure.png' },
        { name: 'GCP', icon: '/gcp.png' }
      ]
    },
    {
      title: 'Database Systems',
      skills: [
        { name: 'SQL', icon: '/sql.png' },
        { name: 'NoSQL(MongoDB, Cassandra, Neo4j)', icon: '/nosql.png' }
      ]
    },
    {
      title: 'Visualization Tools',
      skills: [
        { name: 'Power BI', icon: '/powerbi.jpg' },
        { name: 'Matplotlib', icon: '/matplotlib.png' },
        { name: 'Seaborn', icon: '/seaborn.png' },
        { name: 'Plotly', icon: '/plotly.jpg' }
      ]
    },
    {
      title: 'Version Control Systems',
      skills: [
        { name: 'Git', icon: '/git.png' },
        { name: 'GitHub', icon: '/github.png' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Strategic Thinking', icon: '/strategic-thinking.png' },
        { name: 'Project Management', icon: '/project-management.png' },
        { name: 'Problem Solving', icon: '/problem-solving.png' },
        { name: 'Effective Communication', icon: '/effective-communication.png' },
        { name: 'KPI-Driven Decision Making', icon: '/kpi.png' }
      ]
    }
  ]

  const projects = [
    {
      title: 'Smart Elevator System with Object Detection',
      description: 'Published at the 2024 International Conference on Advances in Data Engineering and Intelligent Computing Systems (ADICS). Designed and implemented an intelligent elevator system utilizing object detection to dynamically prioritize floor selection based on real-time passenger presence.',
      technologies: ['Computer Vision', 'Machine Learning', 'Object Detection', 'Python'],
      link: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Smart Attendance Management System',
      description: 'Developed a web-based attendance tracking system integrating face recognition and geofencing to ensure accurate and location-based attendance logging. Implemented facial recognition using computer vision techniques and integrated GPS-based geofencing for location validation.',
      technologies: ['Face Recognition', 'Geofencing', 'Computer Vision', 'Web Development'],
      link: '#',
      gradient: 'from-green-500 to-teal-600'
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-6 z-50">
        <div className="flex space-x-4">
          {[
            { id: 'profile', label: 'Profile', color: 'green' },
            { id: 'about', label: 'About', color: 'blue' },
            { id: 'contact', label: 'Contact', color: 'orange' }
          ].map(({ id, label, color }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeSection === id
                  ? `border-${color}-400 bg-${color}-400/20 text-${color}-300 shadow-${color}-400/50`
                  : `border-${color}-400 text-${color}-400 hover:bg-${color}-400/10`
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h2 className="text-cyan-400 text-2xl mb-4 font-light animate-fade-in">
              <TypeAnimation
                sequence={[
                  "I\"m a learner",
                  1500,
                  "I\"m a programmer",
                  1500,
                  "I\"m a developer",
                  1500,
                  "I\"m an AI enthusiast",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              My name is
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 glow-text animate-slide-up delay-300">
              Rohith Varma Suraparaju
            </h1>
          </div>
          
          {/* Enhanced Profile Image */}
          <div className="relative w-56 h-56 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-6xl animate-bounce">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-1/2 left-10 animate-float">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="absolute top-1/3 right-10 animate-float delay-1000">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute bottom-1/3 left-20 animate-float delay-2000">
            <Database className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 glow-text">
              AI & Data Science
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8 glow-text">
              developer
            </h3>
            <p className="text-cyan-400 text-xl mb-8">Hello, Welcome to my Portfolio.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="relative border border-cyan-400/50 rounded-2xl p-8 bg-gray-800/50 backdrop-blur-sm">
                <div className="text-5xl mb-6 animate-pulse">🧠</div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Master's student in Data Science and Artificial Intelligence with expertise in Python, C++, and Java. 
                  Skilled in machine learning, deep learning, and NLP using TensorFlow, PyTorch, Keras, NLTK, spaCy, GPT, and sentiment analysis. 
                  Proficient in generative AI tools including OpenAI LLMs, Hugging Face LLMs, LangChain, RAG, GANs, VAEs, and diffusion models. 
                  Passionate about building scalable, ethical, and data-driven AI solutions for impactful business decision-making.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-80 h-80 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  {showSkillImages ? (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img 
                        src={skillImages[currentSkillIndex].icon} 
                        alt={skillImages[currentSkillIndex].name}
                        className="w-24 h-24 object-contain transition-all duration-500 transform skill-image-enter skill-bounce"
                        key={currentSkillIndex}
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                        {skillImages[currentSkillIndex].name}
                      </div>
                    </div>
                  ) : (
                    <span className="text-9xl animate-bounce">🐍</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gray-800/70 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">{category.icon}</div>
                    <h3 className="text-cyan-400 font-semibold text-sm">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors cursor-default flex items-center gap-1"
                      >
                        {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16 glow-text">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02] group">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-cyan-400 text-xl font-bold">Projects</h3>
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg flex items-center gap-2 group-hover:scale-105 transition-all duration-300 font-semibold`}
                  >
                    Explore <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-cyan-400 mb-16 glow-text">Get in Touch</h2>
          
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-56 h-56 bg-gradient-to-r from-red-500 to-red-400 rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <Mail size={100} className="text-white" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: <Mail size={24} />,
                label: 'Email Me',
                action: () => window.open('mailto:suraparajurohithvarma@gmail.com'),
                gradient: 'from-green-500 to-emerald-600',
                hoverColor: 'hover:shadow-green-500/25'
              },
              {
                icon: <Linkedin size={24} />,
                label: 'LinkedIn',
                action: () => window.open('https://www.linkedin.com/in/rohith-varma-suraparaju-9a73531b7', '_blank'),
                gradient: 'from-blue-500 to-blue-600',
                hoverColor: 'hover:shadow-blue-500/25'
              },
              {
                icon: <Github size={24} />,
                label: 'GitHub',
                action: () => window.open('https://github.com/RohithVarmaSuraparaju', '_blank'),
                gradient: 'from-gray-600 to-gray-700',
                hoverColor: 'hover:shadow-gray-500/25'
              }
            ].map((contact, index) => (
              <Button
                key={index}
                className={`bg-gradient-to-r ${contact.gradient} text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-lg ${contact.hoverColor} font-semibold text-lg`}
                onClick={contact.action}
              >
                {contact.icon}
                {contact.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 relative z-10 border-t border-gray-800">
        <p>&copy; 2024 Rohith Varma Suraparaju. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

