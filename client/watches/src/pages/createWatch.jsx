import { useState } from "react";
import axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from 'react-router-dom'

export const CreateWatch = () => {
    const userID = useGetUserID();
    
    const [ watch, setWatch ] = useState({
        brand: "",
        model:"",
        year: 0,
        description: [],
        imageUrl: "",
        price: 0,
        userOwner: userID,
    });

const navigate = useNavigate();   

//grab target input, changing name to new value
    const handleChange = (event) => {
        const {name, value} = event.target;
        setWatch({...watch, [name]: value})
    };

// grab value from target, make copy of description, change idx of copy to idx received from function. Use spread operator to list watch desc and add new desc element to that using new descriptions idx on Line 31
    const handleDescChange = (event, idx) => {
        const { value } = event.target;
        const description = watch.description;
        description[idx] = value;
        setWatch({ ...watch, description })
    };
//list values of descriptions plus empty string by default. Then change value to what is entered.
    const handleAddDesc = () => {
        const description = [...watch.description, ""]
        setWatch({...watch, description })
    }

console.log(watch)

//after submitting watch useNavigate back to the "/" home page
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/watches", watch);
            alert("Watch created!");
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }



    return (
    <div className="create-watch">

        <h2>Create your Watch</h2> 

        <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" onChange={handleChange}/>

            <label htmlFor="model">Model</label>
            <input type="text" id="model" name="model" onChange={handleChange}/>

            <label htmlFor="year">Year</label>
            <input type="text" id="year" name="year" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
          
                {watch.description.map((description, idx) => (
                    <input 
                    key={idx} 
                    type="text" 
                    name="description" 
                    value={description}
                    onChange={(event) => handleDescChange(event, idx)}
                    />
                ))}
            <button onClick={handleAddDesc} type="button">Add description</button>

            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} />

            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" onChange={handleChange}/>

            <button onSubmit={handleSubmit} type="submit">Create watch</button>
        </form>
    
    
    
    </div>

)};
