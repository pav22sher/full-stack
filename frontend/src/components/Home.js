import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    let loadUsers = async() => {
        let response = await axios.get("http://localhost:8080/user");
        console.log(response);
        setUsers(response.data);
    }
    let deleteUser = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }
    return (
        <div className={'py-4'}>
            <div className={'container'}>
                <table className={'table border'}>
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">ID</th>
                        <th scope="col">Login</th>
                        <th scope="col">Password</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>{user.password}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/view/${user.id}`} className="btn btn-outline-primary mx-2">View</Link>
                                    <Link to={`/edit/${user.id}`} className="btn btn-primary mx-2">Edit</Link>
                                    <button className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(user.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;