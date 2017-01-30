class SessionsController < ApplicationController
  include SessionsHelper
  def new
    @user = User.new
  end

  def create
    user = User.find_by(:email => params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      log_in(user)
      redirect_to user
    else
      @errors = ['Username or Password is invalid']
      render :new
    end
  end

  def destroy
    log_out
    redirect_to '/'
  end

end
