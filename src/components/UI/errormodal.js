import React from "react";
import Button from "./Button";
import Card from "./card";
import ReactDom from "react-dom";

import classes from "./errormodal.module.css";

const Backdrop=(props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
    );
}

const BackDropOverlay=(props)=>{
    return(
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
    );
}


const  ErrorModal=(props)=>{
    return(
        //! Using the React.Fragment
        <React.Fragment>
        {
            ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop--root')
            )
        }

        ReactDom.createPortal(
            <BackDropOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>

        )
           
            
           
        </React.Fragment>
        

    );
}

export default ErrorModal;