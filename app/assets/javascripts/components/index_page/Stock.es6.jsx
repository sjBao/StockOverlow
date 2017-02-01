class Stock extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {quote: {}}
  }

  componentDidMount(){
    $.ajax({
      url: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${this.props.ticker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
    }).done((response) => {
      console.log("response for ticker", response.query.results.quote)
      this.setState({quote: response.query.results.quote})
    })
  }

  handleSubmit(event){
    event.persist()
    event.preventDefault()
    console.log('i did a thing!')
    $.ajax({
      method: 'POST',
      url: '/positions',
      data: {
        buy_price: this.state.quote.Ask,
        shares: this.refs.shareAmt.value,
        ticker: this.state.quote.symbol
      }
    })
     .done(response=>{
       console.log($(event.target).serialize())
     }.bind(this))

  }

  render() {
    console.log(this.state)
    return(
      <div className="position-stats-container">
        <ul className="position-list">
          <li>Name: {this.state.quote.Name}</li>
          <li>Ticker: {this.state.quote.symbol}</li>
          <li>High: {this.state.quote.DaysHigh}</li>
          <li>Low: {this.state.quote.DaysLow}</li>
          <li>CURRENT PRICE: ${this.state.quote.Ask} /share</li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label className="buy-share"> Number of Share to buy: </label>
          <input ref="shareAmt" type="text"/>
          <input type="hidden" value={this.state.quote.Ask}/>
          <input type="submit" className="btn btn-default buy-button"/>
        </form>

      </div>

    )
  }
}
