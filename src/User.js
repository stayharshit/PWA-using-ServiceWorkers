import { React, useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';

export default function User() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((res) => {
            res.json().then((result) => {
                console.warn(result);
                setUserData(result);
                localStorage.setItem("users",JSON.stringify(result));
            }).catch((err)=> {
                const result = localStorage.getItem("users");
                setUserData(JSON.parse(result));
                console.alert(err);
            })
        })
    }, []);
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     userData.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                        </tr>
                    )) 
                   }
                </tbody>
            </Table>
        </>
    );
}