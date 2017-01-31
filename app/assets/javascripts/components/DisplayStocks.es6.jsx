class DisplayStocks extends React.Component {
  render() {
    return(
      <div>
        {
          // console.log("stockCollection man", this.props.stockCollection)
          this.props.stockCollection.map((ticker) => {
            return <Stock quote={ticker.quote} />
          })
        }
      </div>

    )
  }
}
