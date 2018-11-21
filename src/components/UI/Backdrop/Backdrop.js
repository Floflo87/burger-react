import React from 'react'
import classes from './Backdrop.css'
const backdrop = props =>
    props.show ? <div className={classes.Backgrop} onClick={props.clicked} /> : null
export default backdrop
