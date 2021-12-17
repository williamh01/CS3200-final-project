import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, deleteDoc, doc } from '@firebase/firestore';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>
        onSnapshot(collection(db, "users"), (snapshot) =>
            setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
        []
    );


    const deleteUsers = id => {
        if (window.confirm('delete this record?')) {
            const docRef = doc(db, "users", id);
            deleteDoc(docRef);
        }
    }

    return (
        <div className="App">
            <Link to={`/restaurants`}>
                <button className="button">List Restaurants</button>
            </Link>
            <Link to={`/reviews`}>
                <button className="button">List Reviews</button>
            </Link>
            <Link to={`/cuisines`}>
                <button className="button">List Cuisines</button>
            </Link>
            <h3>List of Users</h3>
            <ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <li>
                            First: {user.first}, Last: {user.last}, Email: {user.email}, Username: {user.username}, Password: {user.password}, Date of Birth: {user.dateOfBirth}
                            <Link to={`/edit/${user.id}`}>
                                <a className="btn btn.primary" onClick={() => { }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </Link>
                            <Link to={`/view/${user.id}`}>
                                <a className="btn text-danger">
                                    <i className="fas fa-eye"></i>
                                </a>
                            </Link>
                            <a className="btn text-danger" onClick={() => { deleteUsers(user.id) }}>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </li>

                    </div>
                ))}
            </ul>
            <Link to={`/add`}>
                <button className="button">Add Users</button>
            </Link>
        </div>
    );
}
export default Home
