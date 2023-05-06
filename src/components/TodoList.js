import {useState} from 'react'
import DisplayTodo from './DisplayTodo';
import AddTodo from './AddTodo';

const TodoList = () => {

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const [name, setName] = useState("")
    const [listName, setListName] = useState([
        {id: randomInteger(1, 999999999999), name: 'Nguyễn Văn A'},
        {id: randomInteger(1, 999999999999), name: 'Nguyễn Văn B'},
        {id: randomInteger(1, 999999999999), name: 'Nguyễn Văn C'}
    ])

   const addListName = () => {
    let setNames = {
        id: randomInteger(1, 999999999999),
        name
    }

    setListName([...listName, setNames])
    setName("")
   }

   const deleteName = (id) => {
    const listNameNew = listName.filter(item => item.id !== id)
    setListName(listNameNew)
   }
    return (
        <div>
            <AddTodo 
                name = {name}
                setName = {setName}
                addListName = {addListName}
            />
            
            
            {/* Render List Name */}
            <DisplayTodo 
                childrenListName ={listName}
                deleteName = {deleteName}
            />
        </div>
    )
}

export default TodoList;