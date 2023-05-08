import { useState } from "react";
import axios from 'axios'

export const CreateWatch = () => {
    const [ watch, setWatch ] = useState({
        brand: "",
        model:"",
        year: 0,
        description: "",
        imageUrl: "",
        price: 0,
    });
//grab target input, changing name to new value
    const handleChange = (event) => {
        const {name, value} = event.target;
        setWatch({...watch, [name]: value})
    };

    const addDesc = () => {
        setWatch({...watch, description: [...watch.description, ""] })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/watches", watch);
            alert("Watch created!")
        } catch (error) {
            console.log(error)
        }
    }



    return (
    <div className="create-watch">

        <h2>Create your Watch</h2>

        <form>
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" onChange={handleChange}/>

            <label htmlFor="model">Model</label>
            <input type="text" id="model" name="model" />

            <label htmlFor="year">Year</label>
            <input type="text" id="year" name="year" />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" onChange={handleChange}></textarea>

            <button onClick={addDesc} type="button">Add description</button>

            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} />

            <label htmlFor="price">Price</label>
            <input type="text" id="year" name="year" />

            <button onSubmit={onSubmit} type="submit">Create your watch</button>
        </form>
    
    
    
    </div>

)};
