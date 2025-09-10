import React, { useState, useEffect } from "react";
import { Download, Eye, Award, Sparkles } from "lucide-react";

const Certificates = [
  {
    title: "BRAC University",
    logo: "/braclogo.png",
    text: "Computer Science Fundamentals",
    file: "/certificates/brac-certificate.pdf",
    img: "/Brac.jpg",
  },
  {
    title: "SoloLearn",
    logo: "/sololearn.png",
    text: "HTML Fundamentals",
    file: "/certificates/html-certificate.pdf",
    img: "/HTML.jpg",
  },
  {
    title: "SoloLearn",
    logo: "/sololearn.png",
    text: "CSS Fundamentals",
    file: "/certificates/css-certificate.pdf",
    img: "/CSS.jpg",
  },
];

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    console.log("Downloading resume...");
  };

  const handleViewCertificate = (certificate) => {
    console.log("Viewing certificate:", certificate.title);
  };

  return (
    <div className="w-full bg-black text-white py-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full animate-pulse delay-1000"></div>
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="text-yellow-500/20" size={12} />
          </div>
        ))}
      </div>

      {/* Resume Section */}
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-yellow-500 text-center text-4xl italic font-bold mb-10 animate-pulse">
          Check Out My Resume
        </h2>
        
        <div className="border border-gray-600 rounded-2xl bg-gray-900 py-10 px-10 w-full max-w-4xl mx-auto flex flex-col justify-center items-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
          {/* Profile Image with Complex Animation */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-30 group-hover:opacity-50 animate-ping"></div>
            <div className="relative w-48 lg:w-80 rounded-full border-4 border-yellow-500 overflow-hidden">
              <img
                src="/mamun.jpg"
                alt="Al Mamun Khan"
                className="w-full h-full rounded-full object-cover transform hover:scale-110 transition-transform duration-700 hover:rotate-6"
              />
            </div>
            {/* Rotating ring effect */}
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-500 rounded-full animate-spin opacity-50"></div>
          </div>
          
          <h1 className={`mt-6 text-3xl lg:text-5xl text-yellow-500 font-bold text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Al Mamun Khan
          </h1>
          
          <p className={`mt-2 text-white/60 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Web Designer || Web Developer || MERN Dev
          </p>
          
          <button 
            onClick={handleDownloadResume}
            className={`group relative flex py-3 px-6 mt-6 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 transition-all duration-500 hover:text-black items-center gap-3 border-2 rounded-xl border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-110 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-700`}
          >
            <span className="absolute inset-0 bg-yellow-500 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 font-semibold">Resume</span>
            <Download size={20} className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Certificates Section */}
      <div className={`my-20 px-5 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-16 animate-pulse">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
          {Certificates.map((certificate, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 text-black shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{
                animationDelay: `${1200 + index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header with Bounce Animation */}
              <div className="relative flex justify-between items-center mb-4">
                <div className="bg-black rounded-full px-4 py-2 flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-white p-1 animate-spin group-hover:animate-pulse">
                    <img 
                      src={certificate.logo} 
                      alt={`${certificate.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-yellow-500 text-sm font-bold">
                    {certificate.title}
                  </h3>
                </div>
                <div className={`text-yellow-600 transform transition-all duration-500 ${hoveredCard === index ? 'rotate-360 scale-125' : 'rotate-0 scale-100'}`}>
                  <Award size={32} />
                </div>
              </div>

              {/* Certificate Image with Zoom Effect */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={certificate.img} 
                  alt={`${certificate.text} certificate`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </div>

              {/* Certificate Title with Typewriter Effect */}
              <h4 className="text-xl font-bold mb-4 text-center relative overflow-hidden">
                <span className={`inline-block transform transition-all duration-500 ${hoveredCard === index ? 'translate-y-0' : 'translate-y-0'}`}>
                  {certificate.text}
                </span>
              </h4>

              {/* Animated View Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleViewCertificate(certificate)}
                  className="relative overflow-hidden bg-gray-200 hover:bg-yellow-500 hover:text-white text-black flex items-center justify-center gap-3 border-2 border-gray-400 hover:border-yellow-500 rounded-full px-6 py-2 transition-all duration-500 font-medium transform hover:scale-105 hover:-translate-y-1 group/btn"
                >
                  {/* Button background animation */}
                  <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                  
                  <Eye size={16} className="relative z-10 transform group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">View Certificate</span>
                  
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/btn:animate-ping"></span>
                </button>
              </div>

              {/* Floating badge animation on hover */}
              {hoveredCard === index && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                  ✨ Certified
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .rotate-360 {
          animation: rotate-360 0.5s ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Profile;