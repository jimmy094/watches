import { useEffect, useState } from 'react';
import axios from "axios";


export const Home = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
    const fetchWatch = async () => {
        try {
            const response = await axios.get("http://localhost:3001/watches");
            setWatches(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        
        } 
        fetchWatch();
    }, []);

    const saveWatch = async (watchID) => {

    }

    return( 
    <div>
        <h2>Watches</h2>
        <ul>
            {watches.map((watch) => (
                <li key={watch._id}>
                    <div>
                        <h2>{watch.brand}</h2>
                        <button onClick={() => saveWatch(watch._id)}>Save</button>
                        <div classname="instructions">
                            <p>Description: {watch.description} </p>
                            <p>Avg price: ${watch.price} </p>
                            <p>Year: {watch.year}</p>
                        </div>
                        <img src={watch.imageUrl} alt={watch.name} />
                    </div>
                </li>
            ))}
        </ul>
    </div>
)};