import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Earthquake-App',
      description: 'Real-time earthquake tracking dashboard that visualizes seismic activity globally with location-based alerts using Python and APIs.',
      tech: ['Python', 'APIs', 'Data Visualization'],
      github: 'https://github.com/princyhareshbhai1530',
    },
    {
      title: 'Track-My-Fin',
      description: 'Personal finance analyzer that tracks income and expenses with interactive visual reports using Python and Matplotlib.',
      tech: ['Python', 'Matplotlib', 'Data Analysis'],
      github: 'https://github.com/princyhareshbhai1530',
    },
    {
      title: 'Pet-Plant',
      description: 'Full-stack web application providing AI-based plant and pet care tips with an intuitive React and Flask interface.',
      tech: ['React', 'Flask', 'AI', 'Full-Stack'],
      github: 'https://github.com/princyhareshbhai1530',
    },
    {
      title: 'Agro-Care',
      description: 'Smart agriculture assistant that predicts crop yield and suggests fertilizers using machine learning and weather data integration.',
      tech: ['Machine Learning', 'Python', 'Weather API'],
      github: 'https://github.com/princyhareshbhai1530',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A selection of projects demonstrating my skills in data science, machine learning, and full-stack development
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-600 transition-all"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/princyhareshbhai1530"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg font-semibold text-white hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
