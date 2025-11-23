import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently seeking opportunities for Master's programs in Data Science and AI, as well as research collaborations. Let's connect!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:princy.h.patel123@gmail.com"
                  className="flex items-start gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="font-medium">princy.h.patel123@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919601275873"
                  className="flex items-start gap-4 text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="font-medium">+91 9601275873</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-gray-300">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-medium">Ahmedabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/princyhareshbhai1530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-600 rounded-lg group-hover:bg-gray-500 transition-colors">
                      <Github className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">GitHub</p>
                      <p className="text-sm text-gray-400">View my projects</p>
                    </div>
                  </div>
                  <Send size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/princypatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <p className="text-sm text-gray-400">Connect professionally</p>
                    </div>
                  </div>
                  <Send size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://princyhareshbhai1530.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Send className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">Portfolio Website</p>
                      <p className="text-sm text-gray-400">Visit my site</p>
                    </div>
                  </div>
                  <Send size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-700 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Open to Opportunities</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking Master's programs in Data Science, Machine Learning, and AI-related fields. I'm also interested in research collaborations and challenging internship opportunities.
            </p>
            <a
              href="mailto:princy.h.patel123@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail size={20} />
              Let's Talk
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Princy Patel. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
