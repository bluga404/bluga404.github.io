'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import CERTIFICATIONS from '@/data/gallery'

function YearGroup({ group }: { group: typeof CERTIFICATIONS[0] }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      {/* Year Heading */}
      <div 
        className="mb-8 flex items-center gap-4 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="flex items-center gap-2 text-2xl font-heading sm:text-4xl bg-main px-4 py-2 border-2 border-border shadow-shadow rounded-base w-fit transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0_0_0_0_rgba(0,0,0,1)] select-none">
          {group.year}
          <ChevronDown className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </h2>
        <div className="h-1 flex-grow bg-border rounded-full opacity-20 transition-opacity group-hover:opacity-40"></div>
      </div>
      
      {/* Cards Grid */}
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {group.items.map((cert, certId) => (
            <div key={certId} className="flex flex-col rounded-base border-2 border-border bg-secondary-background shadow-shadow overflow-hidden">
              {cert.image && cert.image !== '/placeholder.jpg' && cert.image !== '' ? (
                <div className="border-b-2 border-border aspect-[16/9]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading leading-tight mb-2">{cert.title}</h3>
                <p className="font-bold text-base mb-1">{cert.issuer}</p>
                <p className="text-sm opacity-80 font-semibold mb-6">{cert.date} • ID: {cert.credentialId}</p>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-fit rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-bold shadow-shadow transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_0_0_rgba(0,0,0,1)]"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Gallery</h1>
      
      <div className="mb-12 text-base sm:text-lg">
        <p>A showcase of my licenses and certifications</p>
      </div>

      <div className="flex flex-col gap-16">
        {CERTIFICATIONS.map((group, id) => (
          <YearGroup key={id} group={group} />
        ))}
      </div>
    </div>
  )
}
