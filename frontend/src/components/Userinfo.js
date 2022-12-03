import React from "react";

export default function Userinfo(props) { 
    return(
        <div className="accInfo">
        <img
        src="images/default_user.png"
        alt="default_user"
        className="userimage"></img>
        <div className = "info">
            <div className = 'Name'>
                <p className = 'firstName'>Ignatius </p>
                <p className = 'lastName'>Goh</p>
            </div>
            <p className = 'email'>ignatius@gmail.com</p>

        <button className="editUserInfo">Edit User Info</button>
        </div>
        </div>
    )
}