import React from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'

import classes from "./AddUser.module.css"

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser