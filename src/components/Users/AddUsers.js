import React from "react";
import Card from "../UI/card";
import classes from './AddUsers.module.css';

function AddUser(props){
    const addUserHandler=(event)=>{
        event.preventDefault();
    };

    return(
        <Card classes={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
          <input  id="username" type={"text"}/>
          <label htmlFor="age">Age</label>
          <input id="age" type={"number"}/>

          <button type="submit">Add User</button>
        </form>
        </Card>
    );
}


export default AddUser;