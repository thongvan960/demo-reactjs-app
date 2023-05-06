const DisplayTodo = (props) => {
    const listNames = props.childrenListName
    const deleteName = (id) => {
        props.deleteName(id)
    }
    return (
        
        <div>
            {
                listNames.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => deleteName(item.id)}>X</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default DisplayTodo;