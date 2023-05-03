import {useState} from 'react'

const TodoList = () => {
    const [name, setName] = useState("")

   
    return (
        <div>
            <h1>Hello Todo List</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Xin chào name = {name}</p>
        </div>
    )
}

export default TodoList;