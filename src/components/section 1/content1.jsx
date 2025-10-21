import React from 'react'
import Leftcontent1 from './leftcontent1'
import Rightcontent1 from './rightcontent1'

const content1 = () => {
  return (
    <div className='flex h-[85vh] mt-[25px] gap-[25px]'>
        <Leftcontent1 />
        <Rightcontent1 />
    </div>
  )
}

export default content1