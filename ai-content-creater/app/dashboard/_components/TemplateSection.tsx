import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplatesCards from './TemplatesCards'

export interface TEMPLATE{
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?:FORM[]
}
export interface FORM{
  label: string,
  field: string,
  name: string,
  required?:boolean
}

function TemplateSection() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {
        Templates.map((item:TEMPLATE, index:number) => {
          return <TemplatesCards {...item} />
        })
      }
    </div>
  )
}

export default TemplateSection