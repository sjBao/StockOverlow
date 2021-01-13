# frozen_string_literal: true

# Controller for User
class UsersController < ApplicationController
  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to @user
    else
      flash[:errors] = @user.errors
      redirect_to new_user_path
    end
  end

  def show
    redirect_to login_path unless logged_in?
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
