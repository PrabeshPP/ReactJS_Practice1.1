import React from "react";
import Button from "./Button";
import Card from "./card";

import classes from "./errormodal.module.css";


const  ErrorModal=(props)=>{
    return(
        <Card classes={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
            <Button>
                Okay
            </Button>
        </footer>

        </Card>

    );
}

export default ErrorModal;