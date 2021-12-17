import db from "../firebase";
import { useState } from "react";
import { collection, addDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';

const AddRestaurants = () => {
    const initialFieldValues = {
        cuisine: '',
        name: ''
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const addRestaurant = async () => {
        const docRef = collection(db, "restaurants");
        const cuisine = values.cuisine;
        const name = values.name;
        const payload = { cuisine, name };
        await addDoc(docRef, payload);
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
                        <Link to={`/restaurants`} className="btn btn-success btn-raised" onClick={() => {addRestaurant(); }}> Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddRestaurants
