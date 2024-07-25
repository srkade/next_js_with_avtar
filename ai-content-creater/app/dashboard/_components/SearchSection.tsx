import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
      <div className=' p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center'>
          <h2 className='text-3xl text-white font-bold'>Browse All Templates</h2>
          <p>what would like to create today </p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[50%]'>
          <Search className='text-primary' />
          <input type='text' placeholder='Search' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />

        </div>
      </div>
    </div>
  )
}

export default SearchSection