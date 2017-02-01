class App extends React.Component {
  constructor() {
    super()
    this.state = {stockTickers: [], ticker: '', tableInfo: [] }
    this.stockInfo = this.stockInfo.bind(this)
  }

  stockInfo(searchTicker) {
    $.ajax({
      url: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${searchTicker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
    }).done((response) => {
      // console.log("response for ticker", response.query.results)
      this.setState({stockTickers: [response.query.results], ticker: searchTicker})
    })
  }

  componentDidMount(){
    $.ajax({
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG,AMZN,AAPL,FB,AMD,UAA%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
    }).done(response=>{
      this.setState({tableInfo: response.query.results.quote})
    }.bind(this))
  }


  render() {
    return(
      <div className="row">
        <div className="col-sm-12 col-md-12">
            <SearchBar stockInfo={this.stockInfo} />
            <DisplayStocks key={this.state.ticker} stockCollection={this.state.stockTickers}/>
            <StockTable data={this.state.tableInfo} />
        </div>
      </div>
    )
  }
}
