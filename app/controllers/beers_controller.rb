class BeersController < Application

  def index
    @beers = Beer.all
  end

end
