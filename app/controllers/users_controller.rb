class UsersController < ApplicationController

  include SessionsHelper

  def new
    @user = User.new
  end

  def create
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def users_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
