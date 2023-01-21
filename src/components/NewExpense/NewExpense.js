import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };

    const startEditing = () => {
        setIsEditing(true)
    };

    const onStopEditingHandler = () => {
        setIsEditing(false)
    };


    return (
        <div className="new-expense">
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onStopEditingHandler} />}
        {!isEditing && <button  onClick={startEditing}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;