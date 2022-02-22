import React ,{useState} from "react";
import Card from "../UI/card";
import classes from './AddUsers.module.css';
import Button from "../UI/Button";

function AddUser(props){
    const [enteredUsername,setEnteredUsername]=useState("");
    const [enteredAge,setEnteredAge]=useState("");

    const addUserHandler=(event)=>{
        event.preventDefault();
        console.log(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    };

    const userAgeChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }


    return(
        <Card classes={classes.input}>
        <form onSubmit={
            addUserHandler
        }>
            <label htmlFor="username">Username</label>
          <input  id="username" type={"text"} value={enteredUsername} onChange={userNameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input id="age" type={"number"} value={enteredAge} onChange={userAgeChangeHandler} />

          <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
}


export default AddUser;