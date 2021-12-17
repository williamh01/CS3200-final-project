import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, deleteDoc, doc, where, query } from '@firebase/firestore';
import { Link } from 'react-router-dom';

const Cuisines = () => {
    const [cuisines, setCuisines] = useState([]);
    var [values, setValues] = useState([]);
    /*
        useEffect(() =>
            onSnapshot(collection(db, "cuisines"), (snapshot) =>
                setCuisines(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
            []
        );
        */
    /*
        const search = () => {
            setValues(values);
        }
        */


    useEffect(() => {
        const collectionRef = collection(db, 'restaurants');
        const q = query(collectionRef, where('cuisine', '==', values));
        const unSub = onSnapshot(q, (snapshot) =>
            setCuisines(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        return unSub;
    }, [values])

    const deleteRestaurants = id => {
        if (window.confirm('delete this record?')) {
            const docRef = doc(db, "restaurants", id);
            deleteDoc(docRef);
        }
    }


    return (
        <div className="App">
            <Link to={`/`}>
                <button className="button">List Users</button>
            </Link>
            <Link to={`/restaurants`}>
                <button className="button">List Restaurants</button>
            </Link>
            <Link to={`/cuisines`}>
                <button className="button">List Cuisines</button>
            </Link>
            <div>
                <h2>{values} Restaurant</h2>
                <form>
                    <input className="form-control" placeholder="Enter a Cuisine" name="cuisine" value={values} onChange={(e) => setValues(e.target.value)}
                    />
                </form>
                <ul>
                    {cuisines.map((rest) => (
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
            </div>
        </div>
    )
}

export default Cuisines;
