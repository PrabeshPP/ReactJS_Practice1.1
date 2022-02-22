import React from "react";
import Card from "../UI/card";
import classes from "./UserList.module.css";

const UserList=(props)=>{
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>(
                    <li>
                    {user.name}({user.age} years old)
                     </li>))
                     
                    
                }
                <li>Prabesh Bista</li>
            </ul>
        </Card>
    );
}

export default UserList;