import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, deleteDoc, doc } from '@firebase/firestore';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
        onSnapshot(collection(db, "reviews"), (snapshot) =>
            setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
        []
    );


    const deleteReviews = id => {
        if (window.confirm('delete this record?')) {
            const docRef = doc(db, "reviews", id);
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
            <h3>List Reviews</h3>
            <ul>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <li>
                            Username: {review.username}, Restaurant: {review.restaurant}, review: {review.review}, rating: {review.rating}
                            <Link to={`/editReviews/${review.id}`}>
                                <a className="btn btn.primary" onClick={() => { }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </Link>

                            <a className="btn text-danger" onClick={() => { deleteReviews(review.id) }}>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </li>

                    </div>
                ))}
            </ul>
            <Link to={`/addReviews`}>
                <button className="button">Add reviews</button>
            </Link>
        </div>
    );
}


export default Reviews
