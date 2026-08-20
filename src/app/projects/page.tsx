import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 flex flex-col"
              key={id}
            >
              {project.previewImage ? (
                <AspectRatio
                  className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2 mb-4"
                  ratio={16 / 9}
                >
                  <img
                    className="rounded-base w-full h-full object-cover"
                    src={`${project.previewImage}`}
                    alt={project.name}
                  />
                </AspectRatio>
              ) : (
                <div className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2 mb-4 bg-secondary-background flex items-center justify-center min-h-[120px]">
                  <span className="text-muted-foreground text-sm font-medium">No Image Provided</span>
                </div>
              )}

              <div className="text-main-foreground font-base flex-1 flex flex-col">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>
                
                {project.year || project.role ? (
                  <div className="mt-2 text-sm text-gray-700 dark:text-white">
                    {project.role && <span className="font-semibold">{project.role}</span>}
                    {project.role && project.year && <span> &bull; </span>}
                    {project.year && <span>{project.year}</span>}
                  </div>
                ) : null}

                <p className="mt-4 text-sm sm:text-base flex-1">{project.description}</p>
                
                {project.skills && (
                  <div className="mt-4">
                    <h3 className="font-heading text-sm sm:text-base mb-2 font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.split(',').map((skill, index) => (
                        <span key={index} className="bg-secondary-background border-border border px-2 py-1 text-xs rounded-base dark:text-white">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-5">
                  {project.liveLink && (
                    <a
                      className="border-border flex-1 bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className="border-border flex-1 bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
