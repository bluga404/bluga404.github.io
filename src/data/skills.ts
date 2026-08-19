import {
  type IconType,
  SiPython,
  SiSwift,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMicrosoftsqlserver,
  SiTensorflow,
  SiPytorch,
  SiDjango,
  SiLaravel,
  SiGit,
  SiGithub,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] = [
  {
    field: 'Programming',
    skills: [
      { skill: 'Python', icon: SiPython },
      { skill: 'Swift', icon: SiSwift },
      { skill: 'JavaScript', icon: SiJavascript },
      { skill: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    field: 'Databases',
    skills: [
      { skill: 'MySQL', icon: SiMysql },
      { skill: 'MSSQL Server', icon: SiMicrosoftsqlserver },
    ],
  },
  {
    field: 'Frameworks',
    skills: [
      { skill: 'TensorFlow', icon: SiTensorflow },
      { skill: 'PyTorch', icon: SiPytorch },
      { skill: 'Django', icon: SiDjango },
      { skill: 'Laravel', icon: SiLaravel },
    ],
  },
  {
    field: 'Tools',
    skills: [
      { skill: 'Git', icon: SiGit },
      { skill: 'GitHub', icon: SiGithub },
    ],
  },
]

export default SKILLS
