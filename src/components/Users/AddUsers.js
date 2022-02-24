import React ,{useState,useRef} from "react";
import Card from "../UI/card";
import classes from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/errormodal";

function AddUser(props){

        const inputUserName=useRef();
        const inputUserAge=useRef();

    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=inputUserName.current.value;
        const enteredUserAge=inputUserAge.current.value;
        
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({title:"Invalid input",
        message:"Please entered a valid name and age(non-empty values)."})
            return;
        }

        if(+enteredUserAge<1){
            setError({
                title:"Invalid Age",
                message:"Please entered a valid age(age>0)."
            })
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);

        //! it is not a good way to  re-assign value in react js
        inputUserName.current.value='';
        inputUserAge.current.value='';
        
    };

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
          <input  id="username" type={"text"} ref={inputUserName}/>
          <label htmlFor="age">Age</label>
          <input id="age" type={"number"} ref={inputUserAge} />

          <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
       
    );
}


export default AddUser;