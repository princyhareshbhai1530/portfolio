import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Princy Patel
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
            Data Science & AI Enthusiast
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Computer Science Engineering Student | Aspiring Researcher in Machine Learning & AI
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:princy.h.patel123@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg font-semibold text-white hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href="https://github.com/princyhareshbhai1530"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/princy-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:princy.h.patel123@gmail.com"
              className="p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
}
