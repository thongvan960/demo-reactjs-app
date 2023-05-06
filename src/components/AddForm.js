import {useState} from 'react'


const AddForm = () => {
    const [isShow, setIsShow] = useState(true)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    
    function addDataForm() {
        const objDateForm = {
            name,
            price,
            color,
            size
        }
        console.log(objDateForm);
    }

    const handleShowForm = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <h1>The fieldset element + CSS</h1>

                {isShow && 
                <fieldset>
                    <legend>Personalia:</legend>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" onChange={(event) => setName(event.target.value)}/><br />
                    </div>

                    <div>
                        <label for="price">Price</label>                       
                        <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)}/><br />
                    </div>

                    <div>
                        <label for="size">Size</label>
                        <input type="text" id="size" value={size} onChange={(event) => setSize(event.target.value)}/><br />
                       
                    </div>

                    <div>
                        <label for="color">Color</label>
                        <input type="text" id="color" onChange={(event) => setColor(event.target.value)}/><br />
                    </div>                   
                    <button onClick={() => addDataForm()}>Add Form</button>
                </fieldset>

                }

                {isShow ? <button onClick={() => handleShowForm()}>Hide Form</button> : <button onClick={() => handleShowForm()}>Show Form</button>}
            
        </div>
    )
}

export default AddForm;