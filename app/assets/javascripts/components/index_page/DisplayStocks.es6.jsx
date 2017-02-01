class DisplayStocks extends React.Component {
  render() {
    return(
      <div>
        {
          // console.log("stockCollection man", this.props.stockCollection)
          this.props.stockCollection.map((ticker) => {
            return <Stock ticker={ticker.quote.symbol} quote={ticker.quote} stockUrl={"/positions/"+ticker.quote.symbol}/>
          })
        }
      </div>

    )
  }
}
