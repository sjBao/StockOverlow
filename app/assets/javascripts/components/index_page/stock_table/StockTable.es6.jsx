class StockTable extends React.Component {
  constructor() {
    super()
    this.state = { fivePositionsData: [
      {name: 'Google', symbol: 'GOOG', ebitda: 1232, high: 10, low: 1, ask: 4, bid: 3},
      {name: 'Google', symbol: 'GOOG', ebitda: 1232, high: 10, low: 1, ask: 4, bid: 3},
      {name: 'Google', symbol: 'GOOG', ebitda: 1232, high: 10, low: 1, ask: 4, bid: 3},
      {name: 'Google', symbol: 'GOOG', ebitda: 1232, high: 10, low: 1, ask: 4, bid: 3},
      {name: 'Google', symbol: 'GOOG', ebitda: 1232, high: 10, low: 1, ask: 4, bid: 3}
    ] }
  }

  render(){
    return(
      <div className="col-sm-12 col-md-12 table-container">

        <table className="stock_table">
          <tbody>
            <tr className="stock_header">
              <th className="stock_title stock_entry">Company:</th>
              <th className="stock_title stock_entry">Symbol:</th>
              <th className="stock_title stock_entry">EBITDA:</th>
              <th className="stock_title stock_entry">Today's High:</th>
              <th className="stock_title stock_entry">Today's Low:</th>
              <th className="stock_title stock_entry">Asking Price:</th>
              <th className="stock_title stock_entry">Bidding Price:</th>
            </tr>
            {
              this.state.fivePositionsData.map((stockRow, i)=>{
                return <StockRow className="stock_entry" key={i} data={stockRow}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
