import db from "../firebase";
import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditReviews = () => {
    var [values, setValues] = useState("");

    let currentId = useParams();
    const { id } = currentId;


    useEffect(() => {
        getDoc(doc(db, 'reviews', id)).then(snapshot => setValues(snapshot.data()));
    }, [id])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const editReviews = async () => {
        const docRef = doc(db, "reviews", id);
        const username = values.username;
        const restaurant = values.restaurant;
        const rating = values.rating;
        const review = values.review;
        const payload = { username, restaurant, rating, review };
        await updateDoc(docRef, payload);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="Username" name="username"
                                value={values.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Restaurant" name="restaurant"
                                value={values.restaurant}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-star">
                                    </i>
                                </div>
                            </div>
                            <div class="form-group">
                                <select class="form-control" name="rating" onChange={handleInputChange} value={values.rating}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user">
                                    </i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Review" name="review"
                                value={values.review}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Link to={`/reviews`}>
                            <button className="btn btn-default"> Go back </button>
                        </Link>
                        <Link to={`/reviews`} className="btn btn-success btn-raised" onClick={() => { editReviews(); }}> Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditReviews
