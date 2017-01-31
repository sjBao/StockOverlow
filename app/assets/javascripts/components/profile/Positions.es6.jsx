class Position extends React.Component {
  constructor() {
    super()
  }

  render(){
    let { shares, buy_price, ticker } = this.props.data
    return (
      <div className='position'>
        <p>Ticker: {ticker}</p>
        <p>Shares: {shares}</p>
        <p>Buy Price: {buy_price}</p>
      </div>
    )
  }
}
