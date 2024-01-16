import React, { useState } from 'react'
import List from './List'
import {data}  from '../components/staticData/Data'
function Home() {
    const [people,setPeople] = useState(data)
  return (
    <main>
        <section className='container'>
            <h3> {people.length} Birthday Today </h3>
            <List  people={people}/>
            <button  onClick={() => setPeople([])}> clear</button>



        </section>


    </main>

    
  )
}

export default Home