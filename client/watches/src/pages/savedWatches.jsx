import { useEffect, useState } from 'react';
import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";



export const SavedWatches = () => {
    const [savedWatches, setSavedWatches] = useState([]);
    const userID = useGetUserID();


    useEffect(() => {

    const fetchSavedWatches = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3001/watches/savedWatches/${userID}`
            );
           
            setSavedWatches(response.data.savedWatches)
        } catch (error) {
            console.log(error)
        }
    };
        
        fetchSavedWatches();
    }, []);


    return( 
    <div>
        <h2>Saved Watches</h2>
        <ul>
            {savedWatches.map((watch) => (
                <li key={watch._id}>
                    {savedWatches.includes(watch._id) && <h1>Already saved</h1>}
                    <div>
                        <h2>{watch.brand}</h2>

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