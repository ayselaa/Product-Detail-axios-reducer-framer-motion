import React, { useState } from 'react'

export default function Listinput(props) {
    const [value, setValue] = useState("")

    
    const { list, setList } = props

    const updateState = () => {
        let arr = [...list]

        let obj = {}
        obj.name= value;
        obj.id = Math.round(Math.random() * 10000)

        arr.push(obj)
        setList(arr)
        setValue('')
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className="input-group">
                <input value={value} onChange={(e) => handleChange(e)} type="text" />
                <button onClick={() => updateState()} type="button" className="btn btn-outline-secondary">Add</button>
            </div>
        </div>
    )
}
