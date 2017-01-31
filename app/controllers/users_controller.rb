class UsersController < ApplicationController

  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    @user = User.new(users_params)
    if @user.save
      @user.portfolio = Portfolio.create
      log_in(@user)
      redirect_to @user
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def users_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
