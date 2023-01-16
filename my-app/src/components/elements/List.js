import React from 'react';
import Listitem from './Listitem'
export default function List(props) {

    const { list, setList } = props

    const deleteItem = (id, index) => {
        let arr = [...list]
        arr.splice(index, 1)
        setList(arr)
    }

  

    return (
        <ul className="list-group">
            {list.map((listObj, index) =>
            (
                <Listitem
                    key={listObj.id}
                    name={listObj.name}
                    id={listObj.id}
                    index={index}
                    deleteItem={deleteItem}
                  
                />
            )

            )}


        </ul>
    )
}
