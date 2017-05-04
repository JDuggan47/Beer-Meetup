class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @beer = Beer.all
  end

  def index
    @user = User.find(params[:id])
    @beers = @beer.user
  end

end
