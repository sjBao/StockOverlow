class App extends React.Component {
  constructor() {
    super()
    this.state = {stockTickers: []}
    this.stockInfo = this.stockInfo.bind(this)
  }

  stockInfo(searchTicker) {
    $.ajax({
      url: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${searchTicker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
    }).done((response) => {
      console.log("response for ticker", response.query.results)
      this.setState({stockTickers: [response.query.results]})
    })
  }


  render() {
    return(
      <div>
        <h1>Search a Stock</h1>
        <SearchBar stockInfo={this.stockInfo} />
        <DisplayStocks stockCollection={this.state.stockTickers} />
      </div>

    )
  }
}
