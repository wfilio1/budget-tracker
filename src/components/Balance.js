import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // console.log(amounts); for debugging purposes
    
    //updates the balance and sums it up
    var sum = 0;
    for(var i = 0; i < amounts.length; i++) {
        sum += amounts[i];
    }


    return(
        <>
        <h4>
            Your Balance
        </h4>
        <h1>{sum.toFixed(2)}</h1>
        </>
    );
}

export default Balance;