class PositionsController < ApplicationController

  def show
    yahoo_client = YahooFinance::Client.new
    @stock_info = yahoo_client.quotes([params[:ticker]], [:high, :low, :ask, :bid, :name, :symbol, :ebitda])
    # # # could try to find_by ticker instead of id
    # # @position = Position.find_by(id: params[:id])
    # a = open("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22#{'GOOG'}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
    # p a
    # render component: 'Stock', props: { ticker: a, quote: '' }
  end

  def index
    yahoo_client = YahooFinance::Client.new
    @five_positions = yahoo_client.symbols_by_market('us', 'nyse').sample(5)
    @five_positions_data = yahoo_client.quotes(@five_positions, [:high, :low, :ask, :bid, :name, :symbol, :ebitda])
    # render json: @five_positions_data
  end

  def create
    @position = Position.new(
      shares: params[:shares] , buy_price: params[:buy_price], ticker: params[:ticker]
      )
    current_user.portfolio.positions << @position
    if @position.save
      redirect_to current_user
    else

    end

  end

end
