import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection'
import React from 'react'
import FormSection from '../component/FormSection'
import OutputSection from '../component/OutputSection'

interface PROPS{
  params:{
    'template-slug':string
  }
}
function CreateNewContent(props:PROPS) {
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
      {/* FormSecton */}
      <FormSection selectedTemplate={selectedTemplate} />

      

      {/* OutputSection */}
      <OutputSection/>
    </div>
  )
}

export default CreateNewContent