import React, { useState } from 'react'
import SearchSection from './_components/SearchSection';
import TemplateSection from './_components/TemplateSection';

function page() {
 const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      {/* Template List Section */}
      {/* <TemplateSection userSearchInput={userSearchInput} /> */}
    </div>
  );
}

export default page