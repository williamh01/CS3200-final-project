import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, deleteDoc, doc, getDoc, where, query } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ViewUser = () => {

    const [reviews, setReviews] = useState([]);
    const [initUser, setInitUser] = useState([]);


    let currentId = useParams();
    const { id } = currentId;

    /*
        useEffect(() =>
            onSnapshot(collection(db, "user"), (snapshot) =>
                setInitUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
            []
        );
        */

    const getUsername = () =>
        getDoc(doc(db, 'users', id)).then(snapshot => setInitUser(snapshot.data().username));
    

    getUsername();
    useEffect(() => {
        const collectionRef = collection(db, 'reviews');
        const q = query(collectionRef, where('username', '==', initUser));
        const unSub = onSnapshot(q, (snapshot) =>
            setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        return unSub;
    }, [initUser]);

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
            <Link to={`/reviews`}>
                <button className="button">List Reviews</button>
            </Link>
            <Link to={`/cuisines`}>
                <button className="button">List Cuisines</button>
            </Link>
            <div>
                <h5>Username: {initUser} </h5>
                <h2>User Reviews </h2>
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
        </div>
    )
}

/*
<Link to={`/viewReviews/${review.id}`}>
                                    <a className="btn text-danger">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                </Link>
*/

export default ViewUser
