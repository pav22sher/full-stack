import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function EditUser() {
    let navigation = useNavigate();
    let [user, setUser] = useState({
        login: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    let {login, password, firstName, lastName, email} = user;
    let {id} = useParams();
    let onSubmit = async () => {
        console.log(user);
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigation("/");
    }
    let loadUser = async () => {
        let result = await axios.get(`http://localhost:8080/user/${id}`);
        console.log(result);
        setUser(result.data);
    }
    let onCancel = () => {
        navigation("/");
    }
    let onChange = function (e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-4"}>Edit user</h2>
                    <div className={"mb-3"}>
                        <label htmlFor={"login"} className={"form-label"}>Name</label>
                        <input type={"text"} className={"form-control"} name={"login"}
                               value={login} onChange={onChange}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor={"password"} className={"form-label"}>Password</label>
                        <input type={"text"} className={"form-control"} name={"password"}
                               value={password} onChange={onChange}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor={"firstName"} className={"form-label"}>FirstName</label>
                        <input type={"text"} className={"form-control"} name={"firstName"}
                               value={firstName} onChange={onChange}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor={"lastName"} className={"form-label"}>LastName</label>
                        <input type={"text"} className={"form-control"} name={"lastName"}
                               value={lastName} onChange={onChange}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor={"email"} className={"form-label"}>Email</label>
                        <input type={"text"} className={"form-control"} name={"email"}
                               value={email} onChange={onChange}/>
                    </div>
                    <button type={"submit"} className={"btn btn-outline-primary mx-2"} onClick={onSubmit}>
                        Submit
                    </button>
                    <button type={"submit"} className={"btn btn-danger mx-2"} onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditUser;