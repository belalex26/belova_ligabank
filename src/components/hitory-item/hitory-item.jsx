import React from 'react';

const HitoryItem = ({hitoryItem, date, fromAmount, fromCurrency, toAmount, toCurrency}) => {
  return (
        <li key={hitoryItem.id} className="convert__history-item">
            <p className="convert__history-item-date">{date}</p>
            <p className="convert__history-item-amount">{fromAmount} {fromCurrency}</p>
            <p className="convert__history-item-current-convert">{toAmount} {toCurrency}</p>
        </li>
  );
};

export default HitoryItem;