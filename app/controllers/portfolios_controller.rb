class PortfoliosController < ApplicationController
  def show
    @portfolio = Portfolio.find(params[:id])
  end

  def new
    @portfolio = current_user.portfolios.new
  end

  def create
    @portfolio = current_user.portfolios.new
    if @portfolio.save
      redirect_to '/'
    else
      @errors = ['You must be logged in to create a portfolio.']
      render 'new'
    end
  end
end
