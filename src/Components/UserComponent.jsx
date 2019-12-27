import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const UserComponent = () => {
    const { firstName, lastName, age, email } = useContext(UserContext);
    return (
        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>age: {age} </p>
            <p>Email: {email}</p>
        </div>
    );
}


export default UserComponent;