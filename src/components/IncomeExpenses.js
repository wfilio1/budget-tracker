import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    var income = 0;

    var expenses = 0;

    //updates income and expenses
    for(var i = 0 ; i < amounts.length; i++) {
        if(amounts[i] > 0) {
            income += amounts[i];
        } else {
            expenses += amounts[i];
        }
    }
    
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+{income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expenses.toFixed(2)}</p>
            </div>

        </div>

    );
}

export default IncomeExpenses;