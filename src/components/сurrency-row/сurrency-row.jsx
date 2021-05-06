import React from 'react'

const CurrencyRow = (props) => {
  const {currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount} = props
  return (
      <>
        <label className="converter__label">
            <input className="converter__input"
                type="number"
                onChange={onChangeAmount}
                value={amount || "1"}
            />
        </label>
        <select сlassName="converter__select"
            value={selectedCurrency}
            onChange={onChangeCurrency}
            >
            {currencyOptions.map(option => (
                <option key={option} name={option} value={option}>{option}</option>
            ))}
        </select>
      </>
  )
}

export default CurrencyRow;