class Position extends React.Component {
  constructor() {
    super()
    this.state = { currentValue: 0}
  }

  componentDidMount(){
    $.ajax({
      url: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${this.props.data.ticker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
    })
     .done(response =>{
       let currentValue = response.query.results.quote.Ask
       this.setState({currentValue: currentValue})
       this.props.update((currentValue * this.props.data.shares).toFixed(2))
     }.bind(this))
  }

  updateParent

  render(){
    let { shares, buy_price, ticker } = this.props.data
    let costBasis = shares * buy_price
    let currentValue = (this.state.currentValue) * shares
    return (
      <table className="stock_table">
        <tbody>
          <tr className="stock_header">
            <th className="stock_title stock_entry">Ticker:</th>
            <th className="stock_title stock_entry">Shares:</th>
            <th className="stock_title stock_entry">Buy Price:</th>
            <th className="stock_title stock_entry">Cost Basis:</th>
            <th className="stock_title stock_entry">Current Value:</th>
            <th className="stock_title stock_entry">Profit & Loss:</th>
          </tr>
          <tr>
            <th className="stock_entry">{ticker}</th>
            <th className="stock_entry">{shares}</th>
            <th className="stock_entry money">${buy_price.toFixed(2)}</th>
            <th className="stock_entry money">${costBasis}</th>
            <th className="stock_entry money">${currentValue}</th>
            <th className="stock_entry profit-loss">{(currentValue - costBasis).toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
    )
  }
}
