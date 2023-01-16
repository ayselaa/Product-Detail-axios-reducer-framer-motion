
import List from '../elements/List'
import Listinput from '../elements/Listinput'
import React, { useState} from 'react'



export default function Home(props) {

  
  const [list, setList] = useState([])

  
  return (
    <div>
     
      <Listinput list={list} 
                 setList={setList}
                 />
      <List list={list} 
            setList={setList}
            />
    </div>
  )
}
