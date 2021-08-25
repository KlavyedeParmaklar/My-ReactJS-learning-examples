import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {

    const [openExpenseForm, setOpenExpenseForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + (Math.round(Math.random() * 1000)).toString()
        }
        props.onAddExpense(expenseData)
    }

    const openNewExpenseFormHandler = () => {
        setOpenExpenseForm(true)
    }

    const closeNewExpenseFormHandler = () => {
        setOpenExpenseForm(false)
    }

    let newExpenseForm = <button onClick={openNewExpenseFormHandler}>Add New Expense</button>

    if (openExpenseForm) {
        newExpenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeNewExpenseFormHandler} />
    }

    return (
        <div className="new-expense">
            {newExpenseForm}
        </div>
    )
}

export default NewExpense