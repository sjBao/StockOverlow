class SearchBar extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchInput = this.refs.searchBar;
    this.props.stockInfo(searchInput.value);
    console.log("input", searchInput.value)
    searchInput.value = "";
  }

  render() {
    return(
      <div className="search-ticker-container">
        <section id="searcher">
          <form id="search-ticker-form" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="searchBar" name="ticker" placeholder="Search by Ticker" />
            <input type="submit" value="Search" name="searchTicker" />
          </form>
        </section>
      </div>
    )
  }
}
