import { Code, Database, Brain, TrendingUp, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      color: 'blue',
      skills: [
        'Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)',
        'C++, R, SQL',
        'JavaScript, HTML/CSS',
        'Bash Scripting',
      ],
    },
    {
      title: 'Data Science & Analytics',
      icon: TrendingUp,
      color: 'green',
      skills: [
        'Data Cleaning & EDA',
        'Statistical Modeling',
        'Machine Learning (Regression, Classification, Clustering)',
        'Big Data Tools (Spark, Hadoop)',
        'Cloud Platforms (AWS, Google BigQuery, Azure)',
        'Data Visualization (Power BI, Tableau)',
      ],
    },
    {
      title: 'Artificial Intelligence & ML',
      icon: Brain,
      color: 'purple',
      skills: [
        'Deep Learning (CNN, RNN, Transformers)',
        'Natural Language Processing (BERT, spaCy, NLTK)',
        'Computer Vision (OpenCV, YOLO)',
        'Model Evaluation & Deployment (Flask, Streamlit, Docker, FastAPI)',
      ],
    },
    {
      title: 'Mathematics & Computation',
      icon: BookOpen,
      color: 'pink',
      skills: [
        'Linear Algebra & Probability',
        'Statistics & Optimization',
        'Differential Equations',
        'Numerical Methods',
        'Algorithm Design',
      ],
    },
    {
      title: 'Software Development',
      icon: Wrench,
      color: 'orange',
      skills: [
        'Git/GitHub & Version Control',
        'Object-Oriented Programming',
        'REST APIs',
        'Testing (Pytest)',
        'Agile Development',
      ],
    },
    {
      title: 'Research & Visualization',
      icon: Database,
      color: 'cyan',
      skills: [
        'MATLAB & SciPy',
        'LaTeX & Overleaf',
        'Plotly & Advanced Visualization',
        'Technical Report Writing',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/50', text: 'text-blue-400', iconBg: 'bg-blue-500/20' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/50', text: 'text-green-400', iconBg: 'bg-green-500/20' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/50', text: 'text-purple-400', iconBg: 'bg-purple-500/20' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/50', text: 'text-pink-400', iconBg: 'bg-pink-500/20' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/50', text: 'text-orange-400', iconBg: 'bg-orange-500/20' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/50', text: 'text-cyan-400', iconBg: 'bg-cyan-500/20' },
  };

  const certifications = [
    'AWS Academy Machine Learning Foundations (2025)',
    'Machine Learning with Python - freeCodeCamp (2025)',
    'Data Visualization with D3.js - freeCodeCamp (2025)',
    'Neuromarketing using AI (2024)',
    'AWS DevOps Essentials (2023)',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning data science, AI, and software engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:${colors.border} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${colors.iconBg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className={`text-lg font-semibold ${colors.text}`}>{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className={`${colors.text} mt-1`}>•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700"
              >
                <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0">
                  <span className="text-green-400 text-xl">✓</span>
                </div>
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
