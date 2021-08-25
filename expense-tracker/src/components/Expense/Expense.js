import React, { useState } from 'react'

import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css'
import Card from '../UI/Card';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from './ExpenseChart';

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

            <ExpenseChart expenses={filteredByYear} />

            <ExpenseList items={filteredByYear} />

        </Card>
    )
}

export default Expense
