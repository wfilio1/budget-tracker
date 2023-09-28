import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';

const NewTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const handleAddTransaction = (evt) => {
        
        evt.preventDefault();

        const { v4: uuidv4 } = require('uuid');

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: parseInt(amount)
        }

        addTransaction(newTransaction);


    }

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter Text..." value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    (negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter Amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add Transaction</button>
                
            </form>

        </div>
    );
}

export default NewTransaction;