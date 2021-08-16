import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css'
import Card from '../UI/Card';

const Expense = (props) => {

    const [filterYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </Card>
    )
}

export default Expense
