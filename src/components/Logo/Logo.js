import React from 'react'
import burgerlogo from '../../../src/assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = props => (
    <div className={classes.Logo} c>
        <img src={burgerlogo} alt="FlosBurger" />
    </div>
)

export default logo
