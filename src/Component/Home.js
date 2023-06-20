import React from 'react'
import './home.css'
import Segment1 from './Segment/Segment1'
import Segment2 from './Segment/Segment2'
import Segment3 from './Segment/Segment3'

function Home() {
  return (
    <div className='root'>
        <div className='top'>
<Segment1/>
        </div>
        <div className='mid'>
<Segment2/>
        </div>
        <div className='bottom'>
<Segment3/>
        </div>
    </div>
  )
}

export default Home