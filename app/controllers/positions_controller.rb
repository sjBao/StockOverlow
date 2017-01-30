class PositionsController < ApplicationController
  def show
    @position = Portfolio.positions.find(params[:id])
  end

  def index
    @five_positions = yahoo_client.symbols_by_market('us', 'nyse').sample(5)
    @five_positions_data = yahoo_client.quotes(@five_positions, [:high, :low, :ask, :bid])
  end
end
