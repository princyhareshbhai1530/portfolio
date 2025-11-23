import { Briefcase, Users, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Nexuslink Services India Pvt. Ltd.',
      location: 'Ahmedabad',
      period: 'July 2025 - Present',
      highlights: [
        'Applied machine learning algorithms and statistical modeling to analyze complex business datasets',
        'Built and fine-tuned predictive models with Scikit-learn and TensorFlow',
        'Led a cross-functional team of 10 members in developing full-cycle data-driven projects',
        'Delivered key presentations to management, translating technical findings into actionable strategies',
      ],
    },
    {
      title: 'Freelance Data Analyst',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'Sept 2023 - Present',
      highlights: [
        'Delivered data-driven solutions to clients across retail, education, and technology domains',
        'Built interactive dashboards with Power BI and Tableau to visualize KPIs',
        'Conducted predictive modeling and trend forecasting using Scikit-learn',
        'Managed full-cycle analytics projects from requirements to delivery',
      ],
    },
    {
      title: 'STEM Outreach Volunteer',
      company: 'Indus University',
      location: 'Ahmedabad',
      period: 'Jan 2023 - Present',
      highlights: [
        'Led and mentored a team of 8 volunteers delivering hands-on coding and AI literacy workshops',
        'Empowered 200+ students across local schools with digital literacy and problem-solving skills',
        'Created inclusive, collaborative learning environments connecting academic knowledge with community development',
      ],
    },
  ];

  const leadership = [
    {
      title: 'Event Coordinator',
      organization: 'Indus University',
      description: 'Led and organized multiple college hackathons, coding challenges, and innovation showcases engaging over 300 participants',
    },
    {
      title: 'Mathematics Club Volunteer',
      organization: 'Indus University',
      description: 'Led cross-club collaborations applying mathematical concepts in algorithm design, simulations, and technical problem-solving',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
            <Briefcase className="text-blue-400" size={28} />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
            <Users className="text-purple-400" size={28} />
            Leadership & Volunteering
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-purple-400 text-sm font-medium mb-3">{item.organization}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
