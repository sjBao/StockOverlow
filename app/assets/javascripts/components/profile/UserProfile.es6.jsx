class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {positions: this.props.positions, currentValue: 0 }
    this.updateProfitLoss = this.updateProfitLoss.bind(this)
  }

  componentDidMount(){
    console.log(this.state.positions)
    console.log(this.props)
  }

  updateProfitLoss(value){
    let newValue = parseFloat(this.state.currentValue) + parseFloat(value)
    this.setState({ currentValue: newValue })
  }

  render() {
    return (
      <section className="user-profile">
        <h1 className="profile_name">{this.props.fullname}</h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 position-table">
            {
              this.state.positions.map(position=>{
                return (
                  <div key={position.id}>
                    <Position data={position} update={this.updateProfitLoss}
                     />
                  </div>
                )
              })
            }
          </div>
        </div>
        <section className="total-values">
          <h3 className="totals">Total Cost Basis:
            <span className="money"> ${this.props.totalCostBasis}</span>
          </h3>
          <h3 className="totals">Total Current Value:
            <span className="money"> ${this.state.currentValue.toFixed(2)}</span>
          </h3>
          <h3 className="totals profit-loss">Total Profit Loss:
            <span> {(this.state.currentValue - this.props.totalCostBasis).toFixed(2)}</span>
          </h3>
        </section>
      </section>
    )
  }
}
