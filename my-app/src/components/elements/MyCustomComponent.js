import React from 'react'

export default function MyCustomComponent(props) {
    let {ad, soyad, changeState} = props
  return (
 
       <button className='btn btn-warning' onClick={ () =>  changeState('Aysel', 'Abilova')}>
        {`Name: ${ad} Surname: ${soyad}`}
      </button>
      

  )
}


