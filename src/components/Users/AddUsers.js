import React ,{useState} from "react";
import Card from "../UI/card";
import classes from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/errormodal";

function AddUser(props){
    const [enteredUsername,setEnteredUsername]=useState("");
    const [enteredAge,setEnteredAge]=useState("");

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            return;
        }

        if(+enteredAge<1){
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
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
        <div>
             <ErrorModal title="An error has occured!" message="Something went wrong!"/>
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
        </div>
       
    );
}


export default AddUser;