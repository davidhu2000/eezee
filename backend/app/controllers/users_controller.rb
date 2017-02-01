class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render :profile
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :profile
    else
      render json: @user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user)
      .permit(
        :username,
        :password,
        :email,
        :image_url,
        :preferences,
        :id
      )
  end

end
