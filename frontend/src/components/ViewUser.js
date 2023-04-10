import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ViewUser() {
    let [user, setUser] = useState({
        login: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    let {id} = useParams();
    let loadUser = async () => {
        let result = await axios.get(`http://localhost:8080/user/${id}`);
        console.log(result);
        setUser(result.data);
    }
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-4"}>User details</h2>
                    <div className="card">
                        <div className="card-header">
                            <b>User ID:</b> {user.id}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Login:</b> {user.login}
                            </li>
                            <li className="list-group-item">
                                <b>Password:</b> {user.password}
                            </li>
                            <li className="list-group-item">
                                <b>FirstName:</b> {user.firstName}
                            </li>
                            <li className="list-group-item">
                                <b>LastName:</b> {user.lastName}
                            </li>
                            <li className="list-group-item">
                                <b>Email:</b> {user.email}
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"} className={"btn btn-primary my-2"}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;