import { useEffect, useState } from 'react';
import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";



export const Home = () => {
    const [watches, setWatches] = useState([]);
    const userID = useGetUserID();

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
        try {
            const response = await axios.put("http://localhost:3001/watches", {watchID, userID});
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return( 
    <div>
        <h2>Watches</h2>
        <ul>
            {watches.map((watch) => (
                <li key={watch._id}>
                    <div>
                        <h2>{watch.brand}</h2>
                        <button className='saveBtn' onClick={() => saveWatch(watch._id)}>Save</button>
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