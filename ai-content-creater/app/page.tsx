'use client'

import React from 'react'
import SearchSection from "./dashboard/_components/SearchSection";
import TemplateSection from "./dashboard/_components/TemplateSection";
import { useState } from "react";
export default function Home() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return ( 
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      {/* Template List Section */}
      <TemplateSection userSearchInput={userSearchInput} />
    </div>
  )
  
}