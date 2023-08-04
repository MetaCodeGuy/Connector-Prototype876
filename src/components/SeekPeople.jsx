import React from 'react'
import SeekBox from './SeekBox'

function SeekPeople() {
  return (
   <div className="seekpeople">
      <h2 className='sptitle'>Find People To Connect</h2>
      <input type="text" placeholder='Enter Name To Find People...'/>
      <div className="seekedpeople">
      <SeekBox/>
      <SeekBox/>
      <SeekBox/>


       <SeekBox/>
       <SeekBox/>
       <SeekBox/>
       <SeekBox/>
       <SeekBox/>
       
      </div>
   </div>
  )
}

export default SeekPeople