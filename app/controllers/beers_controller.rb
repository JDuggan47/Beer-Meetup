class BeersController < ApplicationController

  def index
    @beers = Beer.all
  end

  def new
  end

end
