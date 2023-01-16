import React from 'react'

export default function Listitem(props) {
    let {name, id, index, deleteItem, editItem} = props
  return (
   
      <li className='list-group-item'>
        <div className='d-flex justify-content-between'>
            <div >{name}</div>
            <button onClick={() => editItem(id, index)} className='btn me-2 btn-primary'>Edit</button>
            <button onClick={() => deleteItem(id, index)}  className='btn btn-danger'>Delete</button>
        </div>
      </li>
   
  )
}
