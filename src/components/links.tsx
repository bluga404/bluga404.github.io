import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiWhatsapp,
      href: 'https://wa.me/62895392415714',
    },
    {
      icon: SiGmail,
      href: 'mailto:walkervalentinussimanjuntak@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/bluga404',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/walkersimanjuntak',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@walkervalentinussimanjuntak',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
