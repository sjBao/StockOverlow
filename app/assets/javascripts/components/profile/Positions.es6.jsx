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
       this.props.update(currentValue * this.props.data.shares)
     }.bind(this))
  }

  updateParent

  render(){
    let { shares, buy_price, ticker } = this.props.data
    let costBasis = shares * buy_price
    let currentValue = (this.state.currentValue) * shares
    return (
      <div className='position'>
        <p>Ticker: {ticker}</p>
        <p>Shares: {shares}</p>
        <p>Buy Price: ${buy_price}</p>
        <p>Cost Basis: ${costBasis}</p>
        <p>Current Value: ${currentValue}</p>
        <p>Profit & Loss: {currentValue - costBasis}</p>
      </div>
    )
  }
}
