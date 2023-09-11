import React from "react";

const HistoryItem = ({ transaction, dellTransaction }) =>(
    <li 
        className={`history__item history__item-${transaction.add ? 'plus' : 'minus'}`}>
        { transaction.description }
        <span className="history__money">{transaction.amount}₽</span>
        <button className="history__delete" onClick={() => dellTransaction(transaction.id)}>x</button>
    </li>
)

export default HistoryItem;

