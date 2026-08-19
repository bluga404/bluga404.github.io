import SKILLS from '@/data/skills'

export default function Skills() {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-heading sm:text-3xl">Skills</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILLS.map((item, id) => {
          return (
            <div 
              key={id} 
              className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow flex flex-col"
            >
              <h3 className="mb-4 text-xl font-heading">
                {item.field}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {item.skills.map((skill, skillId) => {
                  return (
                    <div 
                      key={skillId} 
                      className="flex items-center gap-2 rounded-base border-2 border-border bg-main px-3 py-1.5 text-sm font-semibold shadow-shadow transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_0_0_rgba(0,0,0,1)]"
                    >
                      <skill.icon className="h-4 w-4" />
                      <span>{skill.skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
