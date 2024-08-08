import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E6D5B8] text-[#4A3933]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#A78B71] text-[#F9F3E5] p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anton Osika</h1>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-[#E6D5B8] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#E6D5B8] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#E6D5B8] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-center z-10">
            <motion.h1 
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Building AGI in Europe
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Prev. CERN, Sana Labs, YC (2x top company)
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a href="https://github.com/AntonOsika" target="_blank" rel="noopener noreferrer" className="text-[#4A3933] hover:text-[#A78B71] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#4A3933] hover:text-[#A78B71] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/antonosika/" target="_blank" rel="noopener noreferrer" className="text-[#4A3933] hover:text-[#A78B71] transition-colors">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          />
        </section>

        <section id="about" className="py-20 bg-[#F9F3E5]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Anton Osika" className="rounded-full w-64 h-64 object-cover mx-auto" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  I'm Anton Osika, an AI researcher and entrepreneur passionate about building AGI in Europe. With a background in physics from CERN and experience at top YC companies, I'm now focused on revolutionizing software development through AI.
                </p>
                <p className="text-lg">
                  My latest project, GPT Engineer, is pushing the boundaries of what's possible in code generation and AI-assisted development. Join me on this exciting journey to reduce barriers in building software and shape the future of AI!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#E6D5B8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-[#F9F3E5] p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold mb-4">GPT Engineer</h3>
                <p className="mb-4">An AI-powered tool that generates entire codebases from a single prompt, revolutionizing the way developers work.</p>
                <a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer" className="text-[#A78B71] hover:text-[#4A3933] transition-colors">Learn More</a>
              </motion.div>
              <motion.div 
                className="bg-[#F9F3E5] p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold mb-4">GPT Engineer App</h3>
                <p className="mb-4">A user-friendly application that allows anyone to build and deploy web apps using plain English instructions.</p>
                <a href="https://gptengineer.app/" target="_blank" rel="noopener noreferrer" className="text-[#A78B71] hover:text-[#4A3933] transition-colors">Visit Website</a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#A78B71] text-[#F9F3E5]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl mb-8">Interested in collaborating or learning more about my work? Feel free to reach out!</p>
            <a 
              href="mailto:contact@antonosika.com" 
              className="bg-[#E6D5B8] text-[#4A3933] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#F9F3E5] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#4A3933] text-[#F9F3E5] py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Anton Osika. All rights reserved.</p>
        </div>
      </footer>

      {/* Goofy, Crazy Animations */}
      <motion.div
        className="fixed bottom-4 right-4 w-16 h-16 bg-[#A78B71] rounded-full flex items-center justify-center cursor-pointer z-50"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.8 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <span className="text-2xl">🚀</span>
      </motion.div>

      <motion.div
        className="fixed top-1/2 left-4 w-12 h-12 bg-[#E6D5B8] rounded-full flex items-center justify-center z-50"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <span className="text-xl">🤖</span>
      </motion.div>

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#A78B71',
          transformOrigin: '0%',
        }}
        animate={{ scaleX: scrollY / (document.body.scrollHeight - window.innerHeight) }}
      />
    </div>
  );
};

export default Index;
