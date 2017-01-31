class Stock extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { Name, symbol, DaysHigh, DaysLow } = this.props.quote
    return(
      <div className="position-stats-container">
        <ul className="position-list">
          <li>Name: {Name}</li>
          <li>Ticker: {symbol}</li>
          <li>High: {DaysHigh}</li>
          <li>Low: {DaysLow}</li>

        </ul>
      </div>

    )
  }
}
