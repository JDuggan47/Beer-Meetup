class Api::V1::BeersController < ApiController
  def index
    render json: beer_ids
  end
end
