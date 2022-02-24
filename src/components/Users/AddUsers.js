import React ,{useState} from "react";
import Card from "../UI/card";
import classes from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/errormodal";

function AddUser(props){
    const [enteredUsername,setEnteredUsername]=useState("");
    const [enteredAge,setEnteredAge]=useState("");

    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({title:"Invalid input",
        message:"Please entered a valid name and age(non-empty values)."})
            return;
        }

        if(+enteredAge<1){
            setError({
                title:"Invalid Age",
                message:"Please entered a valid age(age>0)."
            })
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

    const errorHandler=(event)=>{
        setError(null);
    }

    return(
        //! Using React.Fragment will remove the un-necessary use of div element.
        //! Using React.Fragment will render as a an empty element.
        <React.Fragment>
        {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    
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
        </React.Fragment>
       
    );
}


export default AddUser;