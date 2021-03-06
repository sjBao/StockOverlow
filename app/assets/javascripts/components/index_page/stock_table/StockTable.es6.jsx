class StockTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
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
              this.props.data.map((stockRow, i)=>{
                return <StockRow className="stock_entry" key={i} data={stockRow}/>
              })
            }
          </tbody>
        </table>
    )
  }
}
