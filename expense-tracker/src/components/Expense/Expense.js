import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css'
import Card from '../UI/Card';

const Expense = (props) => {

    const [filterYear, setFilterYear] = useState('2020')

    //Filter return new Array
    const filteredByYear = props.items.filter(filterByYear => {
        return filterByYear.date.getFullYear().toString() === filterYear
    })

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    let expenseContent = <p>No expenses found!</p>

    if (filteredByYear.length > 0) {
        expenseContent = filteredByYear.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeFilter={filterChangeHandler}
            />

            {expenseContent}

        </Card>
    )
}

export default Expense
