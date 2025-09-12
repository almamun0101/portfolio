import React, { useState, useEffect, useRef } from "react";
import { Download, Eye, Award, Sparkles, Code, Terminal, Globe, Zap, ChevronRight, Play, Pause, RotateCcw } from "lucide-react";

const Certificates = [
  {
    title: "BRAC University",
    logo: "/braclogo.png",
    text: "Computer Science Fundamentals",
    file: "/certificates/brac-certificate.pdf",
    img: "/Brac.jpg",
    skills: ["Data Structures", "Algorithms", "OOP"],
    year: "2023"
  },
  {
    title: "SoloLearn",
    logo: "/sololearn.png",
    text: "HTML Fundamentals",
    file: "/certificates/html-certificate.pdf",
    img: "/HTML.jpg",
    skills: ["HTML5", "Semantic Web", "Accessibility"],
    year: "2023"
  },
  {
    title: "SoloLearn",
    logo: "/sololearn.png",
    text: "CSS Fundamentals",
    file: "/certificates/css-certificate.pdf",
    img: "/CSS.jpg",
    skills: ["CSS3", "Flexbox", "Grid", "Animations"],
    year: "2023"
  },
];

const techStack = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript", "Tailwind CSS"];
const skills = ["Frontend", "Backend", "Full-Stack", "UI/UX", "API Design", "Database"];

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSkill, setActiveSkill] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  const terminalLines = [
    "$ whoami",
    "> Al Mamun Khan - Web Developer",
    "$ ls skills/",
    "> React.js MongoDB Express.js Node.js",
    "$ cat passion.txt",
    "> Building amazing web experiences ✨",
    "$ status",
    "> Ready to create something awesome! 🚀"
  ];

  // Particle system
  useEffect(() => {
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (currentLine < terminalLines.length) {
      setIsTyping(true);
      let charIndex = 0;
      const currentText = terminalLines[currentLine];
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setTerminalText(prev => prev + currentText[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setTerminalText(prev => prev + '\n');
            setCurrentLine(prev => prev + 1);
          }, 500);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  // Skills rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a ripple effect
    console.log("Downloading resume with style...");
  };

  const handleViewCertificate = (certificate) => {
    console.log("Viewing certificate:", certificate.title);
  };

  const resetTerminal = () => {
    setTerminalText("");
    setCurrentLine(0);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden min-h-screen">
      {/* Dynamic Background with Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-pulse"></div>
        
        {/* Interactive particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              animation: `float 6s ease-in-out infinite ${particle.id * 0.1}s`
            }}
          />
        ))}

        {/* Mouse follower effect */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Hero Section with Terminal */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Left Side - Profile */}
          <div className="text-center lg:text-left">
            {/* Animated Profile Image */}
            <div className="relative inline-block group mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 group-hover:opacity-60 animate-spin-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 animate-spin-reverse"></div>
              
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-cyan-500 overflow-hidden">
                <img
                  src="/mamun.jpg"
                  alt="Al Mamun Khan"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 border-4 border-white rounded-full animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Al Mamun Khan
            </h1>
       

         
            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadResume}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Download size={20} className="transform group-hover:rotate-12 transition-transform duration-300" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button 
                onClick={() => setShowCode(!showCode)}
                className="group relative overflow-hidden border-2 border-cyan-500 text-cyan-400 hover:text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Code size={20} className="transform group-hover:rotate-12 transition-transform duration-300" />
                  View Code
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Terminal */}
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-800/90 px-4 py-3 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400 ml-4 flex items-center gap-2">
                  <Terminal size={16} />
                  terminal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetTerminal}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm bg-black/50 h-80 overflow-y-auto">
              <div className="text-green-400">
                <pre className="whitespace-pre-wrap">
                  {terminalText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Certificates Section */}
      <div className={`relative z-10 container mx-auto px-4 py-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my learning journey and professional development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Certificates.map((certificate, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transform hover:-translate-y-6 hover:rotate-2 transition-all duration-500 cursor-pointer`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={certificate.logo} 
                        alt={`${certificate.title} logo`}
                        className="w-full h-full object-contain filter invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-bold text-lg">{certificate.title}</h3>
                      <p className="text-gray-400 text-sm">{certificate.year}</p>
                    </div>
                  </div>
                  <Award className={`text-yellow-500 transform transition-all duration-500 ${hoveredCard === index ? 'rotate-12 scale-125' : ''}`} size={32} />
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.img} 
                  alt={`${certificate.text} certificate`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating badge */}
                {hoveredCard === index && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                    Verified ✓
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {certificate.text}
                </h4>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills?.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleViewCertificate(certificate)}
                  className="group/btn w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Eye size={16} className="transform group-hover/btn:rotate-12 transition-transform duration-300" />
                  View Certificate
                  <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Preview Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-cyan-400 font-bold flex items-center gap-2">
                <Code size={20} />
                Component Preview
              </h3>
              <button 
                onClick={() => setShowCode(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-96">
              <pre className="text-green-400 font-mono text-sm">
{`const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Interactive animations and effects
  useEffect(() => {
    setIsVisible(true);
    // Initialize particle system
    // Setup mouse tracking
    // Terminal typing animation
  }, []);

  return (
    <div className="interactive-developer-profile">
      {/* Dynamic background with particles */}
      {/* Animated profile section */}
      {/* Terminal interface */}
      {/* Enhanced certificates showcase */}
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Profile;