import React from "react";
import Card from "../UI/card";
import classes from "UserList.module.css";

const UserList=(props)=>{
    return(
        <Card>
            <ul>
                {
                    props.users.map((user)=><li>{user.name}
                     ({user.age} years old)</li>)
                }
            </ul>
        </Card>
    );
}