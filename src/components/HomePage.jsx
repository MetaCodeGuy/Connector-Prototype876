import React from 'react'
import Connectedpeoples from './Connectedpeoples'
import SeekPeople from './SeekPeople'
import Post from './Post'

function HomePage() {
  return (
    <section className="homepage">
        
      
    <Connectedpeoples />
 
   <main className='feed'>
<Post/>
<Post/>
<Post/>


   </main>
 <SeekPeople/>
    </section>
  )
}

export default HomePage