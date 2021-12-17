import db from "../firebase";
import { useState, useEffect } from "react";
import { updateDoc, doc, getDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditRestaurants = () => {

    var [values, setValues] = useState("");

    let currentId = useParams();
    const { id } = currentId;

    useEffect(() => {
        getDoc(doc(db, 'restaurants', id)).then(snapshot => setValues(snapshot.data()));
    }, [id])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const editRestaurant = async () => {
        const docRef = doc(db, "restaurants",id);
        const cuisine = values.cuisine;
        const name = values.name;
        const payload = { cuisine, name };
        await updateDoc(docRef, payload);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="Cuisine" name="cuisine"
                                value={values.cuisine}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Name" name="name"
                                value={values.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Link to={`/restaurants`}>
                            <button className="btn btn-default"> Go back </button>
                        </Link>
                        <Link to={`/restaurants`} className="btn btn-success btn-raised" onClick={() => {editRestaurant(); }}> Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditRestaurants
