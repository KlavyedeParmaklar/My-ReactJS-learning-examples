import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css'
import Card from '../UI/Card';
import ExpenseList from '../ExpenseList/ExpenseList';

const Expense = (props) => {

    const [filterYear, setFilterYear] = useState('2020')

    //Filter return new Array
    const filteredByYear = props.items.filter(filterByYear => {
        return filterByYear.date.getFullYear().toString() === filterYear
    })

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpenseList items={filteredByYear} />

        </Card>
    )
}

export default Expense
