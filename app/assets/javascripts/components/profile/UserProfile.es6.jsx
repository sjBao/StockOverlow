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
        <h1>{this.props.fullname}</h1>

        <ul className="positions-list">
          {
            this.state.positions.map(position=>{
              return (
                <li key={position.id}>
                  <Position data={position} update={this.updateProfitLoss}
                   />
                </li>
              )
            })
          }
        </ul>
        <h2>Total Cost Basis:
          <span>{this.props.totalCostBasis}</span>
        </h2>
        <h2>
          <span>Total Current Value: {this.state.currentValue}</span>
        </h2>
        <h2>
          <span>Total Profit Loss: {this.state.currentValue - this.props.totalCostBasis}</span>
        </h2>
      </section>
    )
  }
}
