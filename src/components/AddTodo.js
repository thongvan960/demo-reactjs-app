
const AddTodo = (props) => {

    const {name, setName, addListName} = props

    return (
        <div>
            <h1>Hello Todo List</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => addListName()}>Add Name</button>
        </div>
    )
}

export default AddTodo;