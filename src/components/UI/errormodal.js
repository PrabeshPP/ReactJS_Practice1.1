import React from "react";
import Button from "./Button";
import Card from "./card";

import classes from "./errormodal.module.css";


const  ErrorModal=(props)=>{
    return(
        //! Using the React.Fragment
        <React.Fragment>
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card classes={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>
                Okay
            </Button>
        </footer>

        </Card>
        </React.Fragment>
        

    );
}

export default ErrorModal;