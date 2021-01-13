# frozen_string_literal: true

# Controller for Sessions
class SessionsController < ApplicationController
  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    user = User.find_by(email: session_params[:email])
    if user&.authenticate(session_params[:password])
      login(user)
      redirect_to user
    else
      flash[:errors] = user.errors
      redirect_to login_path
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
