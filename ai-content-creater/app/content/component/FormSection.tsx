import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import Image from 'next/image';
import React from 'react'
interface PROPS{
    selectedTemplate?:TEMPLATE;
}
function FormSection({selectedTemplate}:PROPS) {
  return (
    <div>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
    </div>
  )
}

export default FormSection