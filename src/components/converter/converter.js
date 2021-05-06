import React, { useEffect, useState } from 'react';

import CurrencyRow from '../сurrency-row/сurrency-row';
import HitoryItem from '../hitory-item/hitory-item';

const currency = ['USD', 'RUB', 'CNY', 'GBP'];

const BASE_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=d69b9a1ed8019999f478bdbff7945331&symbols=${currency}`;
const HISTORY_COUNT = 10;

let date = "2021-05-06";

function Converter() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [currentDate, setCurrentDate] = useState({date})
  const [historyCurrency, setHistory] = useState([])
  const [userForm, setUserForm] = useState('')


  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(4)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(4)
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        
        const firstCurrency = Object.keys(data.rates)[1]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  const addHistory = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2,9),
    }
    if (historyCurrency.length === HISTORY_COUNT) {
      historyCurrency.shift()
    }
    setHistory([...historyCurrency, newItem])
  }

  const removeHistory = () => {
    const newHistoryCurrency = historyCurrency.splice(0, 10);
    setHistory([...historyCurrency, newHistoryCurrency])
  }

  function handleFromRemoveHistory(evt) {
    evt.preventDefault();
    removeHistory();
    setHistory([...historyCurrency]);
  }

  function handleFromAmountChange(evt) {
    setAmount(evt.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(evt) {
    setAmount(evt.target.value)
    setAmountInFromCurrency(false)
  }

  function handleToInputDate(evt) {
    date = setCurrentDate(evt.target.value)
    setCurrentDate([...currentDate, date])
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addHistory(userForm)
    setUserForm("")
  }

  const handleKeyPress = (evt) => {
    if(evt.key === "Enter") {
        handleSubmit(evt)
    }
  }

  const handleKeyPressToDeleteHistory = (evt) => {
    if(evt.key === "Enter") {
      handleFromRemoveHistory(evt)
    }
  }

  return (
    <section className="converter">
      <div className="container">
        <h2 className="converter__title">
          Конвертер валют
        </h2>
        <form className="converter__content" onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
          <div className="converter__item">
            <p className="converter__item-text">
              У меня есть
            </p>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={evt => setToCurrency(evt.target.value)}
              onChangeAmount={handleFromAmountChange}
              amount={fromAmount}
            />
          </div>

          <div className="converter__item">
            <p className="converter__item-text">
              Хочу приобрести
            </p>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={evt => setToCurrency(evt.target.value)}
              onChangeAmount={handleToAmountChange}
              amount={toAmount}
            />
          </div>

          <label className="converter__label-date">
            <input className="converter__input--date" type="date" max="2021-05-06" min="2021-04-26"
              defaultValue={date}
              onChangeDate={handleToInputDate}
            />
          </label>

          <button className="converter__btn" type="submit"
          >
            Сохранить результат
          </button>
        </form>

        <div className="convert__history">
          <h3 className="convert__history-title">История конвертации</h3>
          <ul className="convert__history-list">
            {historyCurrency.map((hitoryItem) => {
              return (
              <HitoryItem
                hitoryItem={hitoryItem}
                key={hitoryItem.id}
                date={date}
                fromAmount={fromAmount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                toAmount={toAmount}
              />
              )
            })}

          </ul>
          <button onClick={handleFromRemoveHistory} onKeyDown={handleKeyPressToDeleteHistory} className="converter__history-btn">Очистить историю</button>
        </div>
        
      </div>
    </section>
  );
}

export default Converter;