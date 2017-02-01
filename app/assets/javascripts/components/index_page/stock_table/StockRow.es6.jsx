class StockRow extends React.Component {
  render(){
    let { Name, symbol, EBITDA, DaysHigh, DaysLow, Ask, Bid } = this.props.data
    return (
      <tr>
        <th className="stock_entry">{Name}</th>
        <th className="stock_entry">{symbol}</th>
        <th className="stock_entry">{EBITDA}</th>
        <th className="stock_entry">{DaysHigh}</th>
        <th className="stock_entry">{DaysLow}</th>
        <th className="stock_entry">{Ask}</th>
        <th className="stock_entry">{Bid}</th>
      </tr>
    )
  }
}
