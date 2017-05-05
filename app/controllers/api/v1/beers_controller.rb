class Api::V1::BeersController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    @beer = current_user.beers
    render json: @beer
  end

  def create
    beer = Beer.new(beer_params)
    beer.user = current_user
    if beer.save
      render json: beer
    else
      render json: beer.user
    end
  end

  private

  def beer_params
    params.require(:beer).permit(
      :name_of_brewery,
      :name_of_beer,
      :style,
    )
  end

end
