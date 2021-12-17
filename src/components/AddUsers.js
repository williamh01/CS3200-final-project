import db from "../firebase";
import { useState } from "react";
import { collection, addDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';


const AddUsers = () => {
    const initialFieldValues = {
        first: '',
        last: '',
        username: '',
        password: '',
        email: '',
        dateOfBirth: ''
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const addUser = async () => {
        const docRef = collection(db, "users");
        const first = values.first;
        const last = values.last;
        const email = values.email;
        const username = values.username;
        const password = values.password;
        const dateOfBirth = values.dateOfBirth;
        const payload = { first, last, email, username, password, dateOfBirth };
        await addDoc(docRef, payload);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="First Name" name="first"
                                value={values.first}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Last Name" name="last"
                                value={values.last}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-envelope">
                                    </i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Email" name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user">
                                    </i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Username" name="username"
                                value={values.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-key">
                                    </i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Password" name="password"
                                value={values.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-birthday-cake">
                                    </i>
                                </div>
                            </div>
                            <input className="form-control" type="date" placeholder="Date of Birth" name="dateOfBirth"
                                value={values.dateOfBirth}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Link to={`/`}>
                            <button className="btn btn-default"> Go back </button>
                        </Link>
                        <Link to={`/`} className="btn btn-success btn-raised" onClick={() => {addUser(); }}> Submit</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUsers;
