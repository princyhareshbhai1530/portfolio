import { FileText, ExternalLink, Award } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Research & Publications
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Contributing to the advancement of AI and machine learning through published research
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <FileText className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Prompt Effectiveness Evaluator (PEE)
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Award size={16} className="text-green-400" />
                    Published Research Project
                  </span>
                  <span>•</span>
                  <span>IJRASET Journal (Vol. 13, Issue XI, 2025)</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
              <p className="text-gray-300 leading-relaxed">
                Developed a comprehensive framework for evaluating prompt strategies in Large Language Models using quantitative metrics including ROUGE-L, BLEU, and BERTScore. The system was implemented and deployed using Python, Streamlit, and NLP APIs, providing practical tools for applied AI benchmarking and prompt engineering optimization.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Contributions</h4>
              <ul className="space-y-2">
                {[
                  'Designed quantitative evaluation metrics for LLM prompt effectiveness',
                  'Implemented automated benchmarking system using Python and NLP libraries',
                  'Deployed interactive web application for real-time prompt analysis',
                  'Published findings in peer-reviewed academic journal',
                ].map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-sm">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Streamlit', 'NLP APIs', 'ROUGE-L', 'BLEU', 'BERTScore', 'Machine Learning'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
              <a
                href="https://github.com/princyhareshbhai1530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-all duration-200"
              >
                <FileText size={18} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/princyhareshbhai1530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg text-blue-400 text-sm font-medium transition-all duration-200"
              >
                <Award size={18} />
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <Award className="text-green-400" size={24} />
              Research Interests
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2 text-sm">Areas of Focus:</h4>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Large Language Models & Prompt Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Healthcare AI Applications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2 text-sm">Future Directions:</h4>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Edge AI & Embedded Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Data Pipeline Automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
