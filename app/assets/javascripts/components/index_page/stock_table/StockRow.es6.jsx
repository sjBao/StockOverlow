class StockRow extends React.Component {
  render(){
    let { name, symbol, ebitda, high, low, ask, bid } = this.props.data
    return (
      <tr>
        <th className="stock_entry">{name}</th>
        <th className="stock_entry">{symbol}</th>
        <th className="stock_entry">{ebitda}</th>
        <th className="stock_entry">{high}</th>
        <th className="stock_entry">{low}</th>
        <th className="stock_entry">{ask}</th>
        <th className="stock_entry">{bid}</th>
      </tr>
    )
  }
}
