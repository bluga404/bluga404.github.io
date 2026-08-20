import Links from '@/components/links'

const EXPERIENCES = [
  {
    role: 'iOS Developer Apprenticeship',
    company: 'Infinite Learning | Nongsa, Batam',
    duration: 'Mar 2026 – Present',
    description: [
      'Developed 5 iOS/iPadOS applications through an iterative product development process, transforming problem ideas into functional MVPs using the Challenge Based Learning framework.',
      'Collaborated in multidisciplinary teams of 5–10 members to conduct ideation, problem-solving, prototyping, and application development.',
      'Used Git for collaborative development, managing and integrating code changes within team-based projects.'
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Institut Teknologi Del | Sitoluama, Laguboti',
    duration: 'Sep 2025 – Feb 2026',
    description: [
      'Supported 100+ students from the 2022 and 2023 cohorts across practical sessions for System Security, Recommender Systems, Data Mining, and Data Visualization, providing technical guidance and troubleshooting using Python, SQL, Kali Linux, Assembly, and C.',
      'Collaborated with lecturers to develop and update practical modules for Recommender Systems, Data Mining, and System Security, including updating outdated library versions and practical exercises.',
      'Provided additional technical guidance to help students understand concepts not fully covered during theory sessions, and assisted lecturers in evaluating practical assignments using predefined assessment criteria.'
    ],
  },
  {
    role: 'LLM Data Analyst',
    company: 'Institut Teknologi Del | Sitoluama, Laguboti',
    duration: 'Jul 2025 – Sep 2025',
    description: [
      'Collected and validated 9,000+ tourism records covering restaurants, attractions, accommodations, and transportation in Toba Regency, sourced from Google Maps, tourism websites, and collaboration with BPODT.',
      'Conducted prompt engineering experiments using Qwen LLM, comparing zero-shot, one-shot, and few-shot prompting approaches to generate itinerary recommendations.',
      'Tested generated itineraries across multiple travel scenarios, varying trip duration and budget combinations to evaluate the relevance and practicality of recommendations.'
    ],
  },
  {
    role: 'Front End Web Developer',
    company: 'PT Riset Perkebunan Nusantara | Sawangan, Bogor',
    duration: 'May 2024 – Jul 2024',
    description: [
      'Designed the database structure (ERD, CDM, PDM) for a Digital Contract Management Web System supporting PKWT contract management and renewal tracking.',
      'Implemented selected front-end components using CodeIgniter and Bootstrap to support contract creation and document management workflows.'
    ],
  },
]

export default function Home() {
  return (
    <div className="font-base">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-heading sm:text-4xl">Walker Valentinus</h1>
          <p className="mt-2 text-lg sm:text-xl">Machine Learning Engineer / Data Enthusiast</p>
          <Links />
        </div>
        <img 
          className="w-36 h-36 sm:w-48 sm:h-48 shrink-0 rounded-base border-2 border-border shadow-shadow object-cover"
          src="/profile.jpg" 
          alt="Walker Valentinus" 
        />
      </div>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Gained my bachelor&apos;s degree in information systems at Institut Teknologi Del. Now i am learning at Apple Developer Academy apprentice with a strong interest in Machine Learning, particularly Deep Learning and Object Detection. Passionate about building technology that connects intelligent systems with real-world user needs. I possess strong teamwork skills and can work well under pressure. I am open to learning from experts in their fields to gain the knowledge they have. With this background, my abilities can develop and grow, helping me become a better individual.
        </p>
      </div>

      <div className="mt-16 mb-16">
        <h2 className="mb-6 text-2xl font-heading sm:text-3xl">Experience</h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, id) => (
            <div key={id} className="rounded-base border-2 border-border bg-secondary-background p-4 sm:p-6 shadow-shadow">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-heading">{exp.role}</h3>
                  <p className="text-base font-semibold">{exp.company}</p>
                </div>
                <span className="w-fit rounded-base border-2 border-border bg-main px-2 py-1 text-sm font-bold shadow-shadow">
                  {exp.duration}
                </span>
              </div>
              <ul className="flex flex-col gap-2 ml-5 list-disc list-outside text-base">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
