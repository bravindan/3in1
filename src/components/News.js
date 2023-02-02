import React from 'react'
import {CgSpinnerTwoAlt} from 'react-icons/cg'
function News() {
  return (
    <div className='flex flex-col items-center py-12'>
      <h1 className=' text-6xl text-sky-500 pt-12'>Page Under Construction</h1>
      <div className='pt-12 text-sky-500 items-center'>
      <CgSpinnerTwoAlt className='text-6xl animate-spin '></CgSpinnerTwoAlt> 
      </div>
      <span className=' text-4xl text-sky-500 py-10'>Coming soon...</span>
      </div>
  )
}

export default News