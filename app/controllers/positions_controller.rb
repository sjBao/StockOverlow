class PositionsController < ApplicationController
  def show
    yahoo_client = YahooFinance::Client.new
    # could try to find_by ticker instead of id
    @position = Portfolio.positions.find(params[:id])
  end

  def index
    yahoo_client = YahooFinance::Client.new
    @five_positions = yahoo_client.symbols_by_market('us', 'nyse').sample(5)
    @five_positions_data = yahoo_client.quotes(@five_positions, [:high, :low, :ask, :bid, :name, :symbol, :ebitda])
  end
end
