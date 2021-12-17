import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, deleteDoc, doc } from '@firebase/firestore';
import { Link } from 'react-router-dom';

const Restaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() =>
        onSnapshot(collection(db, "restaurants"), (snapshot) =>
            setRestaurants(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
        []
    );


    const deleteRestaurants = id => {
        if (window.confirm('delete this record?')) {
            const docRef = doc(db, "restaurants", id);
            deleteDoc(docRef);
        }
    }

    return (
        <div className="App">
            <div>
                <Link to={`/`}>
                    <button className="button">List Users</button>
                </Link>
                <Link to={`/reviews`}>
                    <button className="button">List Reviews</button>
                </Link>
                <Link to={`/cuisines`}>
                    <button className="button">List Cuisines</button>
                </Link>
            </div>
            <h3>List of Restaurants</h3>
            <ul>
                {restaurants.map((rest) => (
                    <div key={rest.id}>
                        <li>
                            Cuisine: {rest.cuisine}, Name: {rest.name}
                            <Link to={`/editRestaurants/${rest.id}`}>
                                <a className="btn btn.primary" onClick={() => { }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </Link>
                            <Link to={`/viewRestaurants/${rest.id}`}>
                                <a className="btn text-danger">
                                    <i className="fas fa-eye"></i>
                                </a>
                            </Link>
                            <a className="btn text-danger" onClick={() => { deleteRestaurants(rest.id) }}>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </li>

                    </div>
                ))}
            </ul>
            <Link to={`/addRestaurants`}>
                <button className="button">Add restaurants</button>
            </Link>
        </div>
    );
}

export default Restaurants
