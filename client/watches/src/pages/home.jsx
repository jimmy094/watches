import { useEffect, useState } from 'react';
import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";



export const Home = () => {
    const [watches, setWatches] = useState([]);
    const [savedWatches, setSavedWatches] = useState([]);

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
    }; 

    const fetchSavedWatches = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3001/watches/savedWatches/ids/${userID}`
            );
           
            setSavedWatches(response.data.savedWatches)
        } catch (error) {
            console.log(error)
        }
    };
        
        fetchWatch();
        fetchSavedWatches();
    }, []);

    const saveWatch = async (watchID) => {
        try {
            const response = await axios.put("http://localhost:3001/watches", {watchID, userID});
            setSavedWatches(response.data.savedWatches)
        } catch (error) {
            console.log(error)
        }
    };

    const isWatchSaved = (id) => savedWatches.includes(id);

    return( 
    <div>
        <h2>Watches</h2>
        <ul>
            {watches.map((watch) => (
                <li key={watch._id}>
                    {savedWatches.includes(watch._id) && <h1>Already saved</h1>}
                    <div>
                        <h2>{watch.brand}</h2>

                        <button className='saveBtn' 
                        onClick={() => saveWatch(watch._id)}
                        disabled={isWatchSaved(watch.id)}
                        >
                        {isWatchSaved(watch._id) ? "Saved" : "Save"}
                        
                        </button>

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