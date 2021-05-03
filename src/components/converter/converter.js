import React from 'react';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'CNY', 'GBP'];
    this.getConverter();
  }

  getConverter = () => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=d69b9a1ed8019999f478bdbff7945331')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({date: data.date});
        let result = {};
        for (let i = 0; i < this.currency.length; i++ ) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({currencyRate : result});
      }); 
  }

  render() {
    return (
      <section className="converter">
        <div className="container">
          <h2 className="converter__title">
            Конвертер валют
          </h2>
          <div className="converter__content">
            <div className="converter__item">
              <p className="converter__item-text">
                У меня есть
              </p>
              <label className="converter__label">
                <input className="converter__input" type="number" placeholder="1000" />
              </label>
              <select сlassName="converter__select">
                <option>RUB</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBR</option>
                <option>CNY</option>
              </select>
            </div>
            <div className="converter__item">
              <p className="converter__item-text">
                Хочу приобрести
              </p>
              <label className="converter__label">
                <input className="converter__input converter__input--buy" type="number" placeholder="13,1234" />
              </label>
              <select сlassName="converter__select">
                <option>RUB</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBR</option>
                <option>CNY</option>
              </select>
            </div>
  
            <label className="converter__label-date">
              <input className="converter__input--date" type="date" max="2021-05-03" min="2021-04-26" defaultValue={this.state.date} />
            </label>
  
            <button className="converter__btn" type="submit">Сохранить результат</button>
          </div>
          <div className="convert__history">
            <button className="converter__btn">Очистить историю</button>
          </div>
  
        </div>
      </section>
    );
  }
}

export default Converter;